import React from 'react'

export default function TextArea (props) {
  return (
    <div className='m-3'>
      <label className='form-label'>
        {props.label}
      </label>
      <textarea
        // {...props} permet de changer dynamiqument le type d'input par les props
        {...props}
        value={props.value}
        onChange={props.onChange}
        className='form-control'
        rows='3'
      />
    </div>
  )
}
