import { PropsWithChildren, useContext } from 'react';
import { EmbedURLContext } from './EmbedURLContext';

function Card({
    title,
    img,
    children,
    className = '',
}: PropsWithChildren<{
    title: string;
    img: string;
    className?: string;
}>) {
    const handleClick = useContext(EmbedURLContext);

    return (
        <div
            className={`${className} bg-gray-400/20 p-8 rounded-3xl border-white/80 border flex flex-col gap-4 cursor-pointer ${
                handleClick
                    ? 'hover:shadow-md hover:shadow-white/50 transition'
                    : ''
            }`}
            onClick={handleClick}>
            <h3 className='text-center text-2xl'>{title}</h3>
            <img src={img} alt={title} />
            {children}
        </div>
    );
}

export default Card;
