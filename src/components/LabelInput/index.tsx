import { InputHTMLAttributes } from 'react';
import './styles.scss';

type LabelInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
}

export function LabelInput({name, ...props}: LabelInputProps) {
  return(
    <div id="content" >
      <label>{name}</label>
      <input {...props} />
    </div>
  );
}