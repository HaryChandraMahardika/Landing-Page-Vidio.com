import Header from "./components/Header";
import Banner from "./components/Banner";
import VidioOriginals from "./components/VidioOriginal";
import TopMovies from "./components/TopMovies";
import SinetronPilihan from "./components/SinetronPilihan";
import SpesialUntukmu from "./components/SpesialUntukmu";
import MiniDrama from "./components/MiniDrama";
import UpcomingVidio from "./components/UpcomingVidio";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="app-container">
      <VidioOriginals />
      <TopMovies />
      <SinetronPilihan />
      <SpesialUntukmu />
      <MiniDrama />
      <UpcomingVidio />
    </div>
    </div>
  );
}

export default App;
