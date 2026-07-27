import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className='container mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center'>
      <p className='font-semibold text-brand'>404</p>
      <h1 className='mt-3 text-4xl font-bold tracking-tight'>
        We could not find that page
      </h1>
      <p className='mt-4 text-gray-600'>
        The page may have moved, or the link may be incorrect.
      </p>
      <Button asChild className='mt-8'>
        <Link href='/'>Return home</Link>
      </Button>
    </section>
  )
}
