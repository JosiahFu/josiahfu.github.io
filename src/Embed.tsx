import { ImgHTMLAttributes, useEffect, useRef, useState} from "react";

function Embed({url, img, className = '', alt, ...otherProps}: {url: string, img: string} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'onClick'>) {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(open) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [open]);

    return (
        <>
            <img src={img} alt={alt} className={`${className} cursor-pointer`} onClick={() => setOpen(true)} {...otherProps} />
            <dialog ref={dialogRef} onClick={() => setOpen(false)} onClose={() => setOpen(false)} className='bg-white backdrop:bg-black/50 rounded-2xl'>
                {open && <iframe src={url} className='h-[75vh] w-[75vw]' onClick={event => event.stopPropagation()} /> /*Only load iframe when dialog shown*/}
            </dialog>
        </>
    );
}

export default Embed;