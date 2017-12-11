import React, { Component } from 'react';
import './scss/App.css';

import Header from './components/header';
import Hero from './components/hero';
import FeaturedArticle from './components/featured_article';
import Article from './components/article';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <FeaturedArticle />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
