import { PropsWithChildren } from 'react';

function Description({
    className = '',
    children,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <p
            className={`${className} col-span-full mb-16 max-w-2xl justify-self-center`}>
            {children}
        </p>
    );
}

export default Description;
