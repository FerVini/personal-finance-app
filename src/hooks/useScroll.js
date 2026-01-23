import { useRef } from "react";

export function useScroll() {
    const ref = useRef(null);

    function scrollTo() {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return {
        ref,
        scrollTo
    }
}