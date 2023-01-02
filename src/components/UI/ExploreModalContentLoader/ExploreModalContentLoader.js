import React from 'react'
import ContentLoader from 'react-content-loader'

const ExploreModalContentLoader = props => {

    return (
        window.innerWidth > 1024 ? (
            <ContentLoader width={"100%"} height={"87vh"} title="" rtl backgroundColor={props.nightMode ? "#1f2937" : "#f0f2f5"}
                foregroundColor={props.nightMode ? "#2a3748" : "#f0f2f5"}>

                <rect x="620" y="90" rx="5" ry="5" width="350" height="10" />
                <rect x="620" y="110" rx="5" ry="5" width="350" height="10" />
                <rect x="620" y="130" rx="5" ry="5" width="350" height="10" />

                <rect x="0" y="0" rx="0" ry="0" width="600" height="800" />
                <rect x="620" y="180" rx="5" ry="5" width="350" height="10" />
                <rect x="620" y="200" rx="5" ry="5" width="350" height="10" />
                <rect x="620" y="220" rx="5" ry="5" width="350" height="10" />

                <circle cx="640" cy="32" r="20" />
                <rect x="680" y="28" width="125.5" height="12" />
                <rect x="620" y="500" rx="15" ry="15" width="350" height="30" />
            </ContentLoader>

        ) : (
            <ContentLoader viewBox="0 0 800 1700" title="" rtl backgroundColor={props.nightMode ? "#1f2937" : "#f0f2f5"}
                foregroundColor={props.nightMode ? "#2a3748" : "#f0f2f5"}>
                <rect x="0" y="0" rx="0" ry="0" width="800" height="600" />

                <circle cx="60" cy="670" r="40" />
                <rect x="120" y="650" rx="15" ry="15" width="350" height="30" />    
              
                <rect x="25" y="740" rx="5" ry="5" width="750" height="20" />
                <rect x="25" y="770" rx="5" ry="5" width="750" height="20" />
                <rect x="25" y="800" rx="5" ry="5" width="750" height="20" />

                <rect x="25" y="1600" rx="15" ry="15" width="750" height="70" />

            </ContentLoader>
        )

    )
}

ExploreModalContentLoader.metadata = {
    name: 'Sarah Ann Garcia',
    github: 'sgarcia30',
    description: 'This is an Amazon sample product.', // Little tagline
    filename: 'AmazonLoader',
}

export default ExploreModalContentLoader