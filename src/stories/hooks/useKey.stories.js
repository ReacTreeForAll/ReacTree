import useKey from '../../hooks/useKey'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Hooks/useKey',
}

export const Default = () => {
  useKey('keydown', 'Escape', () => {
    alert('w Keydown')
  })
  return <>useKey</>
}
