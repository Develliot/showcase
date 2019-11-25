import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'src/components/Home';
import theme from 'src/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

export default App;
