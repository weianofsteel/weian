import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { i18n, withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'

const useStyles = makeStyles({

})

const ArticleBlock = ({t,...props}) => {
    
    const classes = useStyles();

    const {
        title
    } = props;

    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={5}>
                    <p>{title}</p>
                </Grid>
                <Grid item xs={7}>
                    <p>{description}</p>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

ArticleBlock.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('article')(ArticleBlock)