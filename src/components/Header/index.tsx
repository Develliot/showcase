import React, { useState, useMemo } from 'react';

import { useScrollPosition } from 'src/hooks/useScrollPosition';
import urls from 'src/urls';

import { H2 } from 'src/components/Typography';
import { VerticalSpacer } from 'src/components/Layout';
import { HeaderWrapper, HeaderInner, Links } from './styles';

import { HeaderNavLink } from 'src/components/HeaderNavLink';

export const Header = ({ visible }: { visible: boolean }) => {
    return (
        <HeaderWrapper visible={visible}>
            <HeaderInner>
                <H2 color='white'>Showcase</H2>
                <VerticalSpacer size='medium' />
                <nav>
                    <Links>
                        <HeaderNavLink
                            to={urls.home}
                            title='Home'
                            exact={true}
                        />
                        <HeaderNavLink
                            to={urls.designSystem}
                            title='Design System'
                        />
                        <HeaderNavLink to={urls.usingAPIs} title='Using APIs' />
                    </Links>
                </nav>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export const HideOnScroll = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true);

    useScrollPosition(
        ({
            prevPos,
            currPos,
        }: {
            prevPos: { x: number; y: number };
            currPos: { x: number; y: number };
        }) => {
            const isShow = currPos.y >= prevPos.y;
            if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        },
        [hideOnScroll],
        null,
        false,
        300
    );

    return useMemo(() => <Header visible={hideOnScroll} />, [hideOnScroll]);
};

export default HideOnScroll;
