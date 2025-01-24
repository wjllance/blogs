import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

export default function Home() {
  const posts = getSortedPostsData();


  console.log(posts)

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="space-y-4">
        {posts.map(({ id, title, date }) => (
          <article key={id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link href={`/posts/${id}`}>
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <div className="text-gray-600">{date}</div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
