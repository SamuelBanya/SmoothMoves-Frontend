import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import About from "./About"
import MoveForm from "./MoveForm"
import Checklist from "./Checklist"
import Export from "./Export"
import Email from "./Email"
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moveform" element={<MoveForm />}/>
        <Route path="/checklist" element={<Checklist />}/>
        <Route path="/export" element={<Export />}/>
        <Route path="/email" element={<Email />}/>
      </Routes>
    </div>
  );
}

export default App;
