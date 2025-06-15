import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';


const darkTheme = createTheme({
    typography: {
        fontFamily: '"InterVariable", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d47a1', // dark blue
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
        },
    },
});

export default darkTheme;