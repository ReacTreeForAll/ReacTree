import { useState } from 'react'
const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate ? validate(values) : {}
    if (Object.keys(newErrors).length === 0) {
      onSubmit(values)
    }
    setErrors(newErrors)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useForm
