import React from 'react'
import { Writings } from '../../component/Writings/Writings'

const WritingsPage = () => {
    return(
        <Writings/>
    )
}

WritingsPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner'],
})

export default WritingsPage