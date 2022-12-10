import React from 'react'
import ContentLoader from 'react-content-loader'

const ProfileContentLoader = props => (
    <ContentLoader
         height={260} width={"100%"} title="" rtl  backgroundColor={props.nightMode?"#1f2937":"#f0f2f5"}
        foregroundColor={props.nightMode?"#2a3748":"#f0f2f5"}>
        <circle cx="140" cy="80" r="55" />
        <rect x="60" y="155" rx="0" ry="0" width="160" height="12" />
        <rect x="10" y="195" rx="0" ry="0" width="70" height="20" />
        <rect x="100" y="195" rx="0" ry="0" width="70" height="20" />
        <rect x="190" y="195" rx="0" ry="0" width="70" height="20" />
    </ContentLoader>
)

ProfileContentLoader.metadata = {
    name: 'Dhruvit Galoriya', // My name
    github: 'dhruvgaloriya', // Github username
    description: 'Show Profile Page', // Little tagline
    filename: 'ProfileShow', // filename of your loader
}

export default ProfileContentLoader