import React from 'react'
import ContentLoader from 'react-content-loader'

const GridContentWithHeaderLoader = props => {
    return (
        <ContentLoader viewBox="0 0 1000 850" title="" rtl 
        backgroundColor={props.nightMode?"#1f2937":"#fafafa"} foregroundColor={props.nightMode?"#2a3748":"#f0f2f5"} >

            <rect x="0" y="0" rx="0" ry="0" width="60" height="30" />
            <rect x="75" y="0" rx="0" ry="0" width="60" height="30" />
            <rect x="150" y="0" rx="0" ry="0" width="60" height="30" />
            <rect x="225" y="0" rx="0" ry="0" width="60" height="30" />
            <rect x="300" y="0" rx="0" ry="0" width="60" height="30" />
            <rect x="375" y="0" rx="0" ry="0" width="60" height="30" />


            <rect x="0"   y="45" rx="5" ry="5" width="245" height="250" />
            <rect x="255" y="45" rx="5" ry="5" width="490" height="510" />
            <rect x="755" y="45" rx="5" ry="5" width="245" height="250" />

            
            <rect x="0"   y="305" rx="5" ry="5" width="245" height="250" />
            <rect x="755" y="305" rx="5" ry="5" width="245" height="250" />

            <rect x="0"   y="565" rx="5" ry="5" width="245" height="250" />
            <rect x="255" y="565" rx="5" ry="5" width="240" height="250" />
            <rect x="505" y="565" rx="5" ry="5" width="240" height="250" />
            <rect x="755" y="565" rx="5" ry="5" width="245" height="250" /> 

        </ContentLoader>
    )
}

GridContentWithHeaderLoader.metadata = {
    name: 'baptiste fkt',
    github: 'baptistefkt',
    description: 'Three column grid layout',
    filename: 'Grid',
}

export default GridContentWithHeaderLoader