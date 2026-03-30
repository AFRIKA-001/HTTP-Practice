import React from 'react'

function Error({ title, message ,onConfirm}) {
  return (
    <div className='error'>
      <h2>{title}</h2>
      <p>{message}</p>
      {onConfirm && (
        <button onClick={onConfirm}>Try Again</button>
      )}
    </div>
  )
}

export default Error
