import { PropsWithChildren } from 'react';

function Section({
    children,
    className = '',
}: PropsWithChildren<{ className?: string }>) {
    return (
        <section className={`${className} snap-start min-h-screen relative`}>
            {children}
        </section>
    );
}

export default Section;
