import createImageUrlBuilder from '@sanity/image-url'
import {projectId, dataset} from './api'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}

export function urlForOpenGraphImage(image) {
  return urlForImage(image)?.width(1200).height(627).fit('crop').url()
}

export function resolveHref(documentType, slug) {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
