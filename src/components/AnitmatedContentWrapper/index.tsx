import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';

import { ContentWrapper } from 'src/components/Layout';
import { useScrollPosition } from 'src/hooks/UseScrollPosition';

const ContentWrapperStyled = styled(ContentWrapper)`
    transition: opacity ease 0.5s, transform ease 0.4s;
    opacity: ${({ visible }: { visible: boolean }) => (visible ? 1 : 0)};
    transform: ${({ visible }: { visible: boolean }) =>
        visible ? `scaleY(1)` : `scaleY(0.85)`};
`;

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
