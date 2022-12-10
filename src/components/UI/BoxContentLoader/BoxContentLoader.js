import React from 'react'
import ContentLoader from 'react-content-loader'

const BoxContentLoader = props => {
  return (
    <ContentLoader height={320} width={"100%"} title="" rtl  backgroundColor={props.nightMode?"#1f2937":"#f0f2f5"}
    foregroundColor={props.nightMode?"#2a3748":"#f0f2f5"}>

      <rect x="70" y="20" rx="3" ry="3" width="100" height="6" />
      <rect x="70" y="40" rx="3" ry="3" width="220" height="5" />
      <rect x="70" y="60" rx="3" ry="3" width="70" height="5" />
      <circle cx="35" cy="35" r="18" />

      <rect x="70" y="100" rx="3" ry="3" width="100" height="6" />
      <rect x="70" y="120" rx="3" ry="3" width="220" height="5" />
      <rect x="70" y="140" rx="3" ry="3" width="70" height="5" />
      <circle cx="35" cy="115" r="18" />

      <rect x="70" y="180" rx="3" ry="3" width="100" height="6" />
      <rect x="70" y="200" rx="3" ry="3" width="220" height="5" />
      <rect x="70" y="220" rx="3" ry="3" width="70" height="5" />
      <circle cx="35" cy="195" r="18" />

      <rect x="70" y="260" rx="3" ry="3" width="100" height="6" />
      <rect x="70" y="280" rx="3" ry="3" width="220" height="5" />
      <rect x="70" y="300" rx="3" ry="3" width="70" height="5" />
      <circle cx="35" cy="275" r="18" />

    </ContentLoader>
  )
}

BoxContentLoader.metadata = {
  name: 'Sridhar Easwaran',
  github: 'sridhareaswaran',
  description: 'Notification section',
  filename: 'NotificationLoader',
}

export default BoxContentLoader