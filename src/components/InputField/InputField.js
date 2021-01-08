import React from 'react';
import './InputField.css';

const InputField = ({name, type, value, label, onChange, style, ...props}) => (
    <label htmlFor={name} key={name} className='InputField-label' style={style} >
        {label}:
        <input type={type} className='InputField-field' value={value} onChange={onChange} id={name} 
        name={name} placeholder={label} autoComplete='off' autoCorrect='off' autoCapitalize='none' {...props} required />
    </label>
);

export default InputField;