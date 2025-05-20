"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const leaders = [
    {
      name: "Pastor James Mitchell",
      title: "Lead Pastor",
      bio: "Leading our church with wisdom and compassion for over 25 years.",
      image: "/images/hero-church.png",
    },
    {
      name: "Sarah Mitchell",
      title: "Worship Director",
      bio: "Guiding our congregation in meaningful worship experiences every week.",
      image: "/images/hero-church.png",
    },
    {
      name: "Michael Thompson",
      title: "Youth Pastor",
      bio: "Passionate about helping young people discover their purpose and faith.",
      image: "/images/hero-church.png",
    },
  ];

  const coreValues = [
    {
      title: "Grace",
      description:
        "We believe in extending God's unconditional love and forgiveness to all people, just as it has been given to us.",
      icon: "❤️",
    },
    {
      title: "Community",
      description:
        "We foster authentic relationships where people can belong before they believe and grow together in faith.",
      icon: "🤝",
    },
    {
      title: "Service",
      description:
        "We're committed to meeting needs within our church, throughout our city, and around the world.",
      icon: "🌍",
    },
  ];

  return (
    <main className="bg-background rounded-t-3xl">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-title">
              About GracePointe Church
            </h1>
            <p className="text-xl text-darkGray max-w-3xl mx-auto leading-relaxed">
              Where faith meets community. Discover our story, mission, and the
              people who make our church a home.
            </p>
          </motion.div>
          <motion.div
            className="relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/images/hero-church.png"
              alt="GracePointe Church"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold mb-2">Welcome Home</h2>
              <p className="max-w-md">A community where everyone belongs</p>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <motion.section
          className="mb-24 grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 font-title">Our Story</h2>
            <p className="text-darkGray mb-6 text-lg leading-relaxed">
              Founded in 1995, GracePointe Church began as a small gathering in
              the living room of Pastor James and Sarah Mitchell. Their vision
              was simple yet profound: create a welcoming community where people
              could experience God&apos;s grace and find purpose.
            </p>
            <p className="text-darkGray text-lg leading-relaxed">
              Over the years, we&apos;ve grown from those humble beginnings into
              a thriving spiritual family, but our core mission remains
              unchanged. Today, we continue to be a place where lives are
              transformed through authentic worship, meaningful connections, and
              compassionate service.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-church.png"
              alt="Church History"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        {/* Our Values Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10 text-center font-title">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-6 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {value.title}
                </h3>
                <p className="text-darkGray leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10 text-center font-title">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-md border-4 border-white">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.title}</p>
                <p className="text-darkGray">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Us CTA */}
        <motion.section
          className="bg-red text-white p-12 rounded-2xl text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Join Us This Sunday</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to welcome you to our church family. Experience
            uplifting worship, practical teaching, and genuine community every
            Sunday at 9:30am and 11:00am.
          </p>
          <Button variant="secondary" size="lg">
            Plan Your Visit
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutPage;
