import { PropsWithChildren } from 'react';
import Section from './Section';

function Article({
    title,
    titleLink,
    className = '',
    children,
}: PropsWithChildren<{
    title: string;
    titleLink?: string;
    className?: string;
}>) {
    return (
        <Section
            className={`${className} md:stagger grid max-w-[80rem] grid-cols-1 content-center gap-8 p-8 md:p-16 lg:grid-cols-2`}>
            <h2 className='col-span-full text-center text-4xl'>
                {titleLink ? (
                    <a href={titleLink} className='underline'>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h2>
            {children}
        </Section>
    );
}

export default Article;
