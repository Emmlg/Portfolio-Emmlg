import React from 'react';

interface TextAreaFieldProps {
  label: string;
  id: string;
  rows: number;
  placeholder: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, rows, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <textarea className="form-control" id={id} rows={rows} placeholder={placeholder}></textarea>
    </div>
  );
};

export default TextAreaField;
