import React from 'react';
import Categories from '../Components/Categories';
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Layout/Navbar';
import Products from '../Components/Products';
import Slider from '../Components/Slider';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Layout/Footer';

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
