import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
       backgroundColor:"white",
        display:'flex',
        flexDirection:"column",
        width:'71%',
        marginTop:"3rem",
        marginBottom:"3rem",
        borderRadius:"16px",
        alignItems:"center",
        padding:15,
        paddingTop:"2rem",
        // height:'50vh',
        // overflowX:'hidden'
    },
    div1:{
        backgroundColor:"#f2f2f2",
        display:'flex',
        height:"100vh",
        flexDirection:"column",
        alignItems:"center",
        overflowY:"auto",
        overflowX:"hidden"
    },
    large:{
        width:60,
        height:60
    },
    username:{
        fontFamily:"vazir !important",
        fontSize:"24px !important",
        paddingRight:"1rem",
        paddingBottom:"0.5rem"
    },
    phoneNum:{
        fontFamily:"vazir !important",
        fontSize:"16px !important",
        paddingRight:"1rem"
    },
    btnTxt:{
        fontFamily:"vazir !important",
        fontSize:"16px !important",
        paddingRight:"1rem",
        color:"#1f1f1f !important",
        lineHeight: 2,
       
    },
    icon:{
       fontSize:30,
       //color:"#212121 !important"
    },
    button:{
        width:"100% !important"
    },
    border:{
        border:"1px solid lightgray",
        boxShadow:"0px 0px 3px 1px #DBDBDB",
        borderRadius:"10px",
        padding:"0.6rem"
    },
    extBtntxt:{
        fontFamily:"vazir !important",
        fontSize:"16px !important",
        paddingRight:"1rem",
        color:"#1f1f1f !important",
    },
    extBtn:{
        padding:"0.5rem",
        borderRadius:"20px%",
       
    }

});

export default useStyles;