import Hero from "../components/hero";
import Services from "../components/services";
import Location from "../components/location";
import Beliefs from "@/components/beliefs";
import Sermons from "@/components/sermons";

export default function Home() {
  return (
    <div className="bg-background space-y-20">
      <Hero />
      <div className="container mx-auto space-y-36 px-4 md:px-6">
        <Services />
        <Sermons />
        <Beliefs />
        <Location />
      </div>
    </div>
  );
}
