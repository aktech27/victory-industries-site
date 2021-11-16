import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Products />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
