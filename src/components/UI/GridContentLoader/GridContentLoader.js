import React from 'react'
import ContentLoader from 'react-content-loader'

const GridContentLoader = props => {
    return (
        <ContentLoader viewBox="0 0 1000 850" title="" rtl  backgroundColor={props.nightMode?"#1f2937":"#fafafa"}
         foregroundColor={props.nightMode?"#2a3748":"#f0f2f5"} >
            <rect x="0"   y="10" rx="5" ry="5" width="245" height="250" />
            <rect x="255" y="10" rx="5" ry="5" width="490" height="510" />
            <rect x="755" y="10" rx="5" ry="5" width="245" height="250" />

            
            <rect x="0"   y="270" rx="5" ry="5" width="245" height="250" />
            <rect x="755" y="270" rx="5" ry="5" width="245" height="250" />

            <rect x="0"   y="530" rx="5" ry="5" width="245" height="250" />
            <rect x="255" y="530" rx="5" ry="5" width="240" height="250" />
            <rect x="505" y="530" rx="5" ry="5" width="240" height="250" />
            <rect x="755" y="530" rx="5" ry="5" width="245" height="250" /> 

        </ContentLoader>
    )
}

GridContentLoader.metadata = {
    name: 'baptiste fkt',
    github: 'baptistefkt',
    description: 'Three column grid layout',
    filename: 'Grid',
}

export default GridContentLoader