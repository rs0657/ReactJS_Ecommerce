import './styles/App.css';
import Header from './components/Header';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [countH, setCountH] = useState(0);
  const [popupStatus, setPopupStatus] = useState(0);
  

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
