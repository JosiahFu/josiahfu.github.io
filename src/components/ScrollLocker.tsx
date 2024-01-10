import { useEffect, useState } from 'react';
import { useEventUpdatedValue } from '../useEventValue';

function ScrollLocker() {
    const [scrolledTop, scrolledLeft] = useEventUpdatedValue('scroll', () => [
        document.documentElement.scrollTop > 0,
        document.documentElement.scrollLeft > 0,
    ]);

    const [lock, setLock] = useState<'x' | 'y' | undefined>(undefined);

    useEffect(() => {
        if (lock === 'x') document.body.style.overflowX = 'hidden';
        if (lock === 'y') document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowX = '';
            document.body.style.overflowY = '';
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
