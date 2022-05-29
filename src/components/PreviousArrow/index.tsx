import { HtmlHTMLAttributes } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { CustomArrowProps } from 'react-slick';

type PreviousArrowProps = CustomArrowProps & HtmlHTMLAttributes<HTMLDivElement>;

export function PreviousArrow({ ...rest }: PreviousArrowProps) {
  return (
    <div {...rest}>
      <FiChevronLeft />
    </div>
  );
}
