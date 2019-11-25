import { createGlobalStyle, DefaultTheme } from 'styled-components';

createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&display=swap');
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
`;

const theme: DefaultTheme = {
    fontSizes: {
        extraTiny: '0.6.25rem',
        tiny: '0.75rem',
        small: '0.875rem',
        medium: '1rem',
        large: '1.125rem',
        extraLarge: '1.25rem',
        extraExtraLarge: '1.5rem',
        extraExtraExtraLarge: '2rem',
    },

    spacing: {
        tiny: '8px',
        small: '16px',
        medium: '24px',
        large: '48px',
        extraLarge: '64px',
    },

    colors: {
        white: '#F3F7F0',
        darkGrey: '#343434',
        blue: '#1B4965',
        pink: '#A93F55',
        yellow: '#FFC857',
    },
};

export default theme;
