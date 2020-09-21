import React from 'react'
import useStyles from './style'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const  Layout=()=> {
    const classes=useStyles();


    return (
        <div className={classes.root}> 
            
            <Main/>
        </div>
    )
}

export default Layout
