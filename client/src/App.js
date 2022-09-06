import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import D from '../../client/src/assets/images/logo1.png'

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
      </>
      <img src={D}></img>
    </div>
  );
}

export default App;
