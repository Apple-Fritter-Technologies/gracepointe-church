interface BeliefCardProps {
  title: string;
  description: string;
  icon: string;
}

function BeliefCard({ title, description, icon }: BeliefCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Beliefs() {
  return (
    <section id="beliefs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Beliefs & Practices
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            At Gracepointe, we are rooted in scripture and guided by faith. Our
            beliefs shape who we are and how we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BeliefCard
            title="Scripture"
            description="We believe the Bible is the inspired Word of God, the authoritative and trustworthy rule for faith and practice."
            icon="📖"
          />
          <BeliefCard
            title="Trinity"
            description="We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit."
            icon="✝️"
          />
          <BeliefCard
            title="Salvation"
            description="We believe salvation is by grace through faith in Jesus Christ alone, not by works or human effort."
            icon="🙏"
          />
          <BeliefCard
            title="Holy Spirit"
            description="We believe in the present ministry of the Holy Spirit, whose indwelling enables Christians to live a godly life."
            icon="🕊️"
          />
          <BeliefCard
            title="Community"
            description="We believe in the spiritual unity of believers in our Lord Jesus Christ, across all nations, races, and backgrounds."
            icon="🌍"
          />
          <BeliefCard
            title="Mission"
            description="We believe we are called to share the good news of Jesus Christ and to serve others with love and compassion."
            icon="❤️"
          />
        </div>

        <div className="mt-16 bg-gray-50 p-6 md:p-10 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium mb-3 text-amber-600">
                Your First Visit
              </h4>
              <p className="text-gray-600">
                When you arrive, our welcome team will greet you and help you
                find your way. Our services blend traditional and contemporary
                elements, creating a meaningful worship experience for all ages.
                Children's programs are available during service times.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3 text-amber-600">
                Dress & Atmosphere
              </h4>
              <p className="text-gray-600">
                Come as you are! You'll find people dressed in everything from
                casual to business attire. Our atmosphere is warm and welcoming,
                focused on authentic worship rather than appearances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
