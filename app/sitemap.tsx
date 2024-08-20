import type { MetadataRoute } from 'next'
import { getSitemap } from '@/lib/actions/chat'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemap = await getSitemap()
  return sitemap
}
