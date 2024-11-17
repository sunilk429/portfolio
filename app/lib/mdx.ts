import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostProps } from "../types";

const POSTS_PATH = path.join(process.cwd(), "posts");

export async function getAllPosts(): Promise<PostProps[]> {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(POSTS_PATH, filename);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      return {
        frontMatter: data,
        slug: filename.replace(".mdx", ""),
      } as PostProps;
    })
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    );

  return posts;
}
