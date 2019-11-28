import React, { useState, useMemo } from 'react';

import { useScrollPosition } from 'src/hooks/UseScrollPosition';
import urls from 'src/urls';

import { H2, Paragraph } from 'src/components/Typography';
import { VerticalSpacer, RowCenter } from 'src/components/Layout';
import {
    HeaderWrapper,
    HeaderInner,
    Links,
    NavLinkStyled,
    HoverInidcator,
} from './styles';

export const Header = ({ visible }: { visible: boolean }) => {
    return (
        <HeaderWrapper visible={visible}>
            <HeaderInner>
                <H2 color='white'>Showcase</H2>
                <VerticalSpacer size='medium' />
                <nav>
                    <Links>
                        <li>
                            <NavLinkStyled
                                exact={true}
                                to={urls.home}
                                activeClassName='selected'
                            >
                                <Paragraph color='white'>Home</Paragraph>
                                <RowCenter>
                                    <HoverInidcator />
                                </RowCenter>
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled
                                to={urls.designSystem}
                                activeClassName='selected'
                            >
                                <Paragraph color='white'>
                                    Design System
                                </Paragraph>
                                <RowCenter>
                                    <HoverInidcator />
                                </RowCenter>
                            </NavLinkStyled>
                        </li>
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
