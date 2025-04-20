import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [userData, setUserData] = useState('');
  const [query, setQuery] = useState('');

  

  
  //Insecure cookie handling
  useEffect(() => {
    document.cookie = "authToken=" + KEY_SECRET + "; path=/";
    document.cookie = "username=admin; path=/";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Appscan 360 Demo</h1>
        
        {/* XSS via dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={createMarkup()} />
        
      </header>
    </div>
  );
}

export default App;