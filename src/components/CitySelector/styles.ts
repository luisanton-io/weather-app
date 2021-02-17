import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    textField: {
        '& fieldset': {
            borderRadius: 0
        }
    }
}))