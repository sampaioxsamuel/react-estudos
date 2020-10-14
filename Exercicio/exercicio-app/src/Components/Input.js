import React from 'react'

const Input = ({type, id, label, value, onChange, ...props}) => {
	return (
		<>
		<label htmlFor={id}>{label}</label>
		<input type={type} id={id} value={value} onChange={onChange} {...props}/>
		</>
	)
}

export default Input;
