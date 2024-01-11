import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { EmbedURLContext } from './EmbedURLContext';

function nothing() {}

function Embed({
    url,
    nodialog = false,
    children,
}: PropsWithChildren<{
    url: string;
    nodialog?: boolean;
}>) {
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
            <a href={url} className='contents' target='_blank'>
                <EmbedURLContext.Provider
                    value={
                        nodialog
                            ? nothing
                            : event => {
                                  if (event.ctrlKey) return;
                                  event.preventDefault();
                                  setOpen(true);
                              }
                    }>
                    {children}
                </EmbedURLContext.Provider>
            </a>
            {nodialog ? undefined : (
                <dialog
                    ref={dialogRef}
                    onClick={() => setOpen(false)}
                    onClose={() => setOpen(false)}
                    className='overflow-visible bg-transparent backdrop:bg-black/50'>
                    {
                        open && (
                            <iframe
                                src={url}
                                className={`h-[75vh] w-[75vw] rounded-2xl bg-white`}
                                allowFullScreen
                                onClick={event => event.stopPropagation()}
                            />
                        ) /*Only load iframe when dialog shown*/
                    }
                    <button
                        onClick={() => setOpen(false)}
                        className='absolute -right-4 -top-4 h-8 w-8 rounded-full bg-gray-500 transition hover:scale-110'>
                        <div className='h-2px absolute left-2 right-2 top-1/2 -translate-y-1/2 rotate-45 bg-white' />
                        <div className='h-2px rotate-135 absolute left-2 right-2 top-1/2 -translate-y-1/2 bg-white' />
                    </button>
                </dialog>
            )}
        </>
    );
}

export default Embed;
