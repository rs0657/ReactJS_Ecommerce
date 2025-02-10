import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Productlist from './Prodlist';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [countH, setCountH] = useState(0);
  const [popupStatus, setPopupStatus] = useState(0);
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header 
          countH={countH} 
          setcount={setCountH}
          popStatus={popupStatus}
          setpopStatus={() => setPopupStatus(popupStatus === 0 ? 1 : 0)} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
