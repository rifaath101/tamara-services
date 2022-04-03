import { useState, useReducer, useEffect } from 'react'

export const LoginFunctions = (callback, validate) => {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    }
  }

  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(formData))
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      setFormData({})
    }, 3000)

    console.log(formData)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      callback()
    }
  }, [errors])

  return { handleChange, handleSubmit, formData, errors }
}
