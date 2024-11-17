"use client"
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useTheme } from '@/app/providers/theme-provider'
import Link from 'next/link'

const PortfolioHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { theme } = useTheme()

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // Only track mouse movement in dark mode
        if (theme === 'dark') {
            const { clientX, clientY } = e
            setMousePosition({ x: clientX, y: clientY })
        }
    }, [theme])

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [handleMouseMove])

    const socialLinks = [
        { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub Profile' },
        { icon: () => (<svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' stroke='currentColor' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>), href: 'https://x.com/sunilk429', label: 'X profile' },
        { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn Profile' },
        { icon: Mail, href: 'mailto:john@doe.com', label: 'Email Contact' }
    ]

    return (
        <div className="w-full pt-12 md:pt-28 px-4 md:px-8 overflow-hidden">
            {/* Cursor glow effect - only visible in dark mode */}
            {theme === 'dark' && (
                <div
                    className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, 
                            rgba(34, 211, 238, 0.07), 
                            transparent 100%)`
                    }}
                />
            )}

            {/* Main content */}
            <div className="flex flex-col md:flex-row h-full items-center md:items-start justify-between">
                {/* Left section - Main content */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-4">
                    <div className="max-w-md flex flex-col items-center md:items-start justify-center">
                        <h1 className="text-3xl md:text-6xl font-bold mb-4 bg-clip-text bg-gradient-to-r text-slate-200/90 ">
                            Sunil Kumar
                        </h1>

                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                            <p className="text-sm md:text-xl text-[var(--text-secondary)/70]">Full Stack Developer</p>
                            <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                        </div>

                        <section className="my-2 md:my-4">
                            <p className='text-center md:text-start md:text-xl text-slate-200/90'>
                                Hey! I'm a full-stack developer who loves building things for the web. Most days you'll find me crafting applications, documenting my journey through my <Link href={"/blog"} className='link'>blog</Link> and exploring interesting <Link href="#shelf" className='link'>reads</Link> that inspire me.
                            </p>
                        </section>
                    </div>
                </div>

                {/* Right section - Social icons aligned horizontally */}
                <div className="pt-16 flex gap-12">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            className="group relative"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                        >
                            <div className="size-6 md:size-8 lg:size-12 bg-transparent 
                                          text-[var(--text-secondary)] flex items-center justify-center 
                                          transition-all duration-300
                                          group-hover:text-[var(--accent)]">
                                <social.icon className="w-12 h-12" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioHero
