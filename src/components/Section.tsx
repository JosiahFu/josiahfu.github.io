import { PropsWithChildren } from 'react';

function Section({
    children,
    className = '',
}: PropsWithChildren<{ className?: string }>) {
    return (
        <section className={`${className} min-h-screen w-screen`}>
            {children}
        </section>
    );
}

export default Section;
