import { useRef, useLayoutEffect, DependencyList, RefObject } from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({
    element,
    useWindow,
}: {
    element: RefObject<HTMLElement> | null;
    useWindow: boolean;
}) {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element ? element.current : document.body;
    const position = target
        ? target.getBoundingClientRect()
        : { top: 0, left: 0 };

    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top };
}

export function useScrollPosition(
    effect: any,
    deps: DependencyList,
    element: RefObject<HTMLElement> | null,
    useWindow: boolean,
    wait: number
) {
    const position = useRef(getScrollPosition({ useWindow, element }));

    let throttleTimeout: number | null = null;

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow });
        effect({ prevPos: position.current, currPos });
        position.current = currPos;
        throttleTimeout = null;
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, deps);
}