import React, { useEffect, useState } from 'react'
import useStyles from './style';
import Header from '../component/Layout/components/Header/Header';
import { Button, TextField, MenuItem, Grid } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Axios from 'axios';
import mapboxgl from 'mapbox-gl'


const Addresses = () => {
    const classes = useStyles();

    const [credit, setCredit] = useState([])
    const [price, setPrice] = useState();
    useEffect(() => {
        var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

        mapboxgl.accessToken = 'pk.eyJ1IjoibWVoZGlqYnIiLCJhIjoiY2tmMnAyd3lvMDEwcjMzcXNrM2plb2Q2cSJ9.HUTzIL_XUYxmOMDtvcLAUg';
        var map = new mapboxgl.Map({
          container: 'YOUR_CONTAINER_ELEMENT_ID',
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 2,
          center: [-300.5, 20],
        });

    },[])

    const locations = [
        {
            label: "ابوذر-شرقی"
        },
        {
            label: "تهرانپارس"
        },
        {
            label: "تجریش"
        },
        {
            label: "مجدیه"
        },
        {
            label: "هنگام"
        },
        {
            label: "اقدسیه"
        },
        {
            label: "علایین"
        },
        {
            label: "فرودگاه"
        },
        {
            label: "درکه"
        },
        {
            label: "دربند"
        },



    ]

    return (
        <div className={classes.personalInformation}>
            <Header title={"آدرس های من"} />

            <div className={classes.addresses}>
                <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                    <Grid item >
                        <Button variant={"outlined"} color={"primary"}
                            className={classes.locationbtn}
                            size={"large"}
                        >
                            <LocationOnOutlinedIcon style={{ marginLeft: 5 }} />
                            تهران
                         </Button>
                    </Grid>

                    <Grid item >
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="محله"
                            // value={currency}
                            // onChange={handleChange}
                            // helperText="لطفا محله خود را انتخاب کنید"
                            variant="outlined"

                            // style={{width:200}}

                            className={classes.locTextField}
                        >

                            {locations.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.label}
                                </MenuItem>

                            ))}
                        </TextField>
                    </Grid>
                    <Grid item >
                        <TextField

                            label="آدرس دقیق"
                            // value={currency}
                            // onChange={handleChange}

                            variant="outlined"
                            size={"medium"}
                        // style={{width:200}}

                        />


                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} color={"primary"} style={{ borderRadius: "15px" }}>
                            ذخیره آدرس
                            <StarBorderOutlinedIcon style={{ marginRight: "0.5rem" }} />
                        </Button>
                    </Grid>


                </Grid>
                <div id="YOUR_CONTAINER_ELEMENT_ID" style={{width:"100%",height:"70%",marginTop:"2rem",marginBottom:"1rem"}}>

                </div>
            </div>

        </div>

    )
}

export default Addresses
