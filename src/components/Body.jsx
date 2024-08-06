import React from 'react'
import RestrauntCard from './RestrauntCard'

const Body = () => {
  return (
    <div className='body'>
      <div className="search">
        <input className='searchInput' type="text" placeholder='Search Your Favourite Restraunts' />
        <button className='searchBtn'>Search</button>
      </div>
      <div className="resContainer">
        <RestrauntCard resName="McDonalds" />
        <RestrauntCard resName="KFC" />
      </div>
    </div>
  )
}

export default Body
