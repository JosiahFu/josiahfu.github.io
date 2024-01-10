import { PropsWithChildren } from 'react';

function AnchorEmbed({ url, children }: PropsWithChildren<{ url: string }>) {
    return (
        <a href={url} target='_blank' className='contents'>
            {children}
        </a>
    );
}

export default AnchorEmbed;
