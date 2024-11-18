import { Github, Heart, Linkedin, Mail, Rss } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub Profile' },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill='currentColor'
          stroke='currentColor'
          viewBox="0 0 512 512"
          className="h-5 w-5"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
      href: 'https://x.com/sunilk429',
      label: 'X profile'
    },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn Profile' },
    { icon: Mail, href: 'mailto:john@doe.com', label: 'Email Contact' },
    { icon: Rss, href: '/feed.xml', label: 'RSS Feed' }
  ];

  const footerLinks = [
    {
      title: 'Content',
      links: [
        { href: '/blog', label: 'Blog' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/uses', label: 'Uses' },
        { href: '/newsletter', label: 'Newsletter' },
        { href: '/rss', label: 'RSS' },
        { href: '/sitemap.xml', label: 'Sitemap' }
      ]
    }
  ];

  return (
    <footer className="mt-32 glass">
      <div className="container mx-auto px-4 py-12 md:py-16 md:px-8">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">
          {/* Navigation Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About Section */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="font-bold text-lg mb-4">About</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Personal blog and portfolio showcasing my work in web development,
                technical writing, and open source contributions.
              </p>
            </div>

            {/* Quick Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="col-span-1">
                <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-[var(--accent)] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--border)] my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground order-2 md:order-1">
              <span>© {new Date().getFullYear()} Sunil Kumar.</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" /> using
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  Next.js
                </a>
                and
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors duration-200"
                >
                  Tailwind
                </a>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 order-1 md:order-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] 
                           transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
