import type { Metadata } from 'next'

import { blogSettings } from '@/data/blog-posts'
import { getAllPosts } from '@/lib/blog-data'
import { defaultOgImage, siteConfig } from '@/lib/seo'
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
    images: blogSettings.heroImage ? [{ url: blogSettings.heroImage }] : [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: blogSettings.title,
    description: blogSettings.description,
    images: blogSettings.heroImage ? [blogSettings.heroImage] : [defaultOgImage.url],
  },
  alternates: { canonical: '/blog' },
}

// Régénérée par la route PHARE à chaque dépôt (revalidatePath), et au pire toutes les heures.
export const revalidate = 3600

export default async function BlogPage() {
  const posts = (await getAllPosts())
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
