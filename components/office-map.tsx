'use client'

import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

type Office = {
  id: string
  office: string
  city: string
  address: string
  email: string
  mobile: string
}

type MappedOffice = Office & {
  coordinates: [number, number]
  color: string
  labelOffset: [number, number]
}

const mapConfig = {
  minX: 3668442.537109887,
  maxY: 1684525.0355586156,
  scale: 0.00030602255540110773,
  offsetX: 240.34284017259733,
  offsetY: 75,
}

const officeLocations: Record<
  string,
  Pick<MappedOffice, 'coordinates' | 'color' | 'labelOffset'>
> = {
  mogadishu: {
    coordinates: [45.34375, 2.03711],
    color: '#047857',
    labelOffset: [22, -18],
  },
  'belet hawo': {
    coordinates: [41.8742, 3.9276],
    color: '#2563eb',
    labelOffset: [-142, -56],
  },
  luuq: {
    coordinates: [42.5446, 3.8004],
    color: '#d97706',
    labelOffset: [22, -8],
  },
  'qansax dheere': {
    coordinates: [42.8401, 2.8151],
    color: '#7c3aed',
    labelOffset: [-162, 18],
  },
}

function projectPoint([longitude, latitude]: [number, number]) {
  const radius = 6378137
  const x = (radius * longitude * Math.PI) / 180
  const y =
    radius *
    Math.log(Math.tan(Math.PI / 4 + (latitude * Math.PI) / 360))

  return [
    mapConfig.offsetX + (x - mapConfig.minX) * mapConfig.scale,
    mapConfig.offsetY + (mapConfig.maxY - y) * mapConfig.scale,
  ]
}

export default function OfficeMap({ offices }: { offices: Office[] }) {
  const mappedOffices = offices
    .map((office) => {
      const location = officeLocations[office.city.toLowerCase()]
      return location ? { ...office, ...location } : null
    })
    .filter((office): office is MappedOffice => Boolean(office))
  const [activeId, setActiveId] = useState(mappedOffices[0]?.id)
  const activeOffice =
    mappedOffices.find((office) => office.id === activeId) ?? mappedOffices[0]

  if (!activeOffice) return null

  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeOffice.address || activeOffice.city,
  )}`

  return (
    <div className='mt-10 overflow-hidden border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]'>
      <div className='flex flex-wrap gap-2 border-b border-slate-200 bg-warm-white p-4 md:px-6'>
        {mappedOffices.map((office) => (
          <button
            key={office.id}
            type='button'
            onClick={() => setActiveId(office.id)}
            className={`border px-4 py-2 text-sm font-bold transition-colors ${
              activeOffice.id === office.id
                ? 'border-forest bg-forest text-white'
                : 'border-slate-300 bg-white text-slate-700 hover:border-brand hover:text-brand'
            }`}
          >
            {office.city}
          </button>
        ))}
      </div>

      <div className='grid lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.65fr)]'>
        <div className='relative overflow-hidden bg-[#e9f5ff] p-3 sm:p-5'>
          <svg
            viewBox='0 0 1100 820'
            role='img'
            aria-labelledby='office-map-title office-map-description'
            className='h-auto w-full'
          >
            <title id='office-map-title'>CeRID offices in Somalia</title>
            <desc id='office-map-description'>
              Map showing CeRID offices in Mogadishu, Belet Hawo, Luuq, and Qansax Dheere.
            </desc>
            <defs>
              <linearGradient id='office-map-ocean' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0' stopColor='#f5fbff' />
                <stop offset='1' stopColor='#dcefff' />
              </linearGradient>
              <filter id='office-map-shadow' x='-30%' y='-30%' width='160%' height='160%'>
                <feDropShadow dx='0' dy='7' stdDeviation='7' floodColor='#102046' floodOpacity='.12' />
              </filter>
            </defs>
            <rect width='1100' height='820' fill='url(#office-map-ocean)' />
            <g fill='#eef1f5' stroke='#d2d8e2' strokeWidth='1.4'>
              <path d='M 745.72 316.98 L 649.46 419.90 L 605.08 421.41 L 574.72 445.50 L 552.88 446.13 L 543.56 456.90 L 520.29 456.89 L 506.55 445.35 L 475.43 459.63 L 465.36 473.86 L 442.64 471.17 L 435.10 467.23 L 427.12 468.18 L 416.35 467.83 L 373.23 438.83 L 349.52 438.83 L 337.88 427.58 L 337.88 408.39 L 320.19 402.64 L 300.06 365.36 L 284.50 357.41 L 278.53 343.69 L 261.26 326.94 L 240.34 324.48 L 251.95 304.88 L 270.03 304.03 L 275.12 293.51 L 274.66 262.49 L 284.74 226.28 L 300.88 216.57 L 304.30 202.37 L 318.91 175.80 L 339.46 158.52 L 353.31 124.07 L 358.73 93.92 L 398.40 101.27 L 409.04 75.00 L 429.71 90.99 L 449.69 82.71 L 457.90 90.07 L 481.26 90.49 L 510.91 104.59 L 519.72 116.71 L 534.82 127.97 L 548.83 148.48 L 560.48 159.78 L 548.50 175.20 L 536.98 191.52 L 539.63 201.12 L 540.17 211.68 L 559.20 212.26 L 567.40 209.80 L 574.96 215.99 L 567.54 228.27 L 580.12 247.34 L 592.68 263.98 L 605.69 276.30 L 717.07 317.19 L 745.72 316.98 Z' />
              <path d='M 453.19 750.00 L 404.29 715.85 L 401.97 696.06 L 278.44 626.61 L 272.69 622.87 L 272.34 586.76 L 282.10 572.96 L 298.87 550.41 L 311.26 525.57 L 296.28 486.42 L 292.29 469.30 L 276.14 445.59 L 297.10 425.18 L 320.19 402.64 L 337.88 408.39 L 337.88 427.58 L 349.52 438.83 L 373.23 438.83 L 416.35 467.83 L 427.12 468.18 L 435.10 467.23 L 442.64 471.17 L 465.36 473.86 L 475.43 459.63 L 506.55 445.35 L 520.29 456.89 L 543.56 456.90 L 513.79 495.61 L 514.20 619.74 L 534.37 647.85 L 510.51 661.46 L 502.10 675.69 L 489.33 678.19 L 484.50 702.22 L 473.56 715.99 L 466.91 738.71 L 453.19 750.00 Z' />
              <path d='M 560.48 159.78 L 575.06 162.81 L 585.33 154.29 L 593.39 165.09 L 592.32 179.56 L 572.89 187.89 L 587.52 197.40 L 574.96 215.99 L 567.40 209.80 L 559.20 212.26 L 540.17 211.68 L 539.63 201.12 L 536.98 191.52 L 548.50 175.20 L 560.48 159.78 Z' />
            </g>
            <path
              d='M 514.20 619.74 L 513.79 495.61 L 543.56 456.90 L 552.88 446.13 L 574.72 445.50 L 605.08 421.41 L 649.46 419.90 L 745.72 316.98 L 717.07 317.19 L 605.69 276.30 L 592.68 263.98 L 580.12 247.34 L 567.54 228.27 L 574.96 215.99 L 587.52 197.40 L 598.60 203.81 L 605.28 218.16 L 620.65 232.67 L 637.56 232.79 L 669.67 223.92 L 706.75 219.81 L 736.74 209.03 L 753.63 206.75 L 765.80 200.41 L 785.20 199.19 L 796.09 198.51 L 811.79 193.34 L 829.85 189.84 L 845.97 177.92 L 858.88 177.83 L 859.66 187.45 L 856.51 207.67 L 856.64 225.90 L 849.45 238.42 L 839.85 275.78 L 823.45 314.27 L 802.39 358.15 L 773.15 408.36 L 744.07 446.63 L 704.00 493.19 L 669.91 520.80 L 618.95 554.63 L 587.20 580.55 L 549.92 621.82 L 542.06 639.78 L 534.37 647.85 L 514.20 619.74 Z'
              fill='#efe5ca'
              stroke='white'
              strokeWidth='2.4'
              filter='url(#office-map-shadow)'
            />
            <g fill='#102046' fontWeight='800' textAnchor='middle' pointerEvents='none'>
              <text x='567.24' y='185.65' fontSize='13' opacity='.46' letterSpacing='.15em'>DJIBOUTI</text>
              <text x='412.24' y='358.31' fontSize='18' opacity='.46' letterSpacing='.15em'>ETHIOPIA</text>
              <text x='415.64' y='583.69' fontSize='18' opacity='.46' letterSpacing='.15em'>KENYA</text>
              <text x='688.17' y='396' fontSize='29' opacity='.55' letterSpacing='.12em'>SOMALIA</text>
            </g>

            {mappedOffices.map((office) => {
              const [x, y] = projectPoint(office.coordinates)
              const [labelX, labelY] = office.labelOffset
              const labelWidth = Math.max(94, office.city.length * 10 + 30)
              const selected = activeOffice.id === office.id

              return (
                <g
                  key={office.id}
                  transform={`translate(${x} ${y})`}
                  role='button'
                  tabIndex={0}
                  aria-label={`Show ${office.city} office details`}
                  onClick={() => setActiveId(office.id)}
                  onFocus={() => setActiveId(office.id)}
                  onMouseEnter={() => setActiveId(office.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setActiveId(office.id)
                    }
                  }}
                  className='cursor-pointer outline-none'
                >
                  <circle
                    r={selected ? 24 : 19}
                    fill='none'
                    stroke={office.color}
                    strokeWidth='3'
                    opacity={selected ? '.3' : '.16'}
                  />
                  <circle
                    r={selected ? 13 : 11}
                    fill={office.color}
                    stroke='white'
                    strokeWidth='4'
                    className='drop-shadow-md transition-all'
                  />
                  <g transform={`translate(${labelX} ${labelY})`} pointerEvents='none'>
                    <rect
                      width={labelWidth}
                      height='38'
                      rx='5'
                      fill={selected ? '#102046' : 'white'}
                      stroke='rgba(16,32,70,.14)'
                    />
                    <text
                      x='12'
                      y='24'
                      fill={selected ? 'white' : '#102046'}
                      fontSize='15'
                      fontWeight='800'
                    >
                      {office.city}
                    </text>
                  </g>
                </g>
              )
            })}
          </svg>
          <p className='absolute bottom-4 left-4 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-500 shadow-sm'>
            Select a map point to view office details
          </p>
        </div>

        <aside className='border-t border-slate-200 p-7 lg:border-l lg:border-t-0 lg:p-9' aria-live='polite'>
          <p className='eyebrow'>{activeOffice.office}</p>
          <h3 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-950'>
            {activeOffice.city}
          </h3>
          <div className='mt-8 grid gap-5 text-sm leading-6 text-slate-600'>
            <p className='flex gap-3'>
              <MapPin className='mt-1 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
              {activeOffice.address}
            </p>
            <a href={`mailto:${activeOffice.email}`} className='flex gap-3 hover:text-brand'>
              <Mail className='mt-1 h-4 w-4 shrink-0 text-brand' aria-hidden='true' />
              {activeOffice.email}
            </a>
          </div>
          <a
            href={directions}
            target='_blank'
            rel='noreferrer'
            className='mt-8 inline-flex items-center gap-2 border-b-2 border-brand pb-1 text-sm font-bold text-brand'
          >
            Get directions <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
          </a>
        </aside>
      </div>

      <div className='border-t border-white/15 bg-forest px-6 py-7 text-white md:px-9'>
        <div className='flex flex-col justify-between gap-6 sm:flex-row sm:items-center'>
          <div className='flex items-center gap-4'>
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-full bg-emerald-300 text-[#064e3b]'>
              <Phone className='h-5 w-5' aria-hidden='true' />
            </span>
            <div>
              <p className='text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-300'>
                CeRID hotline
              </p>
              <p className='mt-1 text-sm text-white/70'>Call for information and assistance.</p>
            </div>
          </div>
          <a
            href='tel:4444'
            className='inline-flex min-h-12 items-center justify-center gap-3 border-2 border-white bg-white px-7 text-base font-extrabold text-[#064e3b] transition-colors hover:border-emerald-300 hover:bg-emerald-300 hover:text-[#052e25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
            aria-label='Call the CeRID hotline at 4444'
          >
            Call hotline <span className='text-2xl tracking-tight'>4444</span>
          </a>
        </div>
      </div>
    </div>
  )
}
