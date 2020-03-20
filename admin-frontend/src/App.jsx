import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import common from '@material-ui/core/colors/common';
import store from './store/store';
import Main from './Main/Main';

const theme = createMuiTheme({
    palette: {
        background: {
            default: common.white,
        },
    },
});

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Main />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
