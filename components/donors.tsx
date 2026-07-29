import BlurImage from '@/components/blur-image'
import { getDonors } from '@/lib/content'

export default async function Donors() {
  const { documents } = await getDonors()

  return (
    <section className='border-y border-slate-200 bg-warm-white py-14 md:py-20' id='partners'>
      <div className='site-container'>
        <div className='md:flex md:items-end md:justify-between'>
          <div>
            <p className='eyebrow'>Working together</p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-slate-950'>Our partners and donors</h2>
          </div>
          <p className='mt-4 max-w-xl text-sm leading-6 text-slate-600 md:mt-0'>
            Trusted partnerships help us reach more communities and build sustainable change.
          </p>
        </div>
        <div className='mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-8'>
          {documents.map((item) => (
            <div key={item.$id} className='relative h-16'>
              <BlurImage
                alt={item.title ? `${item.title} logo` : 'Partner logo'}
                className='object-contain grayscale transition-all duration-300 hover:grayscale-0'
                src={item.logo || '/images/logo.webp'}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
