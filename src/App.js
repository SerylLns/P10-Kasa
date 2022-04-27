import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <main className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/:id" element={<div>Flat</div>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
