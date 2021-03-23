import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    
})

const Content = ({t,...props}) => {
    
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

Content.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('content')(Content)