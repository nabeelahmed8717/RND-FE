import React from 'react'

const CommonStatusInline = (props:any) => {
  return (
    <div className='status-inLine'>
        <div
        className={`status-icon ${props.className}`}
        ></div>
        <span>{props.label}</span>
    </div>
  )
}

export default CommonStatusInline