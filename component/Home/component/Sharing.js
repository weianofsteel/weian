import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../../../i18n'

const useStyles = makeStyles({
    
})

const Sharing = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        mode
    } = props;
    
    return(
        <React.fragment>
            <Grid container>

            </Grid>
        </React.fragment>
    )
}

Sharing.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('sharing')(Sharing)