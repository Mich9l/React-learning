import { useState } from "react";

export const useLocalStorage = (key, initialValue = "") => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.error(e);
            return initialValue;
        }
    });

    const setItem = (newValue) => {
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (e) {
            console.error(e);
        }
    };

    const removeItem = () => {
        try {
            setValue("");
            window.localStorage.removeItem(key);
        } catch (e) {
            console.error(e);
        }
    };

    return [value, setItem, removeItem];
};
