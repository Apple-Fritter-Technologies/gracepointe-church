interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
}

function EventCard({ title, date, time, description }: EventCardProps) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-amber-500 font-medium mb-1">{date}</div>
      <div className="text-gray-500 text-sm mb-3">{time}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#contact"
        className="text-amber-600 hover:text-amber-700 font-medium"
      >
        Learn more →
      </a>
    </div>
  );
}

export default function Events() {
  return (
    <section
      id="events"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Join us for these special events and grow in faith and fellowship
            with our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title="Prayer & Worship Night"
            date="March 15, 2025"
            time="7:00 PM"
            description="An evening of extended prayer and worship, seeking God's presence together."
          />
          <EventCard
            title="Spring Community Festival"
            date="April 5, 2025"
            time="11:00 AM - 3:00 PM"
            description="Family-friendly event with food, games, and activities for the whole community."
          />
          <EventCard
            title="Marriage Enrichment Weekend"
            date="April 25-26, 2025"
            time="Friday 7PM - Saturday 4PM"
            description="A special retreat for couples to strengthen their relationship through God's design for marriage."
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
