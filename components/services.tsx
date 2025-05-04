interface ServiceCardProps {
  title: string;
  time: string;
  description: string;
}

function ServiceCard({ title, time, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-amber-600 font-medium mb-4">{time}</div>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a
        href="#contact"
        className="mt-4 text-amber-600 hover:text-amber-700 font-medium"
      >
        Learn more →
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Church Service Times
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Join us for worship, prayer, and community. All are welcome to
            experience God's presence with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Sunday Morning"
            time="9:00 AM - 10:30 AM"
            description="Contemporary worship service with children's ministry available."
          />
          <ServiceCard
            title="Sunday Morning"
            time="11:00 AM - 12:30 PM"
            description="Traditional worship service with full choir and children's ministry available."
          />
          <ServiceCard
            title="Wednesday Evening"
            time="7:00 PM - 8:30 PM"
            description="Midweek Bible study and prayer service for all ages."
          />
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Special Services</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2 text-amber-600">
                Communion Sunday
              </h4>
              <p className="text-gray-600">
                First Sunday of each month during both morning services
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-medium mb-2 text-amber-600">
                Youth Worship
              </h4>
              <p className="text-gray-600">
                Sunday evenings at 6:00 PM for grades 6-12
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
