import { PropsWithChildren } from 'react';
import Section from './Section';

function Article({
    title,
    className = '',
    children,
}: PropsWithChildren<{ title: string; className?: string }>) {
    return (
        <Section
            className={`${className} grid grid-cols-1 md:stagger lg:grid-cols-2 gap-8 max-w-[80rem] p-16`}>
            <h2 className='text-4xl text-center col-span-full'>{title}</h2>
            {children}
        </Section>
    );
}

export default Article;
