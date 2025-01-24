import { getPostData, getAllPostIds } from '@/lib/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to home
      </Link>
      <article className="prose lg:prose-xl dark:prose-invert">
        <h1>{postData.title}</h1>
        <div className="text-gray-600 mb-8">{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </main>
  );
} 