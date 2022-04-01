import { ButtonProps } from '@/types';

import * as S from './styles';

export function Button({
  icon,
  children,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <S.Container size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Container>
  );
}
