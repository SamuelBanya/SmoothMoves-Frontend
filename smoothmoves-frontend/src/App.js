import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/checklist" element={<Checklist />}/>
        <Route path="/export" element={<Export />}/>
        <Route path="/email" element={<Email />}/>
      </Routes>
    </div>
  );
}

export default App;
