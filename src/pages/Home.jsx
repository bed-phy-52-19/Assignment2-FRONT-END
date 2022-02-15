
import React from 'react'
import  Categories  from './Categories'
import Announcement from './Announcement'
import Nevbar from './Nevbar'
import Slider from './Slider'
import Products from './Products'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
        <Nevbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        </div>
  );
};

export default Home