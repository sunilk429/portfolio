// providers/theme-provider.tsx
"use client"

import React, { createContext, useContext, useEffect } from "react"
import Cookies from "js-cookie"

type Theme = "light" | "dark"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    cookieKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
    children,
    defaultTheme = "dark",
    cookieKey = "ui-theme",
}: ThemeProviderProps) {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)
    const [mounted, setMounted] = React.useState(false)

    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem(cookieKey) as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(prefersDark ? 'dark' : 'light')
        }
    }, [cookieKey])

    const updateTheme = React.useCallback((newTheme: Theme) => {
        if (!mounted) return

        const root = window.document.documentElement
        // Remove both classes first
        root.classList.remove('light', 'dark')
        // Add the new theme class
        root.classList.add(newTheme)
        // Store the preference
        localStorage.setItem(cookieKey, newTheme)
        Cookies.set(cookieKey, newTheme, { expires: 365 })
    }, [cookieKey, mounted])

    useEffect(() => {
        updateTheme(theme)
    }, [theme, updateTheme])

    const value = React.useMemo(() => ({
        theme,
        setTheme: (newTheme: Theme) => {
            setTheme(newTheme)
        },
    }), [theme])

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
