import "./App.css";
import Nav from "./WebContainer/Nav/Nav";
import Price from "./WebContainer/Price/Price";
import About from "./WebContainer/About/About";
import Avantage from "./WebContainer/Avantage/Avantage";
import Presta from "./WebContainer/Presta/Presta";
import Footer from "./WebContainer/Footer/Footer";
import Contact from "./WebContainer/Contact/Contact";
import Cookies from "./WebContainer/Cookies/Cookies";

function App() {
  return (
    <div className="App">
      <Nav />
 <Cookies/>
      <main id="main">
        <About />
        <Avantage />
        <Presta />  
        <Price/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
