// src/components/BlogCard.tsx
import Link from 'next/link';
import { PostProps } from '../../types/index.d';

export default function BlogCard({ post }: { post: PostProps }) {
    return (
        <article className="animate-fade-in-delay">
            <Link
                href={`/blog/${post.slug}`}
                className="block group"
            >
                <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--link)] transition-colors">
                    {post.frontMatter.title}
                </h2>
                <time className="text-gray-500 dark:text-gray-400">
                    {new Date(post.frontMatter.date).toLocaleDateString()}
                </time>
                {post.frontMatter.description && (
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {post.frontMatter.description}
                    </p>
                )}
            </Link>
        </article>
    );
}
