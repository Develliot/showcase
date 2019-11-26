import React, { useState, useMemo } from 'react';
import styled from 'styled-components/macro';
import { NavLink, withRouter } from 'react-router-dom';

import { useScrollPosition } from 'src/hooks/UseScrollPosition';
import urls from 'src/urls';

import { H2 } from 'src/components/Typography';
import { VerticalSpacer } from '../Layout';

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100vw;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};
    transition: margin ease 0.2s, opacity ease 0.3s;
    margin-top: ${({ visible }: { visible: boolean }) =>
        visible ? `0` : `-100px`};
    opacity: ${({ visible }: { visible: boolean }) => (visible ? `1` : `0`)};
`;

const HeaderInner = styled.div`
    margin: 0 auto;
    background-color: ${({
        theme: {
            colors: { darkGrey },
        },
    }) => darkGrey};
    padding: ${({
        theme: {
            spacing: { small },
            globalPadding,
        },
    }) => `${small} ${globalPadding}`};
`;

const Links = styled.ul`
    padding: 0;
    max-width: ${({
        theme: {
            breakpoints: { large },
        },
    }) => large};

    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: flex-start;

    li {
        padding: 0;
        margin: 0;
    }
`;

const NavLinkStyled = styled(NavLink)`
    padding: ${({
        theme: {
            spacing: { medium },
        },
    }) => `0 ${medium} 0 0`};
    color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    text-decoration: none;
    transition: color ease 0.3s;
    font-weight: 600;

    &.selected {
        color: ${({
            theme: {
                colors: { yellow },
            },
        }) => yellow};
    }
`;

const Header = () => {
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

    return useMemo(
        () => (
            <HeaderWrapper visible={hideOnScroll}>
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
                                    Home
                                </NavLinkStyled>
                            </li>
                            <li>
                                <NavLinkStyled
                                    to={urls.designSystem}
                                    activeClassName='selected'
                                >
                                    Design System
                                </NavLinkStyled>
                            </li>
                        </Links>
                    </nav>
                </HeaderInner>
            </HeaderWrapper>
        ),
        [hideOnScroll]
    );
};

export default withRouter(Header);
