import { forwardRef, useEffect } from 'react';

type Props = {
  onChange?: (value: string) => void
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  console.log('render: Input')
  useEffect(() => {
    console.log('onChange reference changed!')
  }, [props.onChange])

  return (
    <input
      type="text"
      placeholder="input with expensive onChange effect"
      onInput={(event) => props.onChange?.(event.currentTarget.value)}
      ref={ref}
    />
  );
});

export default Input;
