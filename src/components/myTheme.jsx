import { createTheme } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';

const myTheme = createTheme({
    palette: {
        primary: lightGreen,
        secondary: {
            main: '#ffb74d',
        },
    },
});

export default myTheme;