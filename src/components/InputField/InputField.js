import React from 'react';
import './InputField.css';

const InputField = ({name, type, value, label, onChange, style}) => (
    <label htmlFor={name} key={name} className='InputField-label' style={style} >
        {label}:
        <input type={type} className='InputField-field' value={value} onChange={onChange} id={name} 
        name={name} placeholder={label} autoComplete='off' autoCorrect='off' autoCapitalize='none' required />
    </label>
);

export default InputField;