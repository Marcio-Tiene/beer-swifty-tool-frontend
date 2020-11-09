import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
  label?: string;
}
type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  const texteareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: texteareaRef.current,
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <textarea
        id={fieldName}
        ref={texteareaRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
};
export default Textarea;
