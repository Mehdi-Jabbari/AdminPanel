import React from 'react'
import useStyles from './Main/style';
import { Grid, Typography, ButtonBase } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom';
const Btn = (props) => {

    const classes = useStyles()
    return (
        <ButtonBase style={{ width: "100%", marginTop: "1rem", }}>
            <Link to={props.Link} style={{width:"100%"}}>
                <Grid container direction={"row"} alignItems={"center"} className={classes.border}>
                    <Grid item container md={11} sm={11} xs={11} alignItems={"center"}>
                        {props.icon}
                        <Typography color={"textPrimary"} className={classes.btnTxt}>{props.txt}</Typography>
                    </Grid>

                    <Grid item container md={1}sm={1} xs={1} justify={"flex-end"}>
                        <ChevronLeftIcon />
                    </Grid>
                </Grid>
            </Link>
        </ButtonBase>
    )
}

export default Btn
