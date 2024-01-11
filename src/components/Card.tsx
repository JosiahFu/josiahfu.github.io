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
            className={`${className} bg-white/10 p-8 rounded-3xl flex flex-col gap-4 border-2px border-spring-green-400 backdrop-blur-md ${
                handleClick
                    ? 'hover:shadow-lg hover:shadow-white/50 cursor-pointer transition duration-500'
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
