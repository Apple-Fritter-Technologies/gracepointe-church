"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquare,
  Check,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { churchLocation } from "@/lib/data";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);

    // In real implementation, you'd send data to your backend:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // if (response.ok) {
    //   setSubmitSuccess(true);
    //   setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    // }
  };

  return (
    <main className="bg-background rounded-t-3xl">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-title">
              Contact Us
            </h1>
            <p className="text-xl text-darkGray max-w-3xl mx-auto leading-relaxed">
              We're here to help, answer questions, and connect with you. Reach
              out to us anytime.
            </p>
          </div>
          <motion.div
            className="relative h-[40vh] rounded-2xl overflow-hidden shadow-2xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/images/hero-church.png"
              alt="GracePointe Church Contact"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 text-white">
              <div className="flex flex-wrap gap-8 justify-center md:justify-between">
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-red flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Call Us</p>
                    <Link
                      href="tel:+13522459444"
                      className="text-lg font-medium hover:underline"
                    >
                      (352) 245-9444
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-green flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Email Us</p>
                    <Link
                      href="mailto:info@gracepointe.org"
                      className="text-lg font-medium hover:underline"
                    >
                      info@gracepointe.org
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 rounded-full bg-blue flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">Office Hours</p>
                    <p className="text-lg font-medium">Mon-Fri: 9am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Form and Map Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form Column */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 font-title">
                  Send Us a Message
                </h2>
                <p className="text-darkGray">
                  Fill out the form and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green transition-all bg-white"
                    required
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="events">Events</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green transition-all"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full py-6 text-lg flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : submitSuccess ? (
                      <>
                        Message Sent Successfully{" "}
                        <Check className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Map and Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px] mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d752445.7952869372!2d-82.048305!3d29.019076999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7d01864765b5f%3A0x8a3a054e50ad442e!2sGracepointe%20Church%20%26%20Academy!5e1!3m2!1sen!2sus!4v1747599851588!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Location map for Gracepointe Church"
                  className="w-full h-full"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl flex-1">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Address
                      </h4>
                      <p className="text-darkGray">
                        6185 SE 140th Street
                        <br />
                        Summerfield, FL 34491
                      </p>
                      <Link
                        href={churchLocation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-red hover:text-red/80 text-sm transition-colors group"
                      >
                        <span className="group-hover:underline">
                          Get Directions
                        </span>
                        <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Service Times
                      </h4>
                      <p className="text-darkGray">
                        Sundays at{" "}
                        <span className="font-medium">9:00 AM & 11:00 AM</span>
                        <br />
                        Wednesdays at{" "}
                        <span className="font-medium">7:00 PM</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        Follow Us
                      </h4>
                      <div className="flex gap-3 mt-2">
                        <Link
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-5 w-5 text-gray-700" />
                        </Link>
                        <Link
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-5 w-5 text-gray-700" />
                        </Link>
                        <Link
                          href="https://youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                          aria-label="YouTube"
                        >
                          <Twitter className="h-5 w-5 text-gray-700" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-title">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-darkGray max-w-3xl mx-auto">
              Find answers to our most commonly asked questions. Can't find what
              you're looking for? Reach out to us directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">
                What time are your services?
              </h3>
              <p className="text-darkGray">
                Our Sunday services are at 9:00 AM and 11:00 AM. We also have
                Wednesday evening services at 7:00 PM.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">
                How do I become a member?
              </h3>
              <p className="text-darkGray">
                We offer membership classes quarterly. Check our events calendar
                or contact the church office for the next available class.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">
                Do you have programs for children?
              </h3>
              <p className="text-darkGray">
                Yes! We have age-appropriate classes and activities for children
                from nursery through high school during our Sunday services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-3">
                How can I get involved in serving?
              </h3>
              <p className="text-darkGray">
                We have many opportunities to serve in various ministries. Fill
                out our volunteer form and someone will contact you about ways
                to get plugged in.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="px-8">
              View All FAQs
            </Button>
          </div>
        </motion.section>

        {/* Ministry Team CTA */}
        <motion.section
          className="bg-gradient-to-r from-red to-red/80 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need to Speak with Someone Directly?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Our ministry team is available to talk, pray with you, or provide
              spiritual guidance whenever you need it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-red hover:bg-white/90"
              >
                Schedule a Meeting
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white/30 hover:bg-white/10"
              >
                Prayer Request
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default ContactPage;
