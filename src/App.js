import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Flat from "./components/Flat";
import Header from "./components/Header";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";

function App() {

  return (
    <main className="app">
      <Header/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/flats/:id"  element={<Flat/>} />
      </Routes>
    </main>
  );
}

export default App;
