import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { Paragraph } from 'src/components/Typography';

export const HeaderWrapper = styled.header`
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

export const HeaderInner = styled.div`
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

export const Links = styled.ul`
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

export const HoverInidcator = styled.div`
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

export const RowCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
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
