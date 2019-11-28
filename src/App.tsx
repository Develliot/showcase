import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from 'src/theme';
import Routes from 'src/Routes';
import Header from 'src/components/Header';

// This is going to be where all the project level HOCs live
const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Routes />
                    {/* TODO FOOTER */}
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
