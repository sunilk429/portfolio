// src/app/blog/not-found.tsx
import Link from 'next/link';

export default function BlogNotFound() {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-24">
            <div className="text-center space-y-6 animate-fade-in">
                {/* Icon or Illustration */}
                <div className="mb-8 text-[var(--link)] opacity-30">
                    <svg
                        className="w-32 h-32 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </div>

                {/* Main Message */}
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-[var(--title)]">
                        Post Not Found
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        Sorry, the blog post you're looking for doesn't exist or may have been moved.
                    </p>
                </div>

                {/* Suggestions */}
                <div className="mt-8 space-y-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        You might want to:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/blog"
                            className="button bg-[var(--link)] text-white px-8 py-3"
                        >
                            View All Posts
                        </Link>

                        <Link
                            href="/"
                            className="px-8 py-3 border border-[var(--link)] text-[var(--link)] rounded-full hover:bg-[var(--link)] hover:text-white transition-colors"
                        >
                            Go to Home
                        </Link>
                    </div>
                </div>

                {/* Search Suggestion */}
                <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
                    <p>
                        Looking for something specific?{' '}
                        <Link
                            href="/blog?search=true"
                            className="text-[var(--link)] hover:underline"
                        >
                            Try searching
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
