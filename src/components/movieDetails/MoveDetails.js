import React from 'react'

export default function MoveDetails({selectedId, onCloseMovie}) {
  return (
    <div className='details'>
    <button className='btn-back' onClick={onCloseMovie}>&larr;</button>
    {selectedId}
    </div>
  )
}
