import React, { useEffect, useState } from 'react'
import useStyles from './style';
import Header from '../component/Layout/components/Header/Header';
import { Grid, Typography, Button, Divider, Card, TextField } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Modal from '@material-ui/core/Modal';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { getProfile, updateCodeRequest } from '../api/api_profile';


const PersonalInformation = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [profile, setProfile] = useState([])
    const [newFname, setNewFname] = useState()
    const [newLname, setNewLname] = useState()
    const [newCode, setNewCode] = useState()
    useEffect(() => {
        // Axios.get("http://localhost:3000/profile")
        //     .then(response => {
        //         const data = response.data;
        //         setProfile(data);
        //         setNewFname(data.fname);
        //         setNewLname(data.lname);
        //         setNewCode(data.code);
        //     }).catch(error => {
        //         console.log(error);
        //     })
        getProfile((isOk, data) => {
            if (!isOk)
                return  toast.error("خطا در دریافت اطلاعات ");
                setProfile(data);
                setNewFname(data.fname);
                setNewLname(data.lname);
                setNewCode(data.code)
                console.log(data);
            
        })
    }, []);

    const handleClick = () => {
        const data = {

            "fname": newFname,
            "lname": newLname,
            "id": profile.id,
            "phoneNum": profile.phoneNum,
            "city": profile.city,
            "joinDate": profile.joinDate,
            "qtyOrder": profile.qtyOrder,
            "code": newCode

        }
        // Axios.post("http://localhost:3000/profile", data)
        //     .then(res => {
        //         return toast.success(res)
        //     }).catch(error => {
        //         alert("!اطلاعات ویرایش نشد")

        //     })

        updateCodeRequest(data,(isOk, data) => {
            if (!isOk)
                return  toast.error("خطا در دریافت اطلاعات ");
                 toast.success("نام و نام خانوادگی بروزرسانی شد");
                
                console.log(data);
            
        })
        setOpen(false);
        setTimeout(() => {
            window.location.reload()

        }, 2000);
    };

    const handleId = () => {
        const data = {
            "fname": newFname,
            "lname": newLname,
            "id": profile.id,
            "phoneNum": profile.phoneNum,
            "city": profile.city,
            "joinDate": profile.joinDate,
            "qtyOrder": profile.qtyOrder,
            "code": newCode
        }

        updateCodeRequest(data,(isOk, data) => {
            if (!isOk)
                return  toast.error("خطا در دریافت اطلاعات ");
                 toast.success("نام و نام خانوادگی بروزرسانی شد");
                
                console.log(data);
            
        })
        setOpen(false);
        setTimeout(() => {
            window.location.reload()

        }, 2000);
    }





    return (
        <div className={classes.personalInformation}>
            <Header title={"اطلاعات شخصی"} />

            <div className={classes.personalinfo}>
                <Grid container direction={"column"}>

                    <Grid item container justify={"space-between"} direction={"row"}>
                        <Grid item >
                            <Typography color={"textSecondary"} variant="caption" className={classes.font12}>نام و نام خانوادگی</Typography>
                            <br />
                            <Typography color={"textPrimary"} variant="caption" className={classes.font16}>{profile.fname + " " + profile.lname}</Typography>
                        </Grid>
                        <Grid item >
                            <Button endIcon={<ChevronLeftIcon />} onClick={() => setOpen(true)}>
                                <Typography variant={"caption"} style={{ paddingLeft: "10px" }}>ویرایش</Typography>
                            </Button>
                            <Modal open={open} className={classes.modal}>

                                <div className={classes.modalCard}>
                                    <Typography >ویرایش نام و نام خانوادگی</Typography>
                                    <br />
                                    <TextField
                                        id="filled-textarea"
                                        placeholder="نام"
                                        variant="filled"
                                        value={newFname}
                                        onChange={e => setNewFname(e.target.value)}
                                        className={classes.vazir}
                                        color="primary"
                                    />

                                    <br />
                                    <TextField
                                        id="filled-textarea"
                                        placeholder="نام خانوادگی"
                                        variant="filled"
                                        color="primary"
                                        value={newLname}
                                        onChange={e => setNewLname(e.target.value)}
                                        className={classes.mb1}
                                        color="primary"
                                    />
                                    <Grid container direction={"row"} justify={"space-around"}>
                                        <Button variant="outlined" color={"primary"} onClick={() => setOpen(false)}>انصراف</Button>
                                        <Button variant="contained" color={"primary"} onClick={handleClick} >ثبت</Button>
                                    </Grid>
                                </div>

                            </Modal>
                        </Grid>

                    </Grid>
                    <Divider className={classes.divider} />

                    <Typography color={"textSecondary"} variant="caption" className={classes.font12}>شماره همراه</Typography>
                    <Typography color={"textPrimary"} variant="caption" className={classes.font16}>{profile.phoneNum}</Typography>
                    <Divider className={classes.divider} />
                    <Grid item container justify={"space-between"} direction={"row"}>
                        <Grid item >
                            <Typography color={"textSecondary"} variant="caption" className={classes.font12}>کد ملی</Typography>
                            <br />
                            <Typography color={"textPrimary"} variant="caption" className={classes.font16}>{profile.code === "" ? "وارد نشده" : profile.code} </Typography>
                        </Grid>
                        <Grid item >
                            <Button endIcon={<ChevronLeftIcon />} onClick={() => setOpen2(true)}>
                                <Typography variant={"caption"} style={{ paddingLeft: "10px" }}>ویرایش</Typography>
                            </Button>
                            <Modal open={open2} className={classes.modal}>

                                <div className={classes.modalCard}>
                                    <Typography >ویرایش کدملی (اختیاری) </Typography>
                                    <br />
                                    <TextField
                                        id="id"
                                        placeholder="کدملی"
                                        variant="filled"
                                        value={newCode}
                                        onChange={e => setNewCode(e.target.value)}
                                        color="primary"

                                    />
                                    <br />

                                    <Grid container direction={"row"} justify={"space-around"}>
                                        <Button variant="outlined" color={"primary"} onClick={() => setOpen2(false)}>انصراف</Button>
                                        <Button variant="contained" color={"primary"} onClick={handleId}>ثبت</Button>
                                    </Grid>
                                </div>

                            </Modal>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Typography color={"textSecondary"} variant="caption" className={classes.font12}>شهر </Typography>
                    <Typography color={"textPrimary"} variant="caption" className={classes.font16}>{profile.city}</Typography>
                    <Divider className={classes.divider} />
                    <Typography color={"textSecondary"} variant="caption" className={classes.font12}>تاریخ عضویت </Typography>
                    <Typography color={"textPrimary"} variant="caption" className={classes.font16}>{profile.joinDate}</Typography>
                    <Divider className={classes.divider} />
                    <Typography color={"textSecondary"} variant="caption" className={classes.font12}>تعداد سفارشات ثبت شده</Typography>
                    <Typography color={"textPrimary"} variant="caption" className={classes.font16}>{profile.qtyOrder}</Typography>

                </Grid>

            </div>

        </div>

    )
}

export default PersonalInformation
