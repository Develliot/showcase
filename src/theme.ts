import { DefaultTheme } from 'styled-components';

export const fontSizes: { [key: string]: string } = {
    extraTiny: '0.6.25rem',
    tiny: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    extraLarge: '1.25rem',
    extraExtraLarge: '1.5rem',
    extraExtraExtraLarge: '2rem',
};

export const breakpoints = {
    large: '1400px',
};

export const globalPadding = '10vw';

export const spacing = {
    tiny: '8px',
    small: '16px',
    medium: '24px',
    large: '48px',
    extraLarge: '64px',
};

export const colors: { [key: string]: string } = {
    white: '#F3F7F0',
    darkGrey: '#343434',
    blue: '#1B4965',
    pink: '#A93F55',
    yellow: '#FFC857',
};

const theme: DefaultTheme = {
    fontSizes,
    breakpoints,
    globalPadding,
    spacing,
    colors,
};

export default theme;
