import React from 'react';
import useStyles from './style';
import { Divider, Typography, Container, Button, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <IconButton className={classes.btn} >
                    <ArrowForwardIcon />
                </IconButton>
            </Link>
            <Typography className={classes.txt}>{props.title}</Typography>

        </div>
    )
}

export default Header
