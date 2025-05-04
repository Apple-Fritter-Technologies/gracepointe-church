import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Beliefs from "../components/beliefs";
import Services from "../components/services";
import Ministries from "../components/ministries";
import Location from "../components/location";
import Footer from "../components/footer";
import Events from "../components/events";
import ContactForm from "../components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Beliefs />
      <Services />
      <Ministries />
      <Events />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
}
