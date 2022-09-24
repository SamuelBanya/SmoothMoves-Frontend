import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
