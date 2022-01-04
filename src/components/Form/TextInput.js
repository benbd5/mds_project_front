import React from 'react'

export default function TextInput (props) {
  return (
    <div className='m-3'>
      <label className='form-label'>
        {props.label}
        <input
          // {...props} permet de changer dynamiqument le type d'input par les props
          {...props}
          value={props.value}
          onChange={props.onChange}
          className='form-control'
        />
      </label>
    </div>
  )
}
