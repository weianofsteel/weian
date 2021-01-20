import React from 'react'
import { Resume } from '../../component/Resume/Resume'

const ResumePage = () => {
    return(
        <Resume/>
    )
}

ResumePage.getInitialProps = async () => ({
    namespacesRequired: ['header', 'banner'],
})

export default ResumePage