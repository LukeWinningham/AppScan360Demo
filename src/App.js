import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [userData, setUserData] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    // Simulating a database query using string concatenation (SQL Injection risk)
    const fetchData = async () => {
      const userId = query || '1';
      // Insecure SQL construction
      const sql = "SELECT * FROM users WHERE id = " + userId;
      console.log("Executing query:", sql);
      
      // Simulate API call with insecure authorization
      fetch('https://api.example.com/data', {
        headers: {
          'Authorization': 'Basic ' + btoa('admin:' + PASSWORD)
        }
      });
    };
    
    fetchData();
  }, [query]);
  
  // Common security issue #2: Insecure cookie handling
  useEffect(() => {
    document.cookie = "authToken=" + KEY_SECRET + "; path=/";
    document.cookie = "username=admin; path=/";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Appscan 360 Demo</h1>
        
        {/* Security issue #3: XSS via dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={createMarkup()} />
        
      </header>
    </div>
  );
}

export default App;