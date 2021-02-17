import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    mainCol: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '35vmin',
        backgroundColor: '#ffffff96',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        '@media (max-width:500px)': {
            minHeight: '70vmin'
        },
    },
    darkSkin: {
        '& #main-col': {
            filter: 'invert(1) hue-rotate(180deg)',
            '& img:not(#weather-logo)': {
                filter: 'invert(1) hue-rotate(180deg)'
            }
        }
    }
}))