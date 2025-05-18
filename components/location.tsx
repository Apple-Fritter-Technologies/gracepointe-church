import Link from "next/link";

import { Mail, MapPin, Clock, ChevronRight } from "lucide-react";

export default function Location() {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl mb-4 font-title">Visit Us</h2>
        <div className="w-20 h-1 bg-red mx-auto rounded-full" />
        <p className="mt-6 text-darkGray max-w-2xl mx-auto text-lg">
          We'd love to welcome you to our church family. Join us for worship and
          fellowship.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto border border-gray-100">
        <div className="h-80 lg:h-auto lg:col-span-3 relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d752445.7952869372!2d-82.048305!3d29.019076999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7d01864765b5f%3A0x8a3a054e50ad442e!2sGracepointe%20Church%20%26%20Academy!5e1!3m2!1sen!2sus!4v1747599851588!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Location map for Gracepointe Church"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        <div className="bg-white p-8 md:p-10 flex flex-col justify-between lg:col-span-2 relative">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 font-title">
              Gracepointe Church
            </h3>

            <div className="flex items-start mb-8 group">
              <div className="mr-4 h-10 w-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-red" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                123 Faith Avenue
                <br />
                Cityville, State 12345
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="mr-4 h-10 w-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    Service Times
                  </h4>
                  <div className="space-y-1">
                    <p className="text-gray-600">
                      Sundays at{" "}
                      <span className="text-gray-800 font-medium">
                        9:00 AM & 11:00 AM
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Wednesdays at{" "}
                      <span className="text-gray-800 font-medium">7:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="mr-4 h-10 w-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                    Contact Us
                  </h4>
                  <div className="space-y-2">
                    <Link
                      href="mailto:info@gracepointe.org"
                      className="inline-flex items-center text-gray-600 hover:text-red transition-colors group"
                    >
                      <span className="group-hover:underline">
                        info@gracepointe.org
                      </span>
                    </Link>
                    <br />
                    <Link
                      href="tel:+15551234567"
                      className="inline-flex items-center text-gray-600 hover:text-red transition-colors group"
                    >
                      <span className="group-hover:underline">
                        (555) 123-4567
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=123+Faith+Avenue,+Cityville,+State+12345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-red hover:bg-red/80 text-white font-medium py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
              aria-label="Get directions to Gracepointe Church"
            >
              <MapPin className="mr-2 h-5 w-5" /> Get Directions
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
