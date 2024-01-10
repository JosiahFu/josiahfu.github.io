import { createContext } from 'react';

export const EmbedURLContext = createContext<(() => void) | undefined>(
    undefined
);
