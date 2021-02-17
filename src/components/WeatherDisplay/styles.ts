import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    iconWrapper: {
        width: 65,
        position: "absolute",
        top: '50%',
        left: 0,
        transform: "translateY(-50%)",
        transition: "all 0.4s ease-in-out"
    },
    changeBtn: {
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        borderRadius: 0
    }
}))