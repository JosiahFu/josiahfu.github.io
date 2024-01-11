import { PropsWithChildren, useContext } from 'react';
import { EmbedURLContext } from './EmbedURLContext';

function Card({
    title,
    img,
    children,
    left = false,
    right = false,
    className = '',
}: PropsWithChildren<{
    title: string;
    img: string;
    className?: string;
    left?: boolean;
    right?: boolean;
}>) {
    const handleClick = useContext(EmbedURLContext);

    return (
        <div
            className={`${className} bg-white/10 p-8 rounded-3xl flex flex-col gap-4 border-2px border-spring-green-400 backdrop-blur-md ${
                handleClick
                    ? 'hover:shadow-lg hover:shadow-white/50 cursor-pointer hover:-translate-y-2 transition duration-500'
                    : ''
            } ${left ? 'md:max-lg:stagger-left' : ''} ${
                right ? 'md:max-lg:stagger-right' : ''
            }`}
            onClick={handleClick}>
            <h3 className='text-center text-2xl'>{title}</h3>
            <img src={img} alt={title} className='rounded-lg' />
            {children}
        </div>
    );
}

export default Card;
