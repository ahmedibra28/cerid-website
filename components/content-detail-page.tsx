import Markdown from 'react-markdown'
import BlurImage from '@/components/blur-image'
import Footer from '@/components/footer-contact'
import type { CardDocument } from '@/lib/content'

type ContentDetailPageProps = {
  document: CardDocument
  image?: string
  imagePosition?: 'object-center' | 'object-top'
}

export default function ContentDetailPage({
  document,
  image,
  imagePosition = 'object-center',
}: ContentDetailPageProps) {
  const publishedAt = new Date(document.$createdAt)
  const formattedDate = publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <header
        className={`relative ${
          image
            ? 'flex min-h-[50vh] items-center overflow-hidden text-white'
            : 'bg-gray-100 py-12 text-gray-950 dark:bg-gray-800 dark:text-white md:py-16 lg:py-20'
        }`}
      >
        {image && (
          <>
            <BlurImage
              src={image}
              alt={document.title}
              className={`object-cover ${imagePosition}`}
              priority
              fill
            />
            <div className='absolute inset-0 bg-black/50' aria-hidden='true' />
          </>
        )}

        <div className='container relative z-10 mx-auto px-4 md:px-6'>
          <div className='mx-auto max-w-3xl space-y-4'>
            <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              {document.title}
            </h1>
            <p className={image ? 'text-gray-100' : 'text-gray-600 dark:text-gray-300'}>
              <span className='font-medium'>CeRID</span>
              <span aria-hidden='true'> · </span>
              <time dateTime={publishedAt.toISOString()}>{formattedDate}</time>
            </p>
          </div>
        </div>
      </header>

      <article className='container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20'>
        <Markdown className='prose prose-gray mx-auto dark:prose-invert lg:max-w-3xl'>
          {document.content}
        </Markdown>
      </article>

      <Footer />
    </>
  )
}
