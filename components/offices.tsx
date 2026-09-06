import { getAddress } from '@/lib/content'
import OfficeMap from '@/components/office-map'

export default async function Offices() {
  const { documents } = await getAddress()

  return (
    <section className='section-padding bg-white' id='offices'>
      <div className='site-container'>
        <div className='grid gap-8 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end'>
          <div>
            <p className='eyebrow'>Where we work</p>
            <h2 className='section-title mt-4'>
              Close to the communities we serve.
            </h2>
          </div>
          <p className='max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end'>
            Our offices connect national leadership with local knowledge,
            partnerships, and programme delivery across Somalia.
          </p>
        </div>

        <OfficeMap
          offices={documents.map((office) => ({
            id: office.$id,
            office: office.office || 'CeRID office',
            city: office.city || 'Somalia',
            address: office.address || office.city || 'Somalia',
            email: office.email || 'info@cerid.so',
            mobile: office.mobile || '',
          }))}
        />
      </div>
    </section>
  )
}
