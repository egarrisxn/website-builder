import '@/styles/index.css'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { toPlainText } from 'next-sanity'
import { Suspense } from 'react'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'


const LiveVisualEditing = dynamic(() => import('@/sanity/loader/LiveVisualEditing'))

export async function generateMetadata() {
  const [{ data: settings }, { data: homePage }] = await Promise.all([loadSettings(), loadHomePage()])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
        template: `%s | ${homePage.title}`,
        default: homePage.title || 'Websanity Builder',
      }
      : undefined,
    description: homePage?.overview ? toPlainText(homePage.overview) : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport = {
  themeColor: '#000',
}

export default async function IndexRouteLayout({ children }) {
  return (
    <>
      <div className='flex min-h-screen flex-col bg-white text-black'>
        <Suspense>
          <Navbar />
        </Suspense>
        <div className='mt-20 flex-grow px-4 md:px-16 lg:px-32'>
          <Suspense>{children}</Suspense>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
