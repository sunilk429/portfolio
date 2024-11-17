// components/ThemeScript.tsx
'use client'

import { useEffect } from 'react'

export function ThemeScript() {
    useEffect(() => {
        const getInitialTheme = () => {
            // First try to get from localStorage
            const storedTheme = localStorage.getItem('ui-theme')
            if (storedTheme) return storedTheme

            // Then check system preference
            if (typeof window !== 'undefined' && window.matchMedia) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return 'dark'
                }
            }

            // Default to dark theme
            return 'dark'
        }

        const theme = getInitialTheme()

        // Apply theme
        document.documentElement.classList.add(theme)
        document.documentElement.setAttribute('data-theme', theme)

        // Store the theme
        localStorage.setItem('ui-theme', theme)
    }, [])

    return null
}
