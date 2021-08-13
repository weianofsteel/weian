import React from 'react'
import { i18n, withTranslation } from '../i18n'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import TranslateIcon from '@material-ui/icons/Translate'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    link: {
      fontFamily:'Roboto',
      fontWeight:400,
      letterSpacing:'1px',
      marginLeft: '32px',
      color:'#8F8F8F',
      fontSize:'1rem',
      "&:hover":{
          color:'black'
      }
    },
    formControl: {
        width:'20rem',
        fontSize:'1.6rem'
    }
  })

const Sample = ({t}) => {

    const classes = useStyles();

    const [ language, setLanguage ] = React.useState('en');

    const [open, setOpen] = React.useState(false);
    
    // const handleLanguage = () => {
    //     i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
    // }

    const handleChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    return(
        <React.Fragment>
            
            <Grid container style={{marginTop:'5rem', fontSize:'2rem'}}>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <FormControl className={classes.formControl}>
                        {/* <InputLabel id="demo-controlled-open-select-label">
                            <TranslateIcon/>language/語言
                        </InputLabel> */}
                        <p>
                            <TranslateIcon/>&nbsp;language/語言
                        </p>

                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={language}
                            onChange={handleChange}
                        >
                            <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'zhHant'}>中文</MenuItem>
                            {/* <MenuItem value={'fr'}>Français</MenuItem>
                            <MenuItem value={'es'}>Español</MenuItem> */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <p style={{fontSize:'1.5rem'}}>
                        {t('title')}
                    </p>
                    <br/>
                    <p style={{fontSize:'1.5rem'}}>
                        {t('greeting')}
                    </p>
                </Grid>
            </Grid>
            <Grid container style={{marginTop:'1rem'}}>
                <Grid item xs={5}></Grid>
                
            </Grid>
            
            {/* <div>
                <Button
                    type='button'
                    className={classes.link}
                    style={{backgroundColor: 'transparent'}}
                    disableRipple={true}
                    onClick={handleLanguage}
                  >
                    <TranslateIcon/>language/語言
                  </Button>
            </div> */}
                    
                    
        </React.Fragment>
    )
}

Sample.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('sample')(Sample)