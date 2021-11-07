import useKey from '@hooks/useKey'

export default {
  title: 'Hooks/useKey',
}

export const Default = () => {
  useKey('keydown', 'Escape', () => {
    alert('w Keydown')
  })
  return <>useKey</>
}
