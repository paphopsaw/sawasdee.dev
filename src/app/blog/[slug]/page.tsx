import { getBlogPosts } from "../utils";

const posts = getBlogPosts();
export default function Page({ params }: { params: { slug: string } }) {
  let post = posts.find((post) => post.slug === params.slug);
  return (
    <div>
      <h2>{post?.metadata.title}</h2>
      <h4>{post?.metadata.publishedAt}</h4>
      <p>{post?.content}</p>
    </div>
  );
}
