import styled from 'styled-components/macro';
import { colors, fontSizes, ColorType } from 'src/theme';

type baseTextProps = {
    color?: string;
    textAlign?: 'left' | 'right' | 'center';
    fontSize?:
        | 'extraTiny'
        | 'tiny'
        | 'small'
        | 'medium'
        | 'large'
        | 'extraLarge'
        | 'extraExtraLarge'
        | 'extraExtraExtraLarge';
};

const baseText = (props: baseTextProps) => `
    font-family: 'Quicksand', sans-serif;
    color: ${props.color ? colors[`${props.color}`] : colors.darkGrey};
    textAlign = ${props.textAlign ? props.textAlign : 'left'};
    font-size: ${
        props.fontSize ? fontSizes[`${props.fontSize}`] : fontSizes.medium
    };
    line-height: 1.5em;
`;

export const Span = styled.span`
    ${props => baseText(props)}
`;

export const Paragraph = styled.p`
    ${props => baseText(props)}
    max-width: 600px;
`;

export const H1 = styled.h1`
    ${props => baseText(props)}
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }: any) => (fontSize ? fontSize : extraExtraExtraLarge)};
`;

export const H2 = styled.h2`
    ${props => baseText(props)}
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }: any) => (fontSize ? fontSize : extraExtraLarge)};
`;

export const H3 = styled.h3`
    ${props => baseText(props)}
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraLarge },
        },
    }: any) => (fontSize ? fontSize : extraLarge)};
`;
