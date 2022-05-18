import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <SearchBar setUserName={setUserName} />
    </div>
  );
}

export default App;
