import NavBar from "./navigation/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
