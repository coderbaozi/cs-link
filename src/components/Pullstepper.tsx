import React, { ReactNode, useState } from 'react'
import { Icon } from '@iconify/react'
interface IProps {
  childer?: ReactNode
}
const Button: React.FC<IProps> = () => {
  const [status, setStatus] = useState(-1)
  function handleClick(value: number) {
    // -1 as notpositive 0 as like 1 like unlike
    setStatus(value)
  }
  return (
    <>
      <span onClick={() => handleClick(0)} className="cursor-pointer hover:text-amber-900">
        <Icon className={status === 0 ? 'text-amber-900' : ''} icon="solar:like-broken" />
      </span>
      <span onClick={() => handleClick(1)} className="cursor-pointer hover:text-amber-900">
        <Icon className={status === 1 ? 'text-amber-900' : ''} icon="solar:like-broken" rotate={2} />
      </span>
    </>
  )
}

export default Button
