import { useRef, useEffect, useState } from 'react'

let observer = null
const LOAD_IMG_EVENT_NAME = 'loadImage'

const onIntersection = (entries: any, io: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_NAME))
    }
  })
}

interface IImage {
  src: string
  width?: number
  height?: number
  mode: 'fill' | 'contain' | 'cover'
  style?: React.CSSProperties
  block: Boolean
  lazy: Boolean
  threshold: number
  placeholder: string
  iscircle: Boolean
}

// 참고용 주석 연습용 레포니까요!
// export type AlertProps = Omit<
//   CombineElementProps<
//     'img',
//     {
//       src: string
//       width?: number
//       height?: number
//       mode: string
//       block: Boolean
//       lazy: Boolean
//       threshold: number
//       placeholder: string
//       iscircle: Boolean
//     }
//   >,
//   'children'
// >

const Image = ({
  src,
  width = 150,
  height = 150,
  mode,
  block,
  lazy,
  threshold = 0.1,
  placeholder,
  iscircle,
  style,
}: IImage) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const imageStyle: React.CSSProperties = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode,
    borderRadius: iscircle ? '50%' : undefined,
    ...style,
  }

  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImage = () => setLoaded(true)

    const imgElement = imgRef.current

    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_NAME, handleLoadImage)
    return () => {
      imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_NAME, handleLoadImage)
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) return

    observer = new IntersectionObserver(onIntersection, { threshold })
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt="ImgError..."
      style={{ ...imageStyle }}
    />
  )
}

export default Image
