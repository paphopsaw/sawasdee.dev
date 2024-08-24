import fs from "fs";
import path from "path";
import Link from "next/link";
import dynamic from "next/dynamic";

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
      <h3>Posts</h3>
      <ul>
        {postDirs.map(async (postDir) => {
          const { metadata } = await import(
            `@/app/blog/(posts)/${postDir}/page.mdx`
          );

          return (
            <li key={postDir}>
              <Link href={`blog/${postDir}`}>
                <h4>{metadata.title}</h4>
                <p>{metadata.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
