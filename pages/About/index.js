import React from 'react'
import { About } from '../../component/About/About'

const AboutPage = () => {
    return(
        <About/> 
    )
}

AboutPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'content'],
})

export default AboutPage