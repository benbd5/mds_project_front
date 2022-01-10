import { useState } from 'react'
import TextInput from '../Form/TextInput'

export default function Register ({ submit, error }) {
  /* Stockage des données du formulaire */

  // On déclare un état pour tous les champs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <TextInput
            type='text'
            label='Nom'
            name='lastname'
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextInput
            type='text'
            label='Prénom'
            name='firstname'
            value={formData.firstName}
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
          <button type='submit' className='btn btn-primary'>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  )
}
