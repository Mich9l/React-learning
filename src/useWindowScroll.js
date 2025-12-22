import { useEffect, useState } from "react";

function useWindowScroll() {
    const [scrollPosition, setScrollPosition] = useState(() => ({
        x: typeof window !== 'undefined' ? window.scrollX : 0,
        y: typeof window !== 'undefined' ? window.scrollY : 0,
    }));

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}

export default useWindowScroll;
