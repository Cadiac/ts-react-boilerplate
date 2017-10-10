import * as React from 'react';

import Header from '../containers/Header';
import Footer from '../components/Footer';
import HelloAsia from '../components/HelloAsia';

const HelloPage = () => (
  <div className="hello">
    <Header />
    <HelloAsia />
    <Footer />
  </div>
);

export default HelloPage;
