import NavBar from "./navigation/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <NavBar />
      <Home />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
