import { Banner } from "./components/Banner";
import { Experience } from "./components/Experience";
import { FloatingButton } from "./components/FloatingButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Location } from "./components/Location";
import { Proposal } from "./components/Proposal";

function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <Banner />
        <Proposal />
        <Location />
        <Experience />
        <FloatingButton />
      </div>
      <Footer />
    </>
  );
}

export default App;
