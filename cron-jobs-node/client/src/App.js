import React from 'react';
import './App.css';
import Daily from './components/daily'
import Weekly from './components/weekly'
import Monthly from './components/monthly'
import Yearly from './components/yearly'
import Once from './components/once'
function App() {
  return (
    <div className="App">
      <div>
        <Daily/>
      </div>
      <div>
        <Weekly/>
      </div>
      <div>
        <Monthly/>
      </div>
      <div>
        <Yearly/>
      </div>
      <div>
        <Once/>
      </div>
    </div>
  );
}

export default App;
