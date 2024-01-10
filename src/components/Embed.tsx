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
                    className='bg-transparent backdrop:bg-black/50 overflow-visible'>
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
                        className='absolute -right-4 -top-4 w-8 h-8 bg-gray-500 text-white rounded-full'>
                        X
                    </button>
                </dialog>
            )}
        </>
    );
}

export default Embed;
