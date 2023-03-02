import LoadingIcons from 'react-loading-icons'

interface Props {
  height?: string
  stroke?: string
}

const Spinner = (props: Props) => {
  const { height = '6em', stroke = '#1F9747' } = props
  return (
    <div className='text-center'>
      <LoadingIcons.Circles
        stroke={stroke}
        height={height}
        fill='transparent'
      />
      <p style={{ color: '#1F9747' }}>Loading...</p>
    </div>
  )
}

export default Spinner
