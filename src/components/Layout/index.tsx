import React, { FunctionComponent } from 'react';
import styled, { ThemeProps } from 'styled-components/macro';
import { SpacingType } from 'src/theme';

const Block = styled.div`
    background-color: ${({
        color,
        theme: {
            colors,
            colors: { white },
        },
    }: any) => (color ? colors[`${color}`] : white)};
`;

type Props = {
    color?: string;
};

export const ColorBlock: FunctionComponent<Props> = ({ color, children }) => {
    return <Block color={color}>{children}</Block>;
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
