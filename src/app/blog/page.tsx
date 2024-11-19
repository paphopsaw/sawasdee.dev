import fs from "fs";
import path from "path";
import Link from "next/link";
import dynamic from "next/dynamic";
import PostListItem from "@/components/blog/postListItem";

const POSTS_ROOT_DIR = path.join(
  process.cwd(),
  "src",
  "app",
  "blog",
  "(posts)"
);

export default async function Blog() {
  const postDirs = fs.readdirSync(POSTS_ROOT_DIR);

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {postDirs.map(async (postDir) => {
          const { metadata } = await import(
            `@/app/blog/(posts)/${postDir}/page.mdx`
          );

          return (
            <li key={postDir}>
              <PostListItem
                postDir={postDir}
                title={metadata.title}
                description={metadata.description}
                date={metadata.date}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
