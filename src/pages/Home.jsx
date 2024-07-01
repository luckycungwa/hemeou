import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedPosts from '../components/FeaturedPosts';
import RecentPosts from '../components/RecentPosts';

const Home = () => {
  return (
    <div className='App'>
      <HeroSection />
      <div className=' px-8 py-8'>
        <FeaturedPosts
        />
        <RecentPosts />
      </div>
      
    </div>
  );
}

export default Home;
