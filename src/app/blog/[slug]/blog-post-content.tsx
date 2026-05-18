'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react'

import type { StaticBlogPost } from '@/data/blog-posts'

const ease = [0.22, 1, 0.36, 1] as const

function estimateReadTime(html: string) {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export default function BlogPostContent({ post }: { post: StaticBlogPost }) {
  const readTime = estimateReadTime(post.content)
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="min-h-screen">
      {/* Cover image */}
      {post.coverImage && (
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden bg-muted">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className={post.coverImage ? '-mt-20 relative z-10' : 'pt-16'}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" />
            Retour au blog
          </Link>

          <header className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {post.category && (
                <span className="font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full text-xs">
                  {post.category}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5" />
                {readTime} min de lecture
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="size-3.5" />
                  {post.author}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </header>

          <div
            className="blog-content pb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags?.length > 0 && (
            <div className="border-t border-border/60 py-8 flex flex-wrap items-center gap-2">
              <Tag className="size-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="border-t border-border/60 py-12 text-center space-y-4">
            <p className="text-lg font-semibold text-foreground">Cet article vous a plu ?</p>
            <p className="text-sm text-muted-foreground">
              Découvrez nos autres articles ou contactez-nous pour discuter de votre projet.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href="/blog"
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                Tous les articles
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .blog-content {
          font-size: 0.9375rem;
          line-height: 1.8;
          color: var(--muted-foreground);
        }
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          color: var(--foreground);
          font-family: var(--font-display);
          line-height: 1.3;
        }
        .blog-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
          font-family: var(--font-display);
          line-height: 1.4;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
        }
        .blog-content strong {
          font-weight: 600;
          color: var(--foreground);
        }
        .blog-content em {
          font-style: italic;
        }
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .blog-content a:hover {
          opacity: 0.8;
        }
        .blog-content ul,
        .blog-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content ul { list-style: disc; }
        .blog-content ol { list-style: decimal; }
        .blog-content li {
          margin-bottom: 0.4rem;
        }
        .blog-content blockquote {
          border-left: 3px solid hsl(var(--primary));
          padding: 0.75rem 1.25rem;
          margin: 1.5rem 0;
          font-style: italic;
          background: var(--muted);
          border-radius: 0 0.5rem 0.5rem 0;
        }
        .blog-content hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 2rem 0;
        }
        .blog-content img {
          border-radius: 0.75rem;
          max-width: 100%;
          height: auto;
          margin: 1.5rem 0;
        }
        .blog-content pre {
          background: var(--muted);
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-size: 0.8125rem;
        }
        .blog-content code {
          background: var(--muted);
          padding: 0.15rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.85em;
        }
        .blog-content pre code {
          background: none;
          padding: 0;
        }
      `}</style>
    </article>
  )
}
