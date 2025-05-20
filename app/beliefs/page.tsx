"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Beliefs from "@/components/beliefs";
import { Download, Book } from "lucide-react";

const BeliefsPage = () => {
  return (
    <main className="bg-background rounded-t-3xl">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-title">
              What We Believe
            </h1>
            <p className="text-xl text-darkGray max-w-3xl mx-auto leading-relaxed">
              Our faith is rooted in Scripture and centered on Jesus Christ.
              Discover the core beliefs that guide our community and shape our
              mission.
            </p>
          </motion.div>
          <motion.div
            className="relative h-[50vh] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/images/hero-church.png"
              alt="GracePointe Church Beliefs"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold mb-2">Faith That Matters</h2>
              <p className="max-w-md">Timeless truths for today&apos;s world</p>
            </div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <motion.section
          className="mb-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 font-title">Our Foundation</h2>
          <p className="text-darkGray text-lg mb-8 leading-relaxed">
            At GracePointe Church, we believe that a clear understanding of what
            we believe is essential for spiritual growth. Our beliefs are rooted
            in the Bible and reflect the historic Christian faith that has
            sustained believers through centuries. These aren&apos;t simply
            doctrinal statements—they&apos;re the truths we live by every day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2">
              <Book className="w-4 h-4" />
              Read Our Statement of Faith
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </motion.section>

        {/* Main Beliefs Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Beliefs />
        </motion.section>

        {/* Scripture Foundation */}
        <motion.section
          className="mb-20 grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/images/hero-church.png"
              alt="Scripture Study"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 font-title">
              Rooted in Scripture
            </h2>
            <p className="text-darkGray mb-6 text-lg leading-relaxed">
              We believe the Bible is God&apos;s inspired Word—our ultimate
              authority for faith and practice. Scripture informs every aspect
              of our church life, from our worship services to our community
              outreach.
            </p>
            <p className="text-darkGray text-lg leading-relaxed">
              Our pastoral team is committed to teaching the whole counsel of
              God&apos;s Word in a way that&apos;s relevant to daily life. We
              encourage every member to engage with Scripture regularly through
              personal study and group discussions.
            </p>
          </div>
        </motion.section>

        {/* Questions Section */}
        <motion.section
          className="mb-24 bg-green/20 p-10 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 font-title">
              Have Questions?
            </h2>
            <p className="text-darkGray text-lg max-w-2xl mx-auto">
              We welcome your questions about our beliefs and how they shape our
              church community. Faith is a journey, and we&apos;re here to walk
              alongside you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md flex-1 max-w-md border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Connect with a Pastor
              </h3>
              <p className="text-darkGray mb-6">
                Schedule a conversation with one of our pastors to discuss
                questions about faith and belief in a personal setting.
              </p>
              <Button variant="outline">Request Meeting</Button>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md flex-1 max-w-md border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Join a Study Group
              </h3>
              <p className="text-darkGray mb-6">
                Our small groups provide a supportive environment to explore
                beliefs and grow in your understanding of Scripture.
              </p>
              <Button>Find a Group</Button>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="bg-red text-white p-12 rounded-2xl text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Experience Faith in Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us this Sunday to explore these beliefs in a welcoming
            environment. At GracePointe, faith isn&apos;t just something we
            believe—it&apos;s something we live together.
          </p>
          <Button variant="secondary" size="lg">
            Plan Your Visit
          </Button>
        </motion.section>
      </div>
    </main>
  );
};

export default BeliefsPage;
