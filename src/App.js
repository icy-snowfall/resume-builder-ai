import { useState } from 'react';
import './App.css';
import { StateProvider } from './Context';
import Form from './formComponent/Form';
import AnnalectResume from './template/AnnalectResume';

function App() {
  const [page, setPage] = useState('form');

  const handlePageForm = () =>{
    setPage('form');
  }
  const handlePageTemplate = () =>{
    setPage('template');
  }
  return (
    <StateProvider>
    <div className="App">
      {page==='form' && (<><Form handlePageTemplate={handlePageTemplate} /></>)}
      {page==='template' &&(<AnnalectResume handlePageForm={handlePageForm} />) }
      
    </div>
    </StateProvider>
  );
}

export default App;
