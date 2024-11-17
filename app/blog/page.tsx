import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
    title: 'Blog Posts',
    description: 'Read our latest blog posts',
};

interface BlogFrontMatter {
    title: string;
    date: string;
    description: string; // Make description required
}

interface BlogPost {
    frontMatter: BlogFrontMatter;
    slug: string;
}

function parseDate(dateInput: unknown): string {
    try {
        if (dateInput instanceof Date) {
            return dateInput.toISOString();
        }

        if (typeof dateInput === 'string') {
            const parsedDate = new Date(dateInput);

            if (!isNaN(parsedDate.getTime())) {
                return parsedDate.toISOString();
            }

            if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
                return new Date(`${dateInput}T00:00:00.000Z`).toISOString();
            }
        }

        return new Date().toISOString();
    } catch (error) {
        console.error(`Error parsing date: ${dateInput}`, error);
        return new Date().toISOString();
    }
}

function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
            throw new Error(`Invalid date: ${dateString}`);
        }

        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Date not available';
    }
}

async function getBlogPosts(): Promise<BlogPost[]> {
    const postsDirectory = path.join(process.cwd(), 'posts');

    if (!fs.existsSync(postsDirectory)) {
        console.error('Posts directory not found');
        return [];
    }

    try {
        const files = fs.readdirSync(postsDirectory);

        const posts = files
            .filter((filename) => filename.endsWith('.mdx'))
            .map((filename) => {
                const filePath = path.join(postsDirectory, filename);
                const markdownFile = fs.readFileSync(filePath, 'utf-8');

                const { data } = matter(markdownFile);

                // Extract the first paragraph or sentence for the description if none is provided
                let description = '';
                if (typeof data.description === 'string' && data.description.trim()) {
                    description = data.description.trim();
                } else {
                    // Extract content without frontmatter
                    const { content } = matter(markdownFile);
                    // Get first paragraph or first few sentences
                    const firstParagraph = content
                        .split('\n')
                        .find(p => p.trim().length > 0);
                    description = firstParagraph
                        ? firstParagraph.trim().slice(0, 160) + '...'
                        : `A blog post about ${filename.replace('.mdx', '').replace(/-/g, ' ')}`;
                }

                // Validate and transform the frontmatter data
                const frontMatter: BlogFrontMatter = {
                    title: typeof data.title === 'string' && data.title.trim()
                        ? data.title.trim()
                        : filename.replace('.mdx', '').replace(/-/g, ' '),
                    date: parseDate(data.date),
                    description: description
                };

                return {
                    frontMatter,
                    slug: filename.replace('.mdx', ''),
                };
            })
            .sort((a, b) => {
                return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime();
            });

        return posts;
    } catch (error) {
        console.error('Error processing blog posts:', error);
        return [];
    }
}

export default async function BlogIndex() {
    const posts = await getBlogPosts();
    return (
        <div className="max-w-2xl mx-auto px-4 py-24">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            {posts.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No blog posts found.</p>
            ) : (
                <div className="space-y-8">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="animate-fade-in-delay"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block group"
                            >
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-[var(--link)] transition-colors">
                                    {post.frontMatter.title}
                                </h2>
                                <time className="text-gray-500 dark:text-gray-400">
                                    {formatDate(post.frontMatter.date)}
                                </time>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    {post.frontMatter.description}
                                </p>
                            </Link>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
