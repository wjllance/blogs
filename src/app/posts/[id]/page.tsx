import { getPostData, getAllPostIds } from "@/lib/markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <div className="min-h-screen bg-primary text-primary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <main className="relative max-w-[64rem] mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <nav className="mb-12 max-w-[45rem] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-secondary hover:text-accent transition-colors duration-300 group text-sm"
          >
            <svg
              className="w-4 h-4 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to home
          </Link>
        </nav>

        <article className="relative max-w-[45rem] mx-auto bg-card/30 rounded-xl backdrop-blur-sm border border-primary p-6 sm:p-8 md:p-10">
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 animate-gradient-x">
              {postData.title}
            </h1>
            <div className="flex items-center text-xs text-secondary border-b border-primary/50 pb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {postData.date}
            </div>
          </div>

          <div
            className="prose max-w-none 
            prose-headings:text-primary prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
            prose-p:text-secondary prose-p:text-base prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-primary
            prose-code:text-accent prose-code:text-sm
            prose-pre:bg-card prose-pre:border prose-pre:border-primary prose-pre:text-sm
            prose-blockquote:border-l-accent prose-blockquote:text-secondary prose-blockquote:text-sm
            prose-li:text-secondary prose-li:text-base
            prose-hr:border-primary
            prose-img:rounded-xl prose-img:shadow-lg
            dark:prose-invert"
          >
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
          </div>
        </article>
      </main>
    </div>
  );
}
