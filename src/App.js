import React from 'react';
import './styles/App.css';
import Home from './pages/Home';  // Assure-toi que le chemin est correct
import './i18n/i18n';  // Import pour initialiser la configuration i18n

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
