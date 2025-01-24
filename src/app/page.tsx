import Link from "next/link";
import { getSortedPostsData } from "@/lib/markdown";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-primary text-primary">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <main className="relative max-w-[64rem] mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-2 text-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 animate-gradient-x">
            Technical Blog
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            Exploring software development, architecture, and best practices
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(({ id, title, date }) => (
            <Link key={id} href={`/posts/${id}`} className="group">
              <article className="h-full p-6 rounded-xl bg-card border border-primary hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                    {title}
                  </h2>

                  <div className="flex items-center text-sm text-secondary">
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
                    {date}
                  </div>

                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
