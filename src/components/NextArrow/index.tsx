import { HtmlHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { CustomArrowProps } from 'react-slick';

type NextArrowProps = CustomArrowProps & HtmlHTMLAttributes<HTMLDivElement>;

export function NextArrow({ ...rest }: NextArrowProps) {
  return (
    <div {...rest}>
      <FiChevronRight />
    </div>
  );
}
