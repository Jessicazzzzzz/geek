import Icon from '@/components/Icon'
import React from 'react'
import './index.scss'
export default function Login() {
  return (
    <div>
      Login
      <Icon
        type="icon-iconarrowl"
        className="big"
        onClick={() => alert('hi')}
      />
    </div>
  )
}
