import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import {toPlainText} from 'next-sanity'
import {ProjectPage} from '@/components/pages/project/ProjectPage'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import {generateStaticSlugs} from '@/sanity/loader/generateStaticSlugs'
import {loadProject} from '@/sanity/loader/loadQuery'

const ProjectPreview = dynamic(() => import('@/components/pages/project/ProjectPreview'))

export async function generateMetadata({params}, parent) {
  const {data: project} = await loadProject(params.slug)
  const ogImage = urlForOpenGraphImage(project?.coverImage)

  return {
    title: project?.title,
    description: project?.overview ? toPlainText(project.overview) : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function ProjectSlugRoute({params}) {
  const initial = await loadProject(params.slug)

  if (draftMode().isEnabled) {
    return <ProjectPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ProjectPage data={initial.data} />
}
