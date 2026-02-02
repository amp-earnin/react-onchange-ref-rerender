import { forwardRef, useEffect, useState } from 'react';

type Props = {
  onChange?: (value: string) => void
}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [executionCount, setExecutionCount] = useState<number>(0)
  // since props.onChange ref change on each render,
  // effect will be executed on each render as well
  useEffect(() => {
    setExecutionCount((prev) => prev + 1)
  }, [props.onChange])

  return (
    <>
      <input
        type="text"
        placeholder="input with expensive onChange effect"
        onInput={(event) => props.onChange?.(event.currentTarget.value)}
        ref={ref}
      />
      <div>
        <span>Effect execution count: {executionCount}</span>
      </div>
      
    </>

  );
});

export default Input;
