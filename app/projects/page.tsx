import type { Metadata } from 'next'
import Footer from '@/components/footer-contact'
import InteriorHero from '@/components/interior-hero'
import ProjectsArchive from '@/components/projects-archive'
import { getProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore CeRID’s ongoing, completed, and legacy projects across Somalia.',
}

export default async function ProjectsPage() {
  const { documents } = await getProjects()

  return (
    <>
      <main>
        <InteriorHero
          eyebrow='Our projects'
          title='Community priorities. Practical action.'
          description='Explore our ongoing work, completed initiatives, and programme archive across humanitarian response, livelihoods, climate resilience, education, and research.'
        />
        <ProjectsArchive projects={documents} />
      </main>
      <Footer />
    </>
  )
}
