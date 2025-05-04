export default function Location() {
  return (
    <section id="location" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We'd love to welcome you to our church. Here's how you can find us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                Gracepointe Church
              </h3>
              <p className="text-gray-600 mb-6">
                123 Faith Avenue
                <br />
                Cityville, State 12345
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Service Times</h4>
                  <p className="text-gray-600">Sundays at 9:00 AM & 11:00 AM</p>
                  <p className="text-gray-600">Wednesdays at 7:00 PM</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Contact</h4>
                  <p className="text-gray-600">info@gracepointe.org</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-full min-h-64">
            {/* Placeholder for map - would be replaced with actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/api/placeholder/800/600"
                alt="Map to Gracepointe Church"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
