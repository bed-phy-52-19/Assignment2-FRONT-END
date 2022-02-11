
import React from 'react'
import Announcement from './Announcement'
import Nevbar from './Nevbar'
import Slider from './Slider'

const Home = () => {
  return (
    <div className='Container'>
      <Announcement/>
        <Nevbar/>
        <Slider/>
        </div>
  )
}

export default Home