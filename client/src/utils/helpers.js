import React  from 'react';
const  { DOM: { input, select, textarea } } = React


export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function dateToStringYYYY_MM_DD_HH_MM( dateGotten ){
  let postDateString = dateGotten.toISOString()
  postDateString = postDateString.replace('T',' ')
  postDateString = postDateString.substring(0,16)
  return postDateString;
}


export const validateRequired = value => (value ? undefined : 'Required')

export const validateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export function renderField ({input, label, type, meta: {touched, error, warning}}) {
  return(
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
          {
            touched &&
            ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))
          }
        </div>
    </div>
  )
}
