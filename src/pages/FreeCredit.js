import React, { useState } from 'react'
import useStyles from './style';
import Header from '../component/Layout/components/Header/Header';
import { Grid, Typography, Button, Divider, Card, TextField, StepLabel, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { Modal } from 'react-responsive-modal';
import Modal from '@material-ui/core/Modal';


const FreeCredit = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    
    return (
        <div className={classes.personalInformation}>
            <Header title={"اعتبار رایگان"} />

            <div className={classes.freeCredit}>

                <Typography className={classes.font16} style={{ lineHeight: "24px" }}>
                    با به اشتراک گذاشتن شماره تلفن خود و یا کد زیر با دوستانتان، ۲۰ هزار تومان اعتبار استادکار به آنها هدیه دهید. پس از انجام اولین سفارش آنها، شما نیز ۲۵ هزار تومان اعتبار رایگان دریافت کنید.
                </Typography>

                <Typography align={"center"} className={classes.redonlytxt}>L3235LMEMZ</Typography>
                <Button color="primary" variant={"contained"} className={classes.sharebtn} onClick={() => setOpen(true)}>اشتراک گذاری</Button>
                <img src="/images/no-search-result.svg" style={{ marginTop: "6rem" }} />
                <Typography color={"textSecondary"} align={"right"} className={classes.font12} >
                    هنوز کسی را دعوت نکرده‌اید و یا دعوت شده‌گان <br />از استادکار استفاده نکرده‌اند.
                </Typography>
                <Modal open={open}  className={classes.modal}>

                    <div className={classes.socialCard}>

                        <div>
                            <IconButton>
                                <img src="/images/gmail.svg" width={50} />
                            </IconButton>
                            <IconButton>
                                <img src="/images/whatsapp.svg" width={50} />
                            </IconButton>
                            <IconButton>
                                <img src="/images/telegram.svg" width={50} />
                            </IconButton>
                            <IconButton>
                                <img src="/images/twitter.svg" width={50} />
                            </IconButton>
                        </div>
                        <Button color={"primary"} size={"large"} className={classes.font20} onClick={()=>setOpen(false)} >انصراف</Button>

                    </div>

                </Modal>
            </div>

        </div>

    )
}

export default FreeCredit
