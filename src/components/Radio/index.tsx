import { RadioProps } from '@/types';

import * as S from './styles';

export function Radio({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  value,
  ...props
}: RadioProps) {
  function onChange() {
    !!onCheck && onCheck(value);
  }

  return (
    <S.Container>
      <S.InputRadio
        id={labelFor}
        type="radio"
        {...props}
        value={value}
        onChange={onChange}
      />
      {label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Container>
  );
}
