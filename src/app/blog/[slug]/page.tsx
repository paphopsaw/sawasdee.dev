import { getBlogPosts } from "../utils";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts();
  let post = posts.find((post) => post.slug === params.slug);
  return (
    <div>
      <h2>{post?.metadata.title}</h2>
      <h4>{post?.metadata.publishedAt}</h4>
      <p>{post?.content}</p>
    </div>
  );
}
