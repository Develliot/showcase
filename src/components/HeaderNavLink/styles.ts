import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { Paragraph } from 'src/components/Typography';

export const HeaderLinkItem = styled.li`
    padding: 0;
    margin: ${({
        theme: {
            spacing: { small },
        },
    }) => `0 ${small} 0 0`};
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
