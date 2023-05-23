import React from 'react';

const InputComponent = ({type, name,value, placeholder, required, handleInputChange }) => {
    return (
        <input autoComplete='none'  name={name} onChange={handleInputChange} className={'p-2 border-b font-thin text-gray-950 focus:outline-none focus:border-yellow-400 caret-yellow-400'} type={type} placeholder={placeholder} value={value} required={required} />
    );
};

export default InputComponent;
