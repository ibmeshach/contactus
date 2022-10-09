import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heroarea from "./components/Heroarea/Heroarea";
import Info from "./components/Info/Info";
import Support from "./components/Support/Support";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heroarea />
      <Info />
      <Support />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
