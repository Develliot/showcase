import styled from 'styled-components/macro';
import { colors, fontSizes } from 'src/theme';

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
    color: ${props.color ? props.color : colors.darkGrey}
    textAlign = ${props.textAlign ? props.textAlign : 'left'}
    font-size: ${
        props.fontSize ? fontSizes[`${props.fontSize}`] : fontSizes.medium
    }
`;

export const Span = styled.span`
    ${props => baseText(props)}
`;

export const Paragraph = styled.p`
    ${props => baseText(props)}
    padding-bottom: ${({
        theme: {
            fontSizes: { medium },
        },
    }) => medium};
`;

export const H1 = styled.h1`
    ${props => baseText(props)}
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }: any) => (fontSize ? fontSize : extraExtraExtraLarge)};
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraExtraLarge },
        },
    }: any) => (fontSize ? fontSize : extraExtraExtraLarge)};
`;

export const H2 = styled.h1`
    ${props => baseText(props)}
    text-transform: uppercase;
    font-weight: 500;
    padding-bottom: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }: any) => (fontSize ? fontSize : extraExtraLarge)};
    font-size: ${({
        fontSize,
        theme: {
            fontSizes: { extraExtraLarge },
        },
    }: any) => (fontSize ? fontSize : extraExtraLarge)};
`;
