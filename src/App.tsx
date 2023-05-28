import React from "react";

import { Blog, Features, Footer, Header, Gpt, Possibility } from './containers';
import { CallToAction, Brand, Navbar } from "./components";

import './styles/App.css';

const App: React.FC = () => {
  return (
      <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Gpt />
        <Features />
        <Possibility />
        <CallToAction />
        <Blog />
        <Footer />      
      </div>
  )
}

export default App;