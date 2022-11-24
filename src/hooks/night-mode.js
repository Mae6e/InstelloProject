import React, { useState } from "react"

const useNightMode = () => {

    const [nightMode, setNightMode] = useState(localStorage.getItem('nightMode') === 'true')

    if (nightMode)
        document.documentElement.classList.add('dark')

    const toggleNightMode = () => {
        nightMode ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
        localStorage.setItem('nightMode', !nightMode)
        setNightMode(!nightMode)
    }

    return [nightMode, toggleNightMode]
}

export default useNightMode