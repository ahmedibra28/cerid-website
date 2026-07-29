import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import type { CardDocument } from '@/lib/content'

type ItemCardProps = {
  item: CardDocument & { slug: string }
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <article className='group border-t border-slate-300 pt-6'>
      <Link href={item.slug} className='block'>
        <div className='relative aspect-[16/10] overflow-hidden bg-slate-100'>
          <BlurImage
            alt={item.title}
            className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
            src={item.image || '/images/research.webp'}
            fill
          />
        </div>
        <p className='eyebrow mt-6'>CeRID programme</p>
        <h2 className='mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-950 group-hover:text-brand'>
          {item.title}
        </h2>
        <p className='mt-4 line-clamp-3 leading-7 text-slate-600'>
          {item.excerpt || item.content}
        </p>
        <span className='mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand'>
          Read more <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
        </span>
      </Link>
    </article>
  )
}
