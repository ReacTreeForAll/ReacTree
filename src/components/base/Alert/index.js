import Swal from 'sweetalert2'
import ImgPath from '@assets/pageMove.png'

const Alert = () => {
  Swal.fire({
    title: '완료',
    text: '답변이 제출되었습니다',
    imageUrl: ImgPath,
    imageHeight: 100,
    imageWidth: 100,
  })

  return <button onClick={() => Alert()}>Click</button>
}

export default Alert
