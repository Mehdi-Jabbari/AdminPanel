import React, { useEffect, useState } from 'react'
import useStyles from './style';
import { Grid, Avatar, Typography, Button, IconButton, responsiveFontSizes } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import RedeemOutlinedIcon from '@material-ui/icons/RedeemOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Btn from '../Btn';
import Header from '../Header/Header';
import Axios from 'axios';
import { getProfile } from '../../../../api/api_profile';
import { toast } from 'react-toastify';




const Main = () => {
    const classes = useStyles();
    const [profile, setProfile] = useState([]);


    useEffect(() => {
        // Axios.get("http://localhost:3000/profile")
        //     .then(response => {
        //         const data = response.data;
        //         setProfile(data);


        //     }).catch(error => {
        //         console.log(error);
        //     })
        getProfile((isOk, data) => {
            if (!isOk)
                return toast.error("ناموفق در دریافت هشتگ ها");
            setProfile( data);
            
            console.log(data);
        })
    }, [])
    return (
        <div className={classes.div1}>

            <Header title={"پروفایل"} />
            <div className={classes.root}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item>
                        <Avatar className={classes.large} />
                    </Grid>
                    <Grid item direction={"column"}>
                        <Typography className={classes.username}>{profile.fname +" "+ profile.lname}</Typography>
                        <Typography color={"textPrimary"} className={classes.phoneNum}>{profile.phoneNum}</Typography>
                    </Grid>
                </Grid>

                <Btn txt={"اطلاعات شخصی"} icon={<PersonOutlineOutlinedIcon className={classes.icon} color={""} />} Link={"/personalInformation"} />
                <Btn txt={"اعتبار استادکار"} icon={<AccountBalanceWalletOutlinedIcon className={classes.icon} />} Link={"/credit"} />
                <Btn txt={"سفارش های من"} icon={<EventNoteOutlinedIcon className={classes.icon} />} Link={"/orderlist"} />
                <Btn txt={"تراکنش های مالی"} icon={<MonetizationOnOutlinedIcon className={classes.icon} />} Link={"/Transactions"} />
                <Btn txt={"آدرس های من"} icon={<LocationOnOutlinedIcon className={classes.icon} />} Link={"/addresses"} />
                <Btn txt={"اعتبار رایگان"} icon={<RedeemOutlinedIcon className={classes.icon} />} Link={"/freeCredit"} />

                <Divider orientation="vertical" style={{ width: "100%", height: "1px", marginTop: "2rem", marginBottom: '1rem' }} />
                <div style={{ display: "flex", width: "100%" }}>
                    <Button
                        startIcon={<ExitToAppOutlinedIcon fontSize={"large"} />}
                        className={classes.extBtn}
                        size={"large"}
                    >
                        <Typography className={classes.extBtntxt}>خروج</Typography>
                    </Button>
                </div>


            </div>

        </div>
    )
}

export default Main


