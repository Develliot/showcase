import React, { FunctionComponent } from 'react';
import styled, { ThemeProps } from 'styled-components/macro';
import { SpacingType, ColorType, colors } from 'src/theme';

const Block = styled.div`
    background-color: ${({
        color,
        theme: {
            colors,
            colors: { white },
        },
    }: {
        theme: any;
        color: ColorType;
    }) => (color ? colors[`${color}`] : white)};
`;

type Props = {
    color?: ColorType;
};

export const ColorBlock: FunctionComponent<Props> = ({ color, children }) => {
    return (
        <Block color={color || 'white'}>
            <VerticalSpacer size='extraLarge' />
            {children}
            <VerticalSpacer size='extraExtraLarge' />
        </Block>
    );
};

export const ContentWrapper = styled.div`
    padding: ${({ theme: { globalPadding } }) => `0 ${globalPadding}`};
`;

export const VerticalSpacer = styled.div`
    height: ${({
        size,
        theme: {
            spacing,
            spacing: { medium },
        },
    }: {
        size: SpacingType;
        theme: any;
    }) => (size ? spacing[`${size}`] : medium)};
`;
