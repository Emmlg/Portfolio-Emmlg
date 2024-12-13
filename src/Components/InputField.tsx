import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
