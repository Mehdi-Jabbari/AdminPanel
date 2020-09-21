import React, { useState } from 'react'
import useStyles from './style';
import Header from '../component/Layout/components/Header/Header';
import { Grid, Typography, Button, Divider, Card, TextField } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { Modal } from 'react-responsive-modal';
import Modal from '@material-ui/core/Modal';


const Orderlist = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.personalInformation}>
            <Header title={"سفارش های من"} />

            <div className={classes.orderlist}>
               <img src={"/images/NoOrders.svg"} style={{marginBottom:"2rem"}}/>
               <Typography align={"center"} color="textSecondary">هنوز سفارش ثبت نکرده اید.سفارش خود<br/> را رایگان ثبت کنید.</Typography>
               <Button variant="contained" color="primary" size="large" className={classes.orderbtn}>درخواست خدمات</Button>
            </div>

        </div>

    )
}

export default Orderlist
