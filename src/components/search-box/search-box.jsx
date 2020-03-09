import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({placeholder, handeleChange}) => {
    return (
        <input 
          type='search' 
          placeholder={placeholder} 
          className='search'
          onChange={handeleChange} 
        />
    );
};