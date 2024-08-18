import { getBlogPosts } from "./utils";
import Link from "next/link";

const posts = getBlogPosts();
export default function Blog() {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.metadata.title}>
              <Link href={`blog/${post.slug}`}>{post.metadata.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
