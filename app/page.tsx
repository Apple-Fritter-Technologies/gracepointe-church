import Hero from "../components/hero";
import Services from "../components/services";
import Ministries from "../components/ministries";
import Location from "../components/location";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Services />
      <Ministries />
      <Location />
    </div>
  );
}
