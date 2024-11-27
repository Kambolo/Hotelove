import React from 'react'
import './SearchBar.css'

export const SearchBar = () => {
  return (
    <div className="form-container">
      <form action="input-group horizontal">
        <div className='container'>
          <div className="row">
            <input 
              type="text" 
              id="place" 
              placeholder='Gdzie jedziesz?' 
              className='col-sm-6 place'
            />
            <div className="button-group horizontal col-sm">
              <button>
                <span className='icon-calendar icons'></span>
                </button>
              <button>
                <span className='icon-user icons'></span>
              </button>
            </div>
              <button className='search-button'>
                <span className='icon-search inverse icons'></span>
              </button>   
          </div>
        </div>
      </form>
    </div>
  )
}
