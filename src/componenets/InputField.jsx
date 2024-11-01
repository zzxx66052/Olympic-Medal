import React from 'react'

const InputField = ({label, type, value, placeholder, onChange}) => {
  return (
    <div className="inputField">
        <label>{label}</label>
        <input
            type={type}
            value={value}
            placeholder={placeholder ? "국가를 입력하세요" : null}
            onChange={onChange}
            required
        />
    </div>
  )
}

export default InputField