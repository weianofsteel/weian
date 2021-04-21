import React from 'react'
import { Writings } from '../../component/Writings/Writings'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'
import { NextSeo } from 'next-seo'

const WritingsPage = ({t}) => {
    return(
        <React.Fragment>

            <NextSeo
                title="Weian Wang | Front-end developer"
                description="I am a front-end developer, open to opportunities."
                openGraph={{
                    url: 'https://weianofsteel.com/Writings',
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
             
            <Writings/>

        </React.Fragment>
    )
}

WritingsPage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner', 'article', 'footer'],
})

WritingsPage.propTypes = {
    t: PropTypes.func.isRequired,
  }

export default withTranslation('header')(WritingsPage)