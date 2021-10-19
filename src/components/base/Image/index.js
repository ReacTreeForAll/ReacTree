import PropTypes from 'prop-types'
import { useRef, useEffect, useState } from 'react'

let observer = null
const LOAD_IMG_EVENT_NAME = 'loadImage'

const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_NAME))
    }
  })
}

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
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode || undefined,
    borderRadius: iscircle ? '50%' : undefined,
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
      style={{ ...imageStyle, ...props.style }}
      {...props}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  mode: PropTypes.string,
  block: PropTypes.bool,
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  placeholder: PropTypes.string,
  iscircle: PropTypes.bool,
}

export default Image
