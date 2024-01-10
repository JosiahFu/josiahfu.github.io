import { useEffect, useState } from 'react'

function useEventValue<K extends keyof WindowEventMap, T>(event: K, callback: (event: WindowEventMap[K]) => T): T | undefined;
function useEventValue<K extends keyof WindowEventMap, T>(event: K, callback: (event: WindowEventMap[K]) => T, initialValue: T): T;
function useEventValue<K extends keyof WindowEventMap, T>(event: K, callback: (event: WindowEventMap[K]) => T, initialValue?: T) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const handler = (event: WindowEventMap[K]) => {
            setValue(callback(event));
        }
        window.addEventListener(event, handler);
        return () => window.removeEventListener(event, handler);
    }, [event, callback]);

    return value;
}

function useEventUpdatedValue<T>(event: keyof WindowEventMap, callback: () => T): T {
    const [value, setValue] = useState(callback);

    useEffect(() => {
        const handler = () => {
            setValue(callback());
        }
        window.addEventListener(event, handler);
        return () => window.removeEventListener(event, handler);
    }, [event, callback]);

    return value;
}

export { useEventValue, useEventUpdatedValue };
