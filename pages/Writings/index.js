import React from 'react'
import { Writings } from '../../component/Writings/Writings'
import PropTypes from 'prop-types'

const WritingsPage = ({t}) => {
    return(
        <Writings/>
    )
}

WritingsPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'article'],
})

WritingsPage.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default WritingsPage