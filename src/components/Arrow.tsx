import { MouseEventHandler, PropsWithChildren } from 'react';

function Arrow({
    className = '',
    directionClassName,
    children,
    onClick,
}: PropsWithChildren<{
    className?: string;
    directionClassName: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}>) {
    return (
        <div
            className={`${className} group hidden h-16 w-16 cursor-pointer place-items-center transition md:grid`}
            onClick={onClick}>
            {children}
            <div
                className={`h-12 w-12 opacity-80 group-hover:opacity-100 ${directionClassName}`}>
                <div className='absolute bottom-0 left-0 right-0 h-2 rounded-full bg-white'></div>
                <div className='absolute bottom-0 right-0 top-0 w-2 rounded-full bg-white'></div>
            </div>
        </div>
    );
}

export default Arrow;
