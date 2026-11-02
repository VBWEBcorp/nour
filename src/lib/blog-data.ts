import { blogPosts as staticPosts, type StaticBlogPost } from '@/data/blog-posts'
import { connectDB } from '@/lib/db'
import { visiblePostFilter } from '@/lib/blog-filters'
import { BlogPost } from '@/models/Blog'

// Articles du blog : ceux de la base (déposés par PHARE ou le back-office) puis ceux du
// fichier statique (posts LinkedIn de Nour) qui n'y sont pas. La base prime à slug égal.
// Base injoignable : on sert le fichier statique seul, jamais une page vide.

export type BlogPostData = StaticBlogPost & { jsonLd?: string }

function fromDb(p: any): BlogPostData {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt || '',
    content: p.content || '',
    coverImage: p.coverImage || '',
    category: p.category || '',
    tags: p.tags || [],
    author: p.author || '',
    publishedAt: new Date(p.publishedAt || p.createdAt).toISOString(),
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    jsonLd: p.jsonLd,
  }
}

async function dbPosts(): Promise<BlogPostData[] | null> {
  try {
    await connectDB()
    const docs = await BlogPost.find(visiblePostFilter()).lean()
    return docs.map(fromDb)
  } catch (error) {
    console.error('[blog] lecture de la base impossible', error)
    return null
  }
}

export async function getAllPosts(): Promise<BlogPostData[]> {
  const fromBase = (await dbPosts()) ?? []
  const slugs = new Set(fromBase.map((p) => p.slug))
  return [...fromBase, ...staticPosts.filter((p) => !slugs.has(p.slug))].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getPost(slug: string): Promise<BlogPostData | undefined> {
  try {
    await connectDB()
    const doc = await BlogPost.findOne({ slug, ...visiblePostFilter() }).lean()
    if (doc) return fromDb(doc)
  } catch (error) {
    console.error('[blog] lecture de la base impossible', error)
  }
  return staticPosts.find((p) => p.slug === slug)
}
