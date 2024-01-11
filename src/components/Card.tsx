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
            className={`${className} flex basis-[28rem] flex-col gap-4 rounded-3xl border-2px border-spring-green-400 bg-white/10 p-8 backdrop-blur-md ${
                handleClick
                    ? 'cursor-pointer transition duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-white/50'
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
