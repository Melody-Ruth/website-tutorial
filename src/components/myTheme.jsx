import { createTheme } from '@mui/material/styles';
import { cyan } from '@mui/material/colors';

const myTheme = createTheme({
    palette: {
        primary: {
            main: cyan[500],
            contrastText: cyan[50],
        },
        secondary: {
          main: '#ffe082',
        },
    },
});

export default myTheme;