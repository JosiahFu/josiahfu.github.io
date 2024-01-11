import { PropsWithChildren } from 'react';

function Description({
    className = '',
    children,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <p
            className={`${className} col-span-full max-w-2xl justify-self-center mb-16`}>
            {children}
        </p>
    );
}

export default Description;
