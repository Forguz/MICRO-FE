import React from 'react';
import SafeComponent from './SafeComponent';
import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from './PDPContent';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <SafeComponent>
        <Header app={{ name: 'PDP' }} />
      </SafeComponent>
      <div className='my-10'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
