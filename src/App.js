// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Output from './components/Output';
import List from './components/List';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Output/>} />
      <Route path='/list' element={<List/>} />
      
    </Routes>
  );
}

export default App;