import React, { useState, useRef } from 'react';
import { useScrollPosition } from 'src/hooks/UseScrollPosition';
import { ContentWrapperStyled } from './styles';

const AnimatedContentWrapper = ({ children }: { children: any }) => {
    const [hideOnScroll, setHideOnScroll] = useState(true);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isBrowser = typeof window !== `undefined`;

    useScrollPosition(
        ({
            prevPos,
            currPos,
        }: {
            prevPos: { x: number; y: number };
            currPos: { x: number; y: number };
        }) => {
            const isShow = isBrowser ? currPos.y < window.innerHeight : false;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        wrapperRef,
        false,
        300
    );

    return (
        <ContentWrapperStyled ref={wrapperRef} visible={hideOnScroll}>
            {children}
        </ContentWrapperStyled>
    );
};

export default AnimatedContentWrapper;
