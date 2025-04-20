import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // Common security issue #1: Hardcoded credentials
  const PASSWORD = '12345'; 
  const API_KEY = '12345';
  const KEY_SECRET = "CVpKW+IQS";
  
  const [userData, setUserData] = useState('');
  const [query, setQuery] = useState('');
  
  // Common security issue #2: SQL injection vulnerability
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
  
  // Common security issue #3: XSS vulnerability
  function createMarkup() {
    // Dangerously setting innerHTML (XSS risk)
    return {__html: userData};
  }
  
  // Common security issue #4: Insecure cookie handling
  useEffect(() => {
    document.cookie = "authToken=" + KEY_SECRET + "; path=/";
    document.cookie = "username=admin; path=/";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Appscan 360 Demo</h1>
        
        {/* Security issue #5: Exposing sensitive data in UI */}
        <div>Password: {PASSWORD}</div>
        <div>API Key: {API_KEY}</div>
      
        {/* Security issue #6: XSS via dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={createMarkup()} />
        
        {/* Security issue #7: Direct user input without validation */}
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter user ID"
        />
        <button onClick={() => setUserData("<script>alert('XSS')</script>")}>
          Load User Data
        </button>
      </header>
    </div>
  );
}

export default App;