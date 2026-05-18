import type { Metadata } from 'next'

import { blogPosts, blogSettings } from '@/data/blog-posts'
import { siteConfig } from '@/lib/seo'
import BlogPageContent from './blog-page-content'

export const metadata: Metadata = {
  title: blogSettings.title,
  description: blogSettings.description,
  openGraph: {
    type: 'website',
    title: blogSettings.title,
    description: blogSettings.description,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: blogSettings.heroImage ? [{ url: blogSettings.heroImage }] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: blogSettings.title,
    description: blogSettings.description,
    images: blogSettings.heroImage ? [blogSettings.heroImage] : [],
  },
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map((p) => ({
      _id: p.slug,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      coverImage: p.coverImage,
      category: p.category,
      tags: p.tags,
      author: p.author,
      publishedAt: p.publishedAt,
    }))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: blogSettings.title,
    description: blogSettings.description,
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 20).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteConfig.url}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageContent initialSettings={blogSettings} initialPosts={posts} />
    </>
  )
}
