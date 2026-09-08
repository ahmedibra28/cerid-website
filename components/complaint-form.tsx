'use client'

import { FormEvent, useState } from 'react'
import { LockKeyhole, Mail, MessageSquareWarning, Phone } from 'lucide-react'

const complaintEmail = 'info@cerid.so'

export default function ComplaintForm() {
  const [anonymous, setAnonymous] = useState(false)
  const [status, setStatus] = useState('')

  function submitComplaint(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const category = String(form.get('category') || 'General complaint')
    const name = anonymous
      ? 'Anonymous'
      : String(form.get('name') || 'Not provided')
    const contact = anonymous
      ? 'Not provided'
      : String(form.get('contact') || 'Not provided')
    const location = String(form.get('location') || 'Not provided')
    const details = String(form.get('details') || '')
    const subject = `CeRID complaint: ${category}`
    const body = [
      `Category: ${category}`,
      `Name: ${name}`,
      `Contact details: ${contact}`,
      `Location or project: ${location}`,
      '',
      'Complaint or feedback:',
      details,
    ].join('\n')

    setStatus(
      'Your email application is opening. Review the complaint, then send it when ready.',
    )
    window.location.href = `mailto:${complaintEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      className='section-padding bg-warm-white'
      id='complaints'
      aria-labelledby='complaint-form-title'
    >
      <div className='site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20'>
        <div>
          <p className='eyebrow'>Complaints and feedback</p>
          <h2 id='complaint-form-title' className='section-title mt-4'>
            Tell us what happened.
          </h2>
          <p className='mt-6 max-w-xl text-lg leading-8 text-slate-600'>
            CeRID welcomes concerns, complaints, and feedback about our staff,
            services, and programmes. You may submit your complaint anonymously.
          </p>

          <div className='mt-9 grid gap-5 border-t border-slate-300 pt-7 text-sm leading-6 text-slate-600'>
            <p className='flex gap-3'>
              <LockKeyhole
                className='mt-1 h-5 w-5 shrink-0 text-brand'
                aria-hidden='true'
              />
              Share only the information needed to understand and follow up on
              your concern.
            </p>
            <a
              href='tel:4444'
              className='flex gap-3 font-bold text-slate-950 hover:text-brand'
            >
              <Phone
                className='mt-1 h-5 w-5 shrink-0 text-brand'
                aria-hidden='true'
              />
              Prefer to speak with someone? Call the CeRID hotline at 4444.
            </a>
            <a
              href={`mailto:${complaintEmail}`}
              className='flex gap-3 font-bold text-slate-950 hover:text-brand'
            >
              <Mail
                className='mt-1 h-5 w-5 shrink-0 text-brand'
                aria-hidden='true'
              />
              {complaintEmail}
            </a>
          </div>
        </div>

        <form
          onSubmit={submitComplaint}
          className='border border-slate-300 bg-white p-6 sm:p-9'
        >
          <div className='grid gap-6 sm:grid-cols-2'>
            <label className='grid gap-2 text-sm font-bold text-slate-950'>
              Complaint category{' '}
              <span className='font-normal text-slate-500'>(required)</span>
              <select
                name='category'
                required
                defaultValue=''
                className='h-12 rounded-none border border-slate-300 bg-white px-4 font-normal text-slate-700 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'
              >
                <option value='' disabled>
                  Select a category
                </option>
                <option>Programme services</option>
                <option>Staff conduct</option>
                <option>Safeguarding or protection</option>
                <option>Fraud or corruption</option>
                <option>Other complaint or feedback</option>
              </select>
            </label>

            <label className='grid gap-2 text-sm font-bold text-slate-950'>
              Location or project{' '}
              <span className='font-normal text-slate-500'>(optional)</span>
              <input
                name='location'
                type='text'
                placeholder='Town, office, or project name'
                className='h-12 rounded-none border border-slate-300 px-4 font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20'
              />
            </label>

            <label className='grid gap-2 text-sm font-bold text-slate-950'>
              Your name{' '}
              <span className='font-normal text-slate-500'>(optional)</span>
              <input
                name='name'
                type='text'
                disabled={anonymous}
                placeholder={anonymous ? 'Submitting anonymously' : 'Full name'}
                className='h-12 rounded-none border border-slate-300 px-4 font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:bg-slate-100'
              />
            </label>

            <label className='grid gap-2 text-sm font-bold text-slate-950'>
              Phone or email{' '}
              <span className='font-normal text-slate-500'>(optional)</span>
              <input
                name='contact'
                type='text'
                disabled={anonymous}
                placeholder={
                  anonymous
                    ? 'Submitting anonymously'
                    : 'How we can contact you'
                }
                className='h-12 rounded-none border border-slate-300 px-4 font-normal text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:cursor-not-allowed disabled:bg-slate-100'
              />
            </label>
          </div>

          <label className='mt-6 grid gap-2 text-sm font-bold text-slate-950'>
            Complaint or feedback
            <textarea
              name='details'
              required
              rows={7}
              placeholder='Describe what happened, when it happened, and what response you would like from CeRID.'
              className='resize-y rounded-none border border-slate-300 px-4 py-3 font-normal leading-7 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20'
            />
          </label>

          <label className='mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700'>
            <input
              type='checkbox'
              checked={anonymous}
              onChange={(event) => setAnonymous(event.target.checked)}
              className='mt-1 h-4 w-4 accent-[#2E9646]'
            />
            Submit this complaint anonymously
          </label>

          <div className='mt-8 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between'>
            <p className='max-w-md text-xs leading-5 text-slate-500'>
              Selecting “Prepare complaint email” opens your email application.
              Your complaint is not sent until you review and send that email.
            </p>
            <button
              type='submit'
              className='inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-brand px-6 text-sm font-extrabold text-white transition-colors hover:bg-[#064e3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
            >
              <MessageSquareWarning className='h-4 w-4' aria-hidden='true' />
              Prepare complaint email
            </button>
          </div>

          {status && (
            <p
              className='mt-5 border-l-4 border-brand bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700'
              role='status'
              aria-live='polite'
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
