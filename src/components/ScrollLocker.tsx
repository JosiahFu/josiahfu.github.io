import { useEffect, useState } from 'react';
import { useEventUpdatedValue } from '../useEventValue';

function ScrollLocker() {
    const [scrolledTop, scrolledLeft] = useEventUpdatedValue(
        'scrollend',
        () => [
            document.documentElement.scrollTop > 0,
            document.documentElement.scrollLeft > 0,
        ]
    );

    const [lock, setLock] = useState<'x' | 'y' | undefined>(undefined);

    const handleWheel = (event: WheelEvent) => {
        if (event.shiftKey) return;

        const factor =
            {
                0x00: 1,
                0x01: 12,
                0x02: window.innerWidth,
            }[event.deltaMode] ?? 1;
        document.documentElement.scrollBy({
            left: event.deltaY * factor,
        });
    };

    useEffect(() => {
        if (lock === 'x') {
            window.scrollTo({ left: 0 });
            document.body.style.overflowX = 'hidden';
        }
        if (lock === 'y') {
            window.scrollTo({ top: 0 });
            document.body.style.overflowY = 'hidden';
            document.addEventListener('wheel', handleWheel);
        }
        return () => {
            document.body.style.overflowX = '';
            document.body.style.overflowY = '';
            if (lock === 'y')
                document.removeEventListener('wheel', handleWheel);
        };
    }, [lock]);

    if (scrolledTop) {
        if (lock !== 'x') setLock('x');
    } else if (scrolledLeft) {
        if (lock !== 'y') setLock('y');
    } else {
        if (lock !== undefined) setLock(undefined);
    }

    return <></>;
}

export default ScrollLocker;
