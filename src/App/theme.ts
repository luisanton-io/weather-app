import { createMuiTheme } from '@material-ui/core'
import { grey, blue } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: grey[500],
        },
    },
});