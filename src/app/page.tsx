import type { Metadata } from 'next'

import { BysHero } from '@/components/home/bys-hero'
import { Convictions } from '@/components/home/convictions'
import { HomeCta } from '@/components/home/home-cta'
import { NeedsBlocks } from '@/components/home/needs-blocks'
import { ProcessTimeline } from '@/components/home/process-timeline'
import { WhyBys } from '@/components/home/why-bys'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { FaqSection } from '@/components/sections/faq-section'
import {
  localBusinessJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    localBusinessJsonLd(),
    webPageJsonLd(siteConfig.name, siteConfig.description, '/'),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BysHero />
      <NeedsBlocks />
      <WhyBys />
      <Convictions />
      <ProcessTimeline />
      <TestimonialsSection />
      <FaqSection />
      <HomeCta />
    </>
  )
}
