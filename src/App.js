import "./App.css";
import Nav from "./WebContainer/Nav/Nav";

import About from "./WebContainer/About/About";
import Avantage from "./WebContainer/Avantage/Avantage";
import Presta from "./WebContainer/Presta/Presta";
import Footer from "./WebContainer/Footer/Footer";
import Contact from "./WebContainer/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
 
      <main id="main">
        <About />
        <Avantage />
        <Presta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
