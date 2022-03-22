import React from 'react';
import Announcement from '../Components/Layout/Announcement';
import Navbar from '../Components/Layout/Navbar';
import Slider from '../Components/Slider';

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
