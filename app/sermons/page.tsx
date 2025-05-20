"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  ChevronDown,
  Share2,
  Headphones,
} from "lucide-react";
import Link from "next/link";

// Mock sermon data - replace with actual data fetching
const sermons = [
  {
    id: 1,
    title: "Finding Peace in Troubled Times",
    speaker: "Pastor Michael Johnson",
    date: "May 12, 2025",
    passage: "Matthew 11:28-30",
    image: "/images/hero-church.png", // Replace with actual sermon image
    duration: "38 min",
    description:
      "Exploring how faith guides us through life's most challenging moments.",
  },
  {
    id: 2,
    title: "The Power of Gratitude",
    speaker: "Pastor Sarah Williams",
    date: "May 5, 2025",
    passage: "Philippians 4:4-7",
    image: "/images/hero-church.png", // Replace with actual sermon image
    duration: "42 min",
    description:
      "Discovering how thankfulness can transform our perspective and bring joy.",
  },
  {
    id: 3,
    title: "Building a Life of Purpose",
    speaker: "Pastor Michael Johnson",
    date: "April 28, 2025",
    passage: "Ephesians 2:10",
    image: "/images/hero-church.png", // Replace with actual sermon image
    duration: "45 min",
    description:
      "Understanding God's unique design and purpose for each of us.",
  },
  {
    id: 4,
    title: "Faith That Moves Mountains",
    speaker: "Pastor Rebecca Davis",
    date: "April 21, 2025",
    passage: "Mark 11:22-24",
    image: "/images/hero-church.png", // Replace with actual sermon image
    duration: "39 min",
    description:
      "Exploring the transformative power of faith in our daily lives.",
  },
];

// Sermon topics for filtering
const topics = [
  "Faith",
  "Hope",
  "Love",
  "Prayer",
  "Family",
  "Relationships",
  "Purpose",
  "Healing",
  "Wisdom",
  "Grace",
];

// Scripture categories for filtering
const scriptures = [
  "New Testament",
  "Old Testament",
  "Gospels",
  "Epistles",
  "Psalms",
  "Proverbs",
];

const SermonsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <main className="bg-background rounded-t-3xl">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-title">
              Sermons
            </h1>
            <p className="text-xl text-darkGray max-w-3xl mx-auto leading-relaxed">
              Explore messages that inspire, challenge and equip you to live out
              your faith every day.
            </p>
          </div>
          <motion.div
            className="relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/images/hero-church.png"
              alt="GracePointe Church Sermons"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white max-w-lg">
              <span className="bg-green text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                Latest Series
              </span>
              <h2 className="text-4xl font-bold mb-3">Journey Through Faith</h2>
              <p className="mb-6">
                A six-week exploration of how faith shapes our identity and
                purpose in today&apos;s world.
              </p>
              <div className="flex space-x-4">
                <Button>Watch Now</Button>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30"
                >
                  View Series
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
            <div className="relative w-full md:w-1/3">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto flex-wrap md:flex-nowrap">
              <div className="relative group w-full md:w-auto">
                <button
                  className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-gray-200 w-full md:w-auto ${
                    activeFilter === "topic" ? "bg-green/5 border-green/30" : ""
                  }`}
                  onClick={() =>
                    setActiveFilter(activeFilter === "topic" ? null : "topic")
                  }
                >
                  <span>Topics</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeFilter === "topic" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFilter === "topic" && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3 z-10 w-full md:w-64">
                    <div className="grid grid-cols-2 gap-2">
                      {topics.map((topic) => (
                        <button
                          key={topic}
                          className="px-3 py-2 text-left hover:bg-gray-50 rounded-lg text-sm"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group w-full md:w-auto">
                <button
                  className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-gray-200 w-full md:w-auto ${
                    activeFilter === "scripture"
                      ? "bg-green/5 border-green/30"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveFilter(
                      activeFilter === "scripture" ? null : "scripture"
                    )
                  }
                >
                  <span>Scripture</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeFilter === "scripture" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFilter === "scripture" && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3 z-10 w-full md:w-64">
                    <div className="flex flex-col gap-2">
                      {scriptures.map((scripture) => (
                        <button
                          key={scripture}
                          className="px-3 py-2 text-left hover:bg-gray-50 rounded-lg text-sm"
                        >
                          {scripture}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative group w-full md:w-auto">
                <button
                  className={`flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-gray-200 w-full md:w-auto ${
                    activeFilter === "date" ? "bg-green/5 border-green/30" : ""
                  }`}
                  onClick={() =>
                    setActiveFilter(activeFilter === "date" ? null : "date")
                  }
                >
                  <span>Date</span>
                  <Calendar size={16} />
                </button>
                {activeFilter === "date" && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3 z-10 w-full md:w-64">
                    <div className="flex flex-col gap-2">
                      <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-lg text-sm">
                        Last Month
                      </button>
                      <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-lg text-sm">
                        Last 3 Months
                      </button>
                      <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-lg text-sm">
                        Last Year
                      </button>
                      <button className="px-3 py-2 text-left hover:bg-gray-50 rounded-lg text-sm">
                        Custom Range
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Featured Series */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 font-title">
            Featured Series
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image
                    src="/images/hero-church.png"
                    alt={`Series ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">{`${
                      4 + item
                    } episodes`}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Finding Your Purpose
                  </h3>
                  <p className="text-darkGray text-sm mb-4">
                    Discovering God&apos;s unique calling for your life and how
                    to walk in it daily.
                  </p>
                  <Link href="/sermons/series/finding-your-purpose">
                    <Button variant="outline" size="sm">
                      View Series
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Recent Sermons */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 font-title">Recent Sermons</h2>
          <div className="grid gap-8">
            {sermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                  <Image
                    src={sermon.image}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 md:bg-black/30 hover:bg-black/10 transition-all flex items-center justify-center">
                    <Button className="rounded-full w-14 h-14 p-0 flex items-center justify-center">
                      <span className="sr-only">Play</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">{sermon.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-sm text-gray-500">
                      {sermon.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{sermon.title}</h3>
                  <p className="text-primary font-medium mb-1">
                    {sermon.speaker}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{sermon.passage}</p>
                  <p className="text-darkGray mb-6 flex-grow">
                    {sermon.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button>Watch Now</Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Headphones size={16} />
                      Listen
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" className="min-w-[180px]">
              Load More
            </Button>
          </div>
        </section>

        {/* Subscribe Section */}
        <motion.section
          className="bg-red text-white p-12 rounded-2xl text-center shadow-xl mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Never Miss a Message</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our podcast and receive new sermons directly on your
            favorite podcast platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 18.2C9.5 18.2 7.29 16.92 6 14.98C6.03 12.99 10 11.9 12 11.9C13.99 11.9 17.97 12.99 18 14.98C16.71 16.92 14.5 18.2 12 18.2Z"
                  fill="currentColor"
                />
              </svg>
              Apple Podcasts
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 18.2C9.5 18.2 7.29 16.92 6 14.98C6.03 12.99 10 11.9 12 11.9C13.99 11.9 17.97 12.99 18 14.98C16.71 16.92 14.5 18.2 12 18.2Z"
                  fill="currentColor"
                />
              </svg>
              Spotify
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM12 18.2C9.5 18.2 7.29 16.92 6 14.98C6.03 12.99 10 11.9 12 11.9C13.99 11.9 17.97 12.99 18 14.98C16.71 16.92 14.5 18.2 12 18.2Z"
                  fill="currentColor"
                />
              </svg>
              Google Podcasts
            </Button>
          </div>
        </motion.section>

        {/* Resources Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 font-title">
            Study Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-green/10 p-8 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Sermon Notes
              </h3>
              <p className="text-darkGray mb-6">
                Download sermon notes to follow along and deepen your
                understanding of each message.
              </p>
              <Button variant="outline">Browse Notes</Button>
            </motion.div>
            <motion.div
              className="bg-red/10 p-8 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Small Group Guides
              </h3>
              <p className="text-darkGray mb-6">
                Discussion guides designed to help your small group engage with
                sermon topics.
              </p>
              <Button variant="outline">Get Study Guides</Button>
            </motion.div>
            <motion.div
              className="bg-blue/10 p-8 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Scripture References
              </h3>
              <p className="text-darkGray mb-6">
                Explore the Bible passages referenced in our sermons with
                helpful commentary.
              </p>
              <Button variant="outline">View Scripture</Button>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Experience the Message in Person
          </h2>
          <p className="text-xl text-darkGray mb-8 leading-relaxed">
            Join us this Sunday for worship and a life-changing message.
            We&apos;d love to welcome you to our church family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Plan Your Visit</Button>
            <Button variant="outline" size="lg">
              Service Times
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default SermonsPage;
