import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EventTypes from "@/components/EventTypes";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <EventTypes />
      <div id="about">
        <About />
      </div>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
