import Swal from 'sweetalert2'

const Alert = () => {
  Swal.fire({
    title: '완료',
    text: '답변이 제출되었습니다',
    imageUrl:
      'https://cdn-icons.flaticon.com/png/512/4332/premium/4332666.png?token=exp=1634735685~hmac=552bae4d27273aac6f94f33a9bff5981',
    imageHeight: 100,
    imageWidth: 100,
  })

  return <button onClick={() => Alert()}>Click</button>
}

export default Alert
