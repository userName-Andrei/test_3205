import React, {useState} from 'react';
import SearchForm from './components/SearchForm';
import SearchResponse from './components/SearchResponse';
import { Response } from './types';
import './App.css';

function App() {

  const [response, setResponse] = useState<Response | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  return (
    <div className="App">
      <SearchForm setResponse={setResponse} setLoading={setLoading} />
      <SearchResponse response={response} loading={loading} />
    </div>
  );
}

export default App;
