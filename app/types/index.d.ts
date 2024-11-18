// src/types/index.d.ts
export interface PostProps {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    author?: string;
    [key: string]: unknown;
  };
}

export interface MDXPostProps extends PostProps {
  content: string;
  readingTime: number;
}
