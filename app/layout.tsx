import { cookies } from 'next/headers'
import { ThemeProvider } from './providers/theme-provider'
import NavBar from './components/Navbar'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from './utils'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('ui-theme')?.value as ('dark' | 'light') || 'dark'

  return (
    <html lang="en" suppressHydrationWarning className={cn(themeCookie, inter.className)}>
      <body>
        <ThemeProvider defaultTheme={themeCookie || 'dark'}>
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">
              <MaxWidthWrapper>
                {children}
              </MaxWidthWrapper>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
