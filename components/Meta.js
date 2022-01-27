import Head from 'next/head'

const Meta = (props) => {
  const title =
    'CeRID | Centre for Research & Integrated Development | demo.cerid.so'
  const description =
    'Centre for Research and Integrated Development (CeRID) is a non-governmental organization that was founded in 2005. It is registered in Somalia and Kenya and has field operation offices in Mogadishu, Jubbaland and Southwest States of Somalia.'
  const image = 'https://demo.cerid.so/logo.png'
  const url = 'https://www.demo.cerid.so'
  const author = 'cerid'

  return (
    <Head>
      <meta charSet='utf-8' />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#000000' />
      <link rel='canonical' href='https://demo.cerid.so/' />

      <title>{props.title ? props.title : title}</title>
      <meta
        name='title'
        content={props.title ? props.title : title}
        key='title'
      />
      <meta
        name='description'
        content={props.description ? props.description : description}
        key='description'
      />

      <meta
        name='keywords'
        content='cerid, non-profit, centre for research and integrated development, humanitarian, somali, somalia, charity, project, food production, atc project, atc, geel, geel project,'
      />
      <meta name='author' content={props.author ? props.author : author} />
      <meta name='publisher' content={props.author ? props.author : author} />
      <meta name='robots' content='index, follow' />
      <link rel='icon' href='/logo.png' />
      <link
        rel='shortcut icon'
        type='image/vnd.microsoft.icon'
        href='/logo.png'
      />
      <link rel='apple-touch-icon' type='image/png' href='/logo.png' />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='72x72'
        href='/logo.png'
      />
      <link
        rel='apple-touch-icon'
        type='image/png'
        sizes='114x114'
        href='/logo.png'
      />
      <link rel='icon' type='image/png' href='/logo.png' />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta
        itemProp='name'
        content={props.title ? props.title : title}
        key='g:title'
      />
      <meta
        itemProp='description'
        content={props.description ? props.description : description}
        key='g:description'
      />
      <meta
        itemProp='image'
        content={props.image ? `https://demo.cerid.so${props.image}` : image}
        key='g:image'
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property='og:url'
        content={props.url ? props.url : url}
        key='og:url'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={props.title ? props.title : title}
        key='og:title'
      />
      <meta
        property='og:description'
        content={props.description ? props.description : description}
        key='og:description'
      />
      <meta
        property='og:image'
        content={props.image ? `https://demo.cerid.so${props.image}` : image}
        key='og:image'
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={props.title ? props.title : title}
        key='twitter:title'
      />
      <meta
        name='twitter:description'
        content={props.description ? props.description : description}
        key='twitter:description'
      />
      <meta
        name='twitter:image'
        content={props.image ? `https://demo.cerid.so${props.image}` : image}
        key='twitter:image'
      />
    </Head>
  )
}
export default Meta
