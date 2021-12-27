import Box from '@mui/material/Box';
import React from 'react'
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';


const useStyles = makeStyles({
    root: {
        width: "100%",
        textAlign: "center",
        position: "relative",
        bottom: 0,
        backgroundColor: red[600],
        color: "#ffff",
        fontWeight: "400",
        fontSize: "large",
        padding: "0 0 10px",
        '&>span': {
            fontWeight: '600'
        }
    }
});

function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <span>COVID19-stats</span>, app made for recruitment purposes by <span>Szymon Pielat</span>.
        </Box>
    )
}
export default Footer;
