import { useState } from 'react';
import './App.css';

import AuthClass from './components/AuthClass'


function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [isClass, setIsClass]= useState(false)  

  return (
    <div className="App-header">
      <h1>{isClass ? 'Keep it classy! 🥳' : 'Still trying to function? 😔'}</h1>
      {
        loggedIn ?
          <button style={{ padding: '1em' }} onClick={() => setLoggedIn(false)}>Logout</button>
          :
          <AuthClass loggedIn={loggedIn} setLoggedIn={setLoggedIn} setIsClass={setIsClass}  />
      }
    </div>
  );
}


export default App;
