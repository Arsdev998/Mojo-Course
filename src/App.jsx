import Description from "./Components/Description";
import Hero from "./Components/Hero";
import MainContent from "./Components/MainContent";
import NavbarNav from "./Components/NavbarNav";
import Offers from "./Components/Offers";
import Testimoni from "./Components/Testimoni";

function App() {
  return (
    <main className="min-h-screen overflow-y-scroll bg-[#FFFAF4]">
      <NavbarNav/>
      <Hero/>
      <Offers/>
      <MainContent/>
      <Description/>
      <Testimoni/>
    </main>
  );
}

export default App;
