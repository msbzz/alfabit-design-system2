import React from 'react';
import Divider from '../components/Divider/Divider';

const Home = () => {
  return (
    <div>
      <h1>Testing Divider Component</h1>
      <Divider width="w-full" height="h-2" bgColor="light">
        Hello Divider
      </Divider>
    </div>
  );
};

export default Home;
