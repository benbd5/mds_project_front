import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createSession } from '../../services/api'
import DateInput from '../Form/DateInput'
import SelectInput from '../Form/SelectInput'
import TextArea from '../Form/TextArea'
import TextInput from '../Form/TextInput'

export default function SessionCreate ({ data, onChange }) {
  const navigate = useNavigate()

  const [error, setError] = useState([])

  const handleChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createSession(data)
      await navigate('/sessions')
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form-control form-control-lg'>
        <SelectInput
          name='sport'
          label='Sport'
          onChange={handleChange}
          value={data.sport ? data.sport : 'Surf'}
        />
        <TextArea
          name='description'
          label='Description'
          type='text'
          placeholder='Décrire votre futur session, votre niveau, votre motivation, etc...'
          onChange={handleChange}
          value={data.description}
        />
        <TextInput
          name='place'
          label='Lieu/Spot'
          type='text'
          placeholder='Bud Bud'
          onChange={handleChange}
          value={data.place}
        />
        <DateInput
          name='date'
          label='Date de la session'
          type='date'
          onChange={handleChange}
          value={data.date}
        />

        <div className='text-center'>
          <button className='btn btn-primary' type='submit'>
            Créer
          </button>
        </div>

        {
          error &&
          (
            <div>
              <h4>{error.message}</h4>
            </div>
          )
        }

      </form>
    </div>
  )
}
