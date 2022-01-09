import { patchSession } from '../../services/api'
import DateInput from '../Form/DateInput'
import SelectInput from '../Form/SelectInput'
import TextArea from '../Form/TextArea'
import TextInput from '../Form/TextInput'

export default function SessionEdit ({ data, onChange }) {
  const handleChange = (e) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  console.log('data', data)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await patchSession(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectInput
          name='sport'
          label='Sport'
          onChange={handleChange}
          value={data.sport}
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

        <button className='btn btn-primary' type='submit'>
          Modifier
        </button>
      </form>
    </div>
  )
}
