import React from 'react';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import {HintSystemProvider} from "./provider/HintSystemProvider";
import { AuthContext } from './context/authContext';
import { createTheme } from '@mui/material/styles';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {useAuth} from "./hooks/auth.hook";
import {useRoutes} from "./Routes";
import {LernProvider} from "./provider/LernProvider";
import {Lern} from "./components/Lern/Lern";
import {PopupFormProvider} from "./provider/PopupFormProvider";
import {PopupForm} from "./components/popupForm/PopupForm";

const theme = createTheme({
    palette: {
        primary: {
            light: '#FEDAD0',
            main: '#FA4616',
            dark: '#F03200',
            contrastText: '#fff',
        },
        secondary: {
            light: '#99D9F0',
            main: '#009FDA',
            dark: '#12B2ED',
            contrastText: '#000',
        },
    },
});

function App() {
    const { login, logout, token, refreshToken, ready } = useAuth();

    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);

    return (
        <ThemeProvider theme={theme}>
            <AuthContext.Provider
                value={{
                    login,
                    logout,
                    token,
                    refreshToken,
                    ready,
                }}
            >
                <HintSystemProvider>
                    <LernProvider>
                        <PopupFormProvider>
                            <Lern />
                            {/*<PopupForm />*/}
                            <Router>{routes}</Router>
                        </PopupFormProvider>
                    </LernProvider>
                </HintSystemProvider>
            </AuthContext.Provider>
        </ThemeProvider>
    );
}

export default App;
