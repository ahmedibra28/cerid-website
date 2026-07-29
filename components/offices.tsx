import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { getAddress } from '@/lib/content'

export default async function Offices() {
  const { documents } = await getAddress()

  return (
    <section className='section-padding bg-white' id='offices'>
      <div className='site-container'>
        <div className='grid gap-8 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end'>
          <div>
            <p className='eyebrow'>Where we work</p>
            <h2 className='section-title mt-4'>Close to the communities we serve.</h2>
          </div>
          <p className='max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end'>
            Our offices connect national leadership with local knowledge,
            partnerships, and programme delivery across Somalia.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>
          {documents.map((office, index) => {
            const phone = office.mobile?.split('/')[0].replace(/[^\d+]/g, '')
            const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              office.address || office.city || 'Somalia'
            )}`

            return (
              <article
                key={office.$id}
                className={`py-10 md:p-10 ${
                  index % 2 === 0 ? 'md:border-r' : ''
                } border-b border-slate-300`}
              >
                <div className='flex items-start justify-between gap-6'>
                  <div>
                    <p className='eyebrow'>{office.office}</p>
                    <h3 className='mt-3 text-3xl font-bold tracking-tight text-slate-950'>
                      {office.city}
                    </h3>
                  </div>
                  <span className='text-sm font-extrabold text-slate-300'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className='mt-8 grid gap-4 text-sm leading-6 text-slate-600'>
                  <p className='flex gap-3'>
                    <MapPin className='mt-1 h-4 w-4 shrink-0 text-brand' />
                    {office.address}
                  </p>
                  <a href={`tel:${phone}`} className='flex gap-3 hover:text-brand'>
                    <Phone className='mt-1 h-4 w-4 shrink-0 text-brand' />
                    {office.mobile}
                  </a>
                  <a href={`mailto:${office.email}`} className='flex gap-3 hover:text-brand'>
                    <Mail className='mt-1 h-4 w-4 shrink-0 text-brand' />
                    {office.email}
                  </a>
                </div>

                <a
                  href={directions}
                  target='_blank'
                  rel='noreferrer'
                  className='mt-7 inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-bold text-brand'
                >
                  Get directions <ArrowUpRight className='h-4 w-4' />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
