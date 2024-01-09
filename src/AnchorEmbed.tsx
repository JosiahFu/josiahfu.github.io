import { ImgHTMLAttributes } from 'react';

function AnchorEmbed({
    url,
    img,
    className = '',
    alt,
    ...otherProps
}: { url: string; img: string } & Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'onClick'
>) {
    return (
        <a href={url} target='_blank'>
            <img
                src={img}
                alt={alt}
                className={`${className} cursor-pointer hover:shadow-white shadow-md transition`}
                {...otherProps}
            />
        </a>
    );
}

export default AnchorEmbed;
