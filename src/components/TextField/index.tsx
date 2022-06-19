import React, { useState } from 'react';

import { TextFieldProps } from '@/types';

import * as S from './styles';

export function TextField({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState('');

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  }

  return (
    <S.Container disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}

      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}

        <S.Input
          type="text"
          id={labelFor}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
    </S.Container>
  );
}
