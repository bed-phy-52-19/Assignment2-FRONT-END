
import React from 'react'
import  Categories  from './Categories'
import Announcement from './Announcement'
import Nevbar from './Nevbar'
import Slider from './Slider'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <Announcement/>
        <Nevbar/>
        <Slider/>
        <Categories/>
        <Products/>
        </div>
  );
};

export default Home