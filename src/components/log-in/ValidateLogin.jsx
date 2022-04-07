export default function validateInfo(formData) {
  let errors = {}

  if (!formData.username) {
    errors.username = 'Username required'
  } else if (formData.username !== 'andy54') {
    errors.username = 'invalid username'
  }

  if (!formData.password) {
    errors.password = 'Password required'
  } else if (formData.password !== 'password54') {
    errors.password = 'invalid password'
  }

  return errors
}
