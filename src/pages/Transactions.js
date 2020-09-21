import React, { useState } from 'react'
import useStyles from './style';
import Header from '../component/Layout/components/Header/Header';
import { Grid, Typography, Button, Divider, Card, TextField } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { Modal } from 'react-responsive-modal';
import Modal from '@material-ui/core/Modal';


const Transactions = () => {
    const classes = useStyles();
   
    return (
        <div className={classes.personalInformation}>
            <Header title={"تراکنش های مالی"} />

            <div className={classes.transactionDiv}>
                <img src="/images/NoCreditCard.svg" style={{marginBottom:"1rem"}}/>
                
                <Typography color={"textSecondary"}>تراکنشی وجود ندارد.</Typography>
            </div>

        </div>

    )
}

export default Transactions
