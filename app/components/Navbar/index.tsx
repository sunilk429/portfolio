"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/app/providers/theme-provider'

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: '/', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
  ]
  const GradientSVGLogo = ({ startColor, endColor, width = 100, height = 100, className = '' }: { startColor: string, endColor: string, width?: number, height?: number, className?: string }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-all duration-500 opacity-75`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: startColor }} />
            <stop offset="100%" style={{ stopColor: endColor }} />
          </linearGradient>
        </defs>
        <path
          d="M10 15H90V35H30V40H90V85H10V65H70V60H10V15Z"
          fill="url(#gradient)"
        />
      </svg>
    );
  };
  useEffect(() => {
    // Prevent layout shift by adding a passive scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Add a placeholder div to prevent layout shift */}
      <div className="h-14 md:h-[70px] w-full" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
                   ${isScrolled ? 'glass' : 'bg-transparent'}`}
      >
        <nav className="container mx-auto px-2 md:px-4 lg:px-8 h-14 md:h-[70px] flex items-center justify-between">
          {/* Logo/Name */}
          <Link
            href="/"
            className="flex items-center bg-transparent p-4 -ml-4"
          >
            <span className="font-semibold tracking-tight"><GradientSVGLogo
              startColor="var(--accent)"
              endColor="var(--accent-secondary)"
              className='size-6 md:size-8 lg:size-10'
            />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 hover-effect ${pathname === href
                    ? 'text-[var(--accent)] font-medium'
                    : 'text-[var(--text-secondary)]'
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Theme Toggle */}
            <li className="ml-2">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <span className='text-xl text-[var(--text-secondary)]'>🌞</span>
                ) : (
                  <span className='text-xl text-[var(--text-secondary)]'>🌙</span>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover-effect"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[var(--text-secondary)]" />
              ) : (
                <Moon className="w-5 h-5 text-[var(--text-secondary)]" />
              )}
            </button>
            <button
              className="p-2 hover-effect"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                     ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}
        >
          <nav className={`container mx-auto px-4 py-4 flex flex-col gap-2 
                          ${isScrolled ? 'glass' : 'bg-[var(--bg-primary)]'}`}>
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 hover-effect ${pathname === href
                  ? 'text-[var(--accent)] font-medium'
                  : 'text-[var(--text-secondary)]'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <button className="button-primary mt-2">Contact</button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default NavBar
