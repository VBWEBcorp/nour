'use client'

import { PageEditor } from '@/components/admin/page-editor'
import { FieldEditor, SectionEditor, ImageField } from '@/components/admin/field-editor'

const defaults = {
  hero: {
    eyebrow: 'Contact',
    title: 'Parlons de votre projet',
    description: 'Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous répondons sous 24h.',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80',
  },
  // Pas d'adresse postale : le siège est au domicile de la fondatrice.
  info: {
    phone: '',
    email: '',
  },
}

export default function AdminContactPage() {
  return (
    <PageEditor pageId="contact" title="Page Contact" defaultContent={defaults}>
      {(content, update) => (
        <>
          <SectionEditor title="Hero">
            <FieldEditor label="Accroche" value={content.hero?.eyebrow} onChange={(v) => update('hero.eyebrow', v)} />
            <FieldEditor label="Titre" value={content.hero?.title} onChange={(v) => update('hero.title', v)} />
            <FieldEditor label="Description" value={content.hero?.description} onChange={(v) => update('hero.description', v)} type="textarea" />
            <ImageField label="Image" value={content.hero?.image} onChange={(v) => update('hero.image', v)} />
          </SectionEditor>

          <SectionEditor title="Informations de contact">
            <FieldEditor label="Téléphone" value={content.info?.phone} onChange={(v) => update('info.phone', v)} placeholder="07 81 31 83 92" />
            <FieldEditor label="Email" value={content.info?.email} onChange={(v) => update('info.email', v)} placeholder="nour.boukhercha@bysconsulting.fr" />
          </SectionEditor>
        </>
      )}
    </PageEditor>
  )
}
