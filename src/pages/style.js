import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    personalInformation: {
        backgroundColor: "#f2f2f2",
        display: 'flex',
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "auto"
    },
    personalinfo: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: "column",
        width: '63%',
        marginTop: "3rem",
        marginBottom: "3rem",
        borderRadius: "16px",
        alignItems: "center",
        padding: 25,
        paddingTop: "2rem"
    },
    font12: {
        fontSize: "12px !important",
    },
    font16: {
        fontSize: "16px",
        fontWeight: 500
    },
    font32: {
        fontSize: "32px",
        fontWeight: 700,

    },
    font20: {
        fontSize: "20px",
        fontWeight: 700,

    },
    divider: {
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    modalCard: {
        maxWidth: 300,
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "white"
    },
    modal: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",


    },
    input: {
        width: "100 %",
        borderRadius: "17px",
        height: " 46px",
        marginTop: "1rem",
        borderColor: "blue"

    },
    mb1: {
        marginBottom: "1rem"
    },
    credit: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: "column",
        width: '68%',
        marginTop: "3rem",
        marginBottom: "3rem",
        borderRadius: "16px",
        alignItems: "end",

        padding: 25,
        paddingTop: "2rem"
    },
    p1: {
        padding: "1rem",
        borderRadius: "15px",
        marginRight: "1rem"

    },
    mt1: {
        marginTop: "1rem",
    },
    paybtn: {
        width: 300,
        borderRadius: "20px",
        fontSize: "20px",
        backgroundColor: "lightgray",
        marginTop: "2rem"
    },
    orderlist: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        overflowX: "hidden"
    },
    orderbtn: {
        //padding:"0.8rem"
        borderRadius: "20px",
        marginTop: "2rem"
    },
    transactionDiv: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: "column",
        width: '70%',
        height: "90vh",
        marginTop: "3rem",
        marginBottom: "3rem",
        borderRadius: "16px",
        alignItems: "center",
        justifyContent: "center",
        padding: 25,
        paddingTop: "2rem",

    },
    freeCredit: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: "column",
        width: '70%',
        height: "90vh",
        marginTop: "3rem",
        marginBottom: "3rem",
        borderRadius: "16px",
        alignItems: "center",

        padding: 25,
        paddingTop: "2rem",

    },
    redonlytxt: {
        border: "1px solid lightgray",
        borderRadius: "15px",
        width: 220,
        padding: "10px",
        marginTop: "3rem"
    },
    sharebtn: {
        backgroundColor: "#07c !important",
        width: 240,
        borderRadius: "20px",
        fontSize: "20px",
        marginTop: "2rem"
    },
    socialCard: {
        width: "30%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        justifyContent:"space-between",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "white"
    },
    mr1: {
        marginRight: "1rem"
    },
    
    enterPrice:{
        border:"1px solid lightgray",
        borderRadius:"15px",
        marginTop:"1rem",
        marginBottom:"1rem",
        padding:"0.5rem"
    },
    addresses:{
        display: 'flex',
        flexDirection: "column",
      
        width: '50%',
        height:"100vh",
        marginTop: "3rem",
        marginBottom: "3rem",
        borderRadius: "16px",
        alignItems:"flex-start",
        alignContent:"center"
    },
    locationbtn:{
        backgroundColor:"white !important",
        padding:"1.2rem",
        
        borderRadius:"20px",
        
    },
    locTextField:{
       width:200
    }


});

export default useStyles;