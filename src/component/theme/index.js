import {createMuiTheme} from '@material-ui/core'


const theme = createMuiTheme({


  overrides:{
      MuiTypography:{
          root:{
              fontFamily:'vazir !important'
          }
      },
      MuiButton:{
          root:{
            fontFamily:"vazir !important"
        }
    },
    MuiFilledInput:{
        input:{
            fontFamily:"vazir !important"

          }
      }
  }
})

export default theme;