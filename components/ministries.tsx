interface MinistryCardProps {
  title: string;
  description: string;
  items: string[];
}

function MinistryCard({ title, description, items }: MinistryCardProps) {
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-lg h-full">
      <h3 className="text-xl font-semibold mb-3 text-amber-600">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-amber-500 mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Ministries() {
  return (
    <section id="ministries" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Ministries
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Through our various ministries, we strive to realize our purpose,
            recognize true community, and reach the world with God's love.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <MinistryCard
            title="Realizing Our Purpose"
            description="Discover your God-given gifts and purpose through our discipleship programs, Bible studies, and spiritual growth opportunities."
            items={[
              "Adult Bible Studies",
              "New Believers Classes",
              "Discipleship Groups",
              "Personal Growth Workshops",
            ]}
          />
          <MinistryCard
            title="Recognizing True Community"
            description="Experience authentic Christian community through fellowship, care groups, and service opportunities within our church family."
            items={[
              "Small Groups",
              "Men's & Women's Ministries",
              "Senior Adult Fellowship",
              "Marriage & Family Support",
            ]}
          />
          <MinistryCard
            title="Striving To Reach The World"
            description="Join us in sharing God's love locally and globally through outreach, missions, and community service initiatives."
            items={[
              "Local Outreach Programs",
              "Global Mission Partnerships",
              "Homeless Ministry",
              "Disaster Relief Teams",
            ]}
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">
                Children's Ministry
              </h3>
              <p className="text-gray-700 mb-6">
                Our children's ministry provides a safe, fun environment where
                kids can learn about God's love through age-appropriate lessons,
                activities, and worship.
              </p>
              <a
                href="#contact"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Learn more about our children's programs →
              </a>
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-100 rounded-full -mb-12 -mr-12 opacity-70"></div>
          </div>

          <div className="bg-amber-50 p-8 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Youth Ministry</h3>
              <p className="text-gray-700 mb-6">
                Our youth ministry engages teens in grades 6-12 with relevant
                teaching, worship, and activities that help them build a strong
                foundation of faith.
              </p>
              <a
                href="#contact"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Learn more about our youth programs →
              </a>
            </div>
            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-100 rounded-full -mb-12 -mr-12 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
