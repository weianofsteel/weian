import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'

const useStyles = makeStyles({

})

const LearnByDoing = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;
    
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </React.Fragment>
    )
}

LearnByDoing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(LearnByDoing)