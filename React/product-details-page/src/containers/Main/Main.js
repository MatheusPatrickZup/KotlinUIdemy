import React, { Component } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Section from '../Section/Section';
import ProductData from '../../components/ProductData/ProductData';

class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Section productData={ProductData}/>
      </main>
    );
  }
}

export default Main;
