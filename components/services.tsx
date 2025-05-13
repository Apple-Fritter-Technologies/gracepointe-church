import { serviceTimes } from "@/lib/data";
import { ChevronRight } from "lucide-react";

interface ServiceTimeProps {
  title: string;
  image: string;
  listItems: string[];
  caption?: string;
}

function ServiceTime({ title, image, listItems, caption }: ServiceTimeProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border">
      <div className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt={`${title} Service`}
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h3 className="text-2xl font-semibold absolute bottom-4 left-6 text-white">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3 mb-5">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <ChevronRight className="text-red" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {caption && (
          <div className="border-t border-gray-100 pt-3 mt-2">
            <p className="text-right text-sm text-gray-600 italic">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 space-y-14">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-darkGray inline-block relative">
            <span className="relative z-10">Join Us</span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-red z-0"></span>
          </h2>
          <p className="text-3xl md:text-4xl max-w-4xl mx-auto font-title leading-snug text-gray-800">
            Our mission is simple:
            <br />
            <span className="text-red font-medium">
              To Love God And To Love Others.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {serviceTimes.map((service, index) => (
            <ServiceTime
              key={index}
              title={service.title}
              image={service.image}
              listItems={service.listItems}
              caption={service.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
