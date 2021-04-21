import React from 'react'
import { About } from '../../component/About/About'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'
import { NextSeo } from 'next-seo'

const AboutPage = ({ t }) => {

    return(
        <React.Fragment>

            <NextSeo
                title="Weian Wang | Front-end developer"
                description="I am a front-end developer, open to opportunities."
                openGraph={{
                    url: 'https://weianofsteel.com',
                    title: 'Weian Wang | Front-end developer',
                    description: 'I am a front-end developer, open to opportunities.',
                    images: [
                      {
                        url: 'https://raw.githubusercontent.com/weianofsteel/saliejung/master/public/openGraph.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Weian Wang | Front-end developer',
                      }
                    ],
                    site_name: 'Weian Wang | Front-end developer',
                  }}
            />   
             
             <About/>

        </React.Fragment>   
    )
}

AboutPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'about'],
})

AboutPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('header')(AboutPage)