
import './App.css';
import Nav from "./WebContainer/Nav/Nav"
import Slo from "./WebContainer/Slogan/Slogan"
import About from "./WebContainer/About/About";
import Avantage from "./WebContainer/Avantage/Avantage";
import Presta from "./WebContainer/Presta/Presta";
import Footer from "./WebContainer/Footer/Footer";

function App() {
  return (
    <div className="App">
   
     <Nav/>
     <Slo/>
     <main id="main">
<About />
<Avantage />
<Presta />
     </main>
     <Footer />

    </div>
   


  );
}

export default App;
