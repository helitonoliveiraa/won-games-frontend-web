import { useState } from 'react';

import { CheckboxProps } from '@/types';

import * as S from './styles';

export function Checkbox({
  label,
  labelFor,
  labelColor = 'white',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) {
  const [checked, setChecked] = useState(isChecked);

  function onChange() {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }

  return (
    <S.Container>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Container>
  );
}
