import { PropsWithChildren, useEffect, useRef } from 'react';

function Sideways({ children }: PropsWithChildren) {
    const lockedY = useRef(false);
    const lockedX = useRef(false);

    useEffect(() => {
        const handler = () => {
            const scrolledTop = document.documentElement.scrollTop > 0;
            if (scrolledTop !== lockedX.current) {
                document.body.style.overflowX = scrolledTop ? 'hidden' : '';
                lockedX.current = scrolledTop;
            }

            const scrolledLeft = document.documentElement.scrollLeft > 0;
            if (scrolledLeft !== lockedY.current) {
                document.body.style.overflowY = scrolledLeft ? 'hidden' : '';
                lockedY.current = scrolledLeft;
            }
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div
            className={`flex flex-row *:flex-shrink-0 overflow-y-hidden self-start items-center w-max gap-16 pr-64`}>
            {children}
        </div>
    );
}

export default Sideways;
