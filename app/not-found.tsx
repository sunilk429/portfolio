
// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-24">
            <div className="text-center space-y-6 animate-fade-in">
                {/* 404 Large Number */}
                <h1 className="text-[150px] font-bold leading-none text-[var(--link)] opacity-30">
                    404
                </h1>

                {/* Main Message */}
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-[var(--title)]">
                        Page not found
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Helpful Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Link
                        href="/"
                        className="button bg-[var(--link)] text-white px-8 py-3"
                    >
                        Go to Home
                    </Link>

                    <Link
                        href="/blog"
                        className="px-8 py-3 border border-[var(--link)] text-[var(--link)] rounded-full hover:bg-[var(--link)] hover:text-white transition-colors"
                    >
                        Read Blog
                    </Link>
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                        Need help? {' '}
                        <Link
                            href="/contact"
                            className="text-[var(--link)] hover:underline"
                        >
                            Contact us
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
