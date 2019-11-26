import React from 'react';
import styled from 'styled-components/macro';
import { NavLink, withRouter } from 'react-router-dom';
import urls from 'src/urls';

const HeaderWrapper = styled.div`
    padding: ${({ theme: { globalPadding } }) => `0 ${globalPadding}`};
    background-color: ${({
        theme: {
            colors: { blue },
        },
    }) => blue};
`;

const Links = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: flex-start;
`;

const NavLinkStyled = styled(NavLink)`
    padding: ${({
        theme: {
            spacing: { medium },
        },
    }) => `0 ${medium}`};
    color: ${({
        theme: {
            colors: { white },
        },
    }) => white};
    text-decoration: none;

    &.selected {
        color: ${({
            theme: {
                colors: { yellow },
            },
        }) => yellow};
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
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
        </HeaderWrapper>
    );
};

export default withRouter(Header);
