// src/app/blog/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

    return files
        .filter((filename) => filename.endsWith('.mdx'))
        .map((filename) => ({
            slug: filename.replace('.mdx', ''),
        }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return {
            title: 'Post Not Found',
        };
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter } = matter(fileContent);

    return {
        title: frontMatter.title,
        description: frontMatter.description,
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontMatter, content } = matter(fileContent);

    return (
        <article className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
            <header className="mb-8">
                <h1>{frontMatter.title}</h1>
                <time className="text-gray-500 dark:text-gray-400">
                    {new Date(frontMatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </time>
                {frontMatter.description && (
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        {frontMatter.description}
                    </p>
                )}
            </header>
            <main className="post-content prose dark:prose-invert">
                <MDXRemote
                    source={content}
                    options={{
                        mdxOptions: {
                            remarkPlugins: [remarkGfm],
                        },
                    }}
                />
            </main>
        </article>
    );
}
