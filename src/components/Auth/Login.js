import { useState } from 'react'
import TextInput from '../Form/TextInput'

export default function Login ({ submit, error }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formData', formData)
    submit(formData)
  }

  return (
    <div className='container'>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <br />
        Se connecter
        <br />
        <TextInput
          type='email'
          label='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <TextInput
          type='password'
          label='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <input type='submit' value='Se connecter' className='btn btn-primary' />
        {
          error &&
          (
            <div>
              <h4>{error}</h4>
            </div>
          )
        }
      </form>
    </div>
  )
}
