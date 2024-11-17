// components/ThemeToggle.tsx
'use client'

import { useTheme } from '@/app/providers/theme-provider'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button
            aria-label="Toggle theme"
            className="button-secondary p-2" // Using your custom button style
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    )
}
