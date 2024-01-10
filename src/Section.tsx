import { PropsWithChildren } from 'react';

function Section({
    children,
    className = '',
}: PropsWithChildren<{ className?: string }>) {
    return (
        <section className={`${className} snap-start min-h-screen `}>
            {children}
        </section>
    );
}

export default Section;
