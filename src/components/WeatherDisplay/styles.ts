import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    iconWrapper: {
        width: 55,
        transition: "all 0.4s ease-in-out",
        margin: '0 auto'
    },
    largeIconWrapper: {
        width: 75,
        position: "absolute",
        top: '50%',
        left: 15,
        transform: "translateY(-60%)",
        transition: "all 0.4s ease-in-out",
        '@media (max-width: 400px)': {
            left: 0
        }
    },
    changeBtn: {
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        borderRadius: 0
    }
}))