import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
       
        width: '100%',
        height: '8vh',
        // paddingRight:"2rem",
        position: "sticky",
        // top: 0,
        padding: "0.8rem",
        
        borderBottom: "solid lightgray 1px"
    },
    txt: {
        fontFamily: "vazir !important",
        fontSize: "20px !important",
        fontWeight: "500 !important",
        marginRight: "1rem !important"
    },
    btn: {
        marginRight: "2rem !important"
    }
});

export default useStyles;