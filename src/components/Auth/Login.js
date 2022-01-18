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
    submit(formData)
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Connexion</h2>
      <form onSubmit={handleSubmit} className='form-control form-control-lg'>
        <TextInput
          type='email'
          label='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type='password'
          label='Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <div className='text-center'>
          <input type='submit' value='Se connecter' className='btn btn-primary' />
        </div>
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
