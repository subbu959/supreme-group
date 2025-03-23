import "./App.css";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import VehicleScrollSection from "./components/VehicleScrollSection";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-screen snap-start">
        <Hero />
      </section>
      <VehicleScrollSection />
      <section className="h-screen snap-start">
        <Contact />
      </section>
        <Footer />
    </div>
  );
}

export default App;
