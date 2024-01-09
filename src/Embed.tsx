import { ImgHTMLAttributes, useEffect, useRef, useState} from "react";

function Embed({
    url,
    img,
    className = '',
    iframeClassName = 'h-[75vh] w-[75vw]',
    alt,
    ...otherProps
}: { url: string; img: string; iframeClassName?: string } & Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'onClick'
>) {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (open) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [open]);

    return (
        <>
            <img
                src={img}
                alt={alt}
                className={`${className} cursor-pointer hover:shadow-white shadow-md transition `}
                onClick={() => setOpen(true)}
                {...otherProps}
            />
            <dialog
                ref={dialogRef}
                onClick={() => setOpen(false)}
                onClose={() => setOpen(false)}
                className='bg-transparent backdrop:bg-black/50 overflow-visible'>
                {
                    open && (
                        <iframe
                            src={url}
                            className={`${iframeClassName} rounded-2xl`}
                            allowFullScreen
                            onClick={event => event.stopPropagation()}
                        />
                    ) /*Only load iframe when dialog shown*/
                }
                <button
                    onClick={() => setOpen(false)}
                    className='absolute -right-4 -top-4 w-8 h-8 bg-gray-500 text-white rounded-full'>
                    X
                </button>
            </dialog>
        </>
    );
}

export default Embed;
