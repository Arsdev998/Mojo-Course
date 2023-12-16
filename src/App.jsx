import Hero from "./Components/Hero";
import NavbarNav from "./Components/NavbarNav";
import Offers from "./Components/Offers";

function App() {
  return (
    <main className="min-h-screen overflow-y-scroll bg-[#FFFAF4]">
      <NavbarNav/>
      <Hero/>
      <Offers/>
    </main>
  );
}

export default App;
