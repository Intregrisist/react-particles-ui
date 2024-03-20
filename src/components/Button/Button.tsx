import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { block } from '@lib/bem-cn';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean;
  disabled?: boolean;
};

const b = block('Button');

const Button: FC<ButtonProps> = (props) => {
  const { disabled, loading } = props;
  return (
    <button
      {...props}
      disabled={disabled ?? loading}
      className={b({
        test: true,
      }).is({
        loading: !!loading,
        disabled: !!disabled,
      })}
    />
  );
};

export default Button;
