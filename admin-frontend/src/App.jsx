import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import common from '@material-ui/core/colors/common';
import { SnackbarProvider } from 'notistack';
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
                <SnackbarProvider maxSnack={3}>
                    <CssBaseline />
                    <Main />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
