import { MouseEventHandler, createContext } from 'react';

export const EmbedURLContext = createContext<MouseEventHandler | undefined>(
    undefined
);
