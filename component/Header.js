import React from 'react'
import { i18n, withTranslation } from '../i18n'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { TransitionGroup } from 'react-transition-group'
import styles from '../css/Public/Header.module.css'

const useStyles = makeStyles({
  button: {
      fontFamily:'Rosario'
  },
  button2: {
    fontFamily:'Rosario',
    color:'blue'
}
})

const Header = () => {

    const classes = useStyles();

    return(
        <React.Fragment>
             
             <Button
              type='button'
              className={classes.button}
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
            >
              language
            </Button>
            <Button
              type='button'
              className={classes.button2}
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
            >
              language
            </Button>
            <Button
              type='button'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zhHant' : 'en')}
            >
              language
            </Button>

            <p className={styles.ball}>Learn More</p>

            <TransitionGroup
              transitionName="styles.bounce"
            >
              <p>Learn More</p>
            </TransitionGroup>
             
        </React.Fragment>
    )
}


export default withTranslation('common')(Header)