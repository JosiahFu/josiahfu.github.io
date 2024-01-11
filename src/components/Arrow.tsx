import { MouseEventHandler } from 'react';

function Arrow({
    className = '',
    directionClassName,
    onClick,
}: {
    className?: string;
    directionClassName: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <div
            className={`${className} hidden h-16 w-16 cursor-pointer place-items-center opacity-70 transition hover:opacity-100 md:grid`}
            onClick={onClick}>
            <div className={`h-12 w-12 ${directionClassName}`}>
                <div className='absolute bottom-0 left-0 right-0 h-2 rounded-full bg-white'></div>
                <div className='absolute bottom-0 right-0 top-0 w-2 rounded-full bg-white'></div>
            </div>
        </div>
    );
}

export default Arrow;
