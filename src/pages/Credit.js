import React, { useEffect, useState } from 'react'
import useStyles from './style';
import Header from '../component/Layout/components/Header/Header';
import { Grid, Typography, Button, Divider, Card, TextField, FormControlLabel, Radio, Checkbox, Input } from '@material-ui/core';


import Axios from 'axios';
import { getCredit } from '../api/api_profile';
import { toast } from 'react-toastify';


const Credit = () => {
    const classes = useStyles();

    const [credit, setCredit] = useState([])
    const [price, setPrice] = useState();

    useEffect(() => {
        // Axios.get("http://localhost:3000/credit")
        //     .then(response => {
        //         const data = response.data;
        //         setCredit(data);

        //     }).catch(error => {
        //         console.log(error);
        //     })
        getCredit((isOk, data) => {
            if (!isOk)
                return  toast.error("خطا در دریافت اطلاعات ");
                setCredit(data);
                
                console.log(data);
            
        })
    }, [])
    return (
        <div className={classes.personalInformation}>
            <Header title={"اعتبار"} />

            <div className={classes.credit}>
                <Typography className={classes.font16}>اعتبار شما</Typography>
                <Typography className={classes.font32}>{credit.credit}تومان</Typography>
                <br /><br />
                <Typography className={classes.font16}>افزایش اعتبار</Typography>
                <div className={classes.enterPrice}>
                    <Typography className={classes.font16} color={"textPrimary"}>مبلغ مورد نظر خود را وارد کنید.</Typography>
                    {/* <input type="text" placeholder={"مثال:100,000 تومان"} style={{borderColor:"unset"}} /> */}
                    <Grid container >
                        <Input value={price} placeholder="مثال : 100.000 تومان" style={{borderColor:"unset"}}/>
                        <Typography>تومان</Typography>
                    </Grid>
                </div>
                <Grid container direction={"row"} style={{ marginBottom: "3rem" }}>
                    <Grid item>
                        <Button className={classes.p1} variant={"outlined"} onClick={e => setPrice(50000)}>
                            50,000 تومان
                    </Button>
                        <Button className={classes.p1} variant={"outlined"} onClick={e => setPrice(100000)}>
                            100,000 تومان
                    </Button>
                        <Button className={classes.p1} variant={"outlined"} onClick={e => setPrice(200000)}>
                            200,000 تومان
                    </Button>
                        <Button className={classes.p1} variant={"outlined"} onClick={e => setPrice(300000)}>
                            300,000 تومان
                    </Button>
                    </Grid>
                </Grid>
                <Typography className={classes.font20}>انتخاب درگاه</Typography>
                <Grid container direction={"row"} alignItems={"center"} className={classes.mt1}>
                    <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <Typography className={classes.font16} style={{ marginRight: "0.5rem" }}>بانک پاسارگاد</Typography>
                </Grid>
                <Button className={classes.paybtn} >پرداخت</Button>
            </div>

        </div>

    )
}

export default Credit
