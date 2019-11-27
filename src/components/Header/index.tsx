import React, { useState, useMemo } from 'react';
import styled from 'styled-components/macro';
import { NavLink, withRouter } from 'react-router-dom';

import { useScrollPosition } from 'src/hooks/UseScrollPosition';
import urls from 'src/urls';

import { H2, Paragraph } from 'src/components/Typography';
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
    z-index: 10;
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
        margin: ${({
            theme: {
                spacing: { small },
            },
        }) => `0 ${small} 0 0`};
    }
`;

const HoverInidcator = styled.div`
    height: 3px;
    background-color: ${({
        theme: {
            colors: { yellow },
        },
    }) => yellow};
    margin-top: ${({
        theme: {
            spacing: { tiny },
        },
    }) => tiny};
    width: 100%;
    max-width: 0;
    transition: max-width ease 0.3s;
`;

const RowCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Paragraph} {
        transition: color ease 0.3s;
        font-weight: 600;
    }

    &.selected {
        ${HoverInidcator} {
            max-width: 150px;
        }
    }

    &:hover,
    &:focus {
        outline: none;

        ${Paragraph} {
            color: ${({
                theme: {
                    colors: { yellow },
                },
            }) => yellow};
        }
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

    return (
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

export default withRouter(Header);
