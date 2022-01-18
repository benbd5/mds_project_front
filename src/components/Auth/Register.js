import { useState } from 'react'
import TextInput from '../Form/TextInput'

export default function Register ({ submit, error }) {
  // On déclare un état pour tous les champs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password: '',
    phone: ''
  })

  // Gestion de la saisie formulaire
  const handleChange = (e) => {
    setFormData({
      // Conserver les autres saisies de champs
      ...formData,
      // Champ modifié ou ajouté
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }

  return (
    <div className='container'>
      <h2 className='text-center'>Inscription</h2>
      <form onSubmit={handleSubmit} className='form-control form-control-lg'>
        <TextInput
          type='text'
          label='Nom'
          name='lastname'
          value={formData.lastname}
          onChange={handleChange}
        />
        <TextInput
          type='text'
          label='Prénom'
          name='firstname'
          value={formData.firstname}
          onChange={handleChange}
        />
        <TextInput
          type='text'
          label='Pseudo'
          name='pseudo'
          value={formData.pseudo}
          onChange={handleChange}
        />
        <TextInput
          type='email'
          label='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type='tel'
          label='Téléphone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
        <TextInput
          type='password'
          label='Mot de passe'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <div className='text-center'>
          <input type='submit' value='Inscription' className='btn btn-primary' />
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
