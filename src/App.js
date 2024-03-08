
import './App.css';
import Nav from "./WebContainer/Nav/Nav"
import Slo from "./WebContainer/Slogan/Slogan"
import About from "./WebContainer/About/About";
import Avantage from "./WebContainer/Avantage/Avantage";

function App() {
  return (
    <div className="App">
   
     <Nav/>
     <Slo/>
     <main id="main">
<About />
<Avantage />
     </main>


    </div>
   


  );
}

export default App;
