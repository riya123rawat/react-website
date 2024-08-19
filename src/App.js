
import './App.css';
import React from 'react';
import AdvertisementList from './components/AdvertisementList'; 
import LexiconRed  from './images/Lexicon Red.png';

function App() {
  const advertisements = [
    {  title: 'Ad 1', description: 'This is the first advertisement.', contact: 'Contact:' },
    {  title: 'Ad 2', description: 'This is the second advertisement.', contact: 'Contact:' },
    {  title: 'Ad 3', description: 'This is the third advertisement.', contact: 'Contact:' },
    {  title: 'Ad 4', description: 'This is the fourth advertisement.', contact: 'Contact:' },
    {  title: 'Ad 5', description: 'This is the fifth advertisement.', contact: 'Contact:' },
    {  title: 'Ad 6', description: 'This is the sixth advertisement.', contact: 'Contact:' },
  ];
  return (
    <div className="App">
      <div class="card shadow"style={{ backgroundColor: 'Black', color: 'white' }}>
       
        <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img src={LexiconRed} alt="Lexicon Red Logo" height="30" width="50"/>
        <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
         
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#login">Login</a>
            <a href="#signup">Sign Up</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>
      <h1 style={{ marginRight: '20px',backgroundColor:'Red' }}>Marketplace UI</h1>
      <p>Advertisements List</p>

        <AdvertisementList advertisements={advertisements} />
     /</div> 
    </div>
  
  );
}

export default App;
