import { PostProp } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const CardItem = ({
  item,
  link,
  quality = 100,
}: {
  item: PostProp
  link: string
  quality: number
}) => {
  return (
    <div
      className='card'
      style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
    >
      <Image
        width={200}
        height={200}
        quality={quality}
        src={item?.jetpack_featured_media_url || '/noimage.png'}
        style={{
          objectFit: 'cover',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        className='card-img-top w-100'
        alt={item.title.rendered}
      />
      <div className='card-body text-center'>
        <h5 className='card-title text-uppercase text-primary fw-bold'>
          {item.title.rendered}
        </h5>
        <div
          className='card-text'
          dangerouslySetInnerHTML={{
            __html: item?.excerpt.rendered?.slice(0, 80),
          }}
        />
        <Link
          href={`/${link}/${item.id}`}
          className='btn btn-primary text-light rounded-pill'
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default CardItem
