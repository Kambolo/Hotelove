import React from 'react'

const Filters = () => {
  return (
    <div className='filters-container'>
      <span>
        <strong>Filter by:</strong>
      </span>
      <hr />
      <div className="input-group">
        <input type="checkbox" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  )
}

export default Filters;