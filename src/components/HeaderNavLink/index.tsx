import React from 'react';
import { Paragraph } from 'src/components/Typography';
import { RowCenter } from 'src/components/Layout';
import { NavLinkStyled, HoverInidcator, HeaderLinkItem } from './styles';

export const HeaderNavLink = ({
    to,
    title,
    exact = false,
}: {
    to: string;
    title: string;
    exact?: boolean;
}) => {
    return (
        <HeaderLinkItem>
            <NavLinkStyled exact={exact} to={to} activeClassName='selected'>
                <Paragraph color='white'>{title}</Paragraph>
                <RowCenter>
                    <HoverInidcator />
                </RowCenter>
            </NavLinkStyled>
        </HeaderLinkItem>
    );
};
