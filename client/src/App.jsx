import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Market from './components/Market'; // Import the Market component
import Exchange from './components/Exchange'; // 
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import { Footer, Services } from './components';
import NewsSection from './components/NewsSection';
import Tutorials from './components/Tutorials';
import Wallet from './components/Wallet';
const App = () => {
  return (
      <div className="min-h-screen">
        <div className='gradient-bg-welcome'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<><Welcome/></>} />
            <Route path="/market" element={<Market />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/news" element={<NewsSection/>}/>
            <Route path="/tutorials" element={<Tutorials/>} />
            {/* Other routes if needed */}
          </Routes>
        </div>
        <Footer/>
      </div>
  );
};

export default App;
