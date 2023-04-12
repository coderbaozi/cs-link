import { useState } from 'react'
import { ChangeEvent } from 'react'
export function useFormInput<T>(initialValue: T) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value as T)
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  }

  return inputProps
}
