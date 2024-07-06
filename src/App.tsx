import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import SubscribeForUpdates from "./components/SubscribeForUpdates.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div
        className={`bg-[url('./assets/background-images/bg-image-hero.png')] bg-center bg-no-repeat bg-cover h-full`}
      >
        <header className=" max-w-[1184px] pt-10 mobile:pt-20 px-8 mobile:px-16 mx-auto">
          <NavBar />
        </header>
        <div className="max-w-[1184px] mx-auto px-8 mobile:px-16">
          <Hero />
          <Speakers />
        </div>
      </div>
      <div className="mx-auto max-w-[1184px] px-8 mobile:px-16">
        <Schedule />
        <SubscribeForUpdates />
        <Footer />
      </div>
    </>
  );
}

export default App;
