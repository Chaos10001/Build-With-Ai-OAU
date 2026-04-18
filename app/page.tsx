"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-serif">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-red-400 animate-wiggle">
                Khaos
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-red-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-400 transition-colors animate-wiggle">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className={`relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black ${visibleSections.has("home") ? "animate-bounce-in" : ""}`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 text-center md:text-left mb-8 md:mb-0 ${visibleSections.has("home") ? "animate-fade-in" : ""}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Elevate Your Edge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-lg">
              Where modern gentlemen sharpen their style and command confidence
              in a sanctuary of sophistication.
            </p>
            <button className="bg-red-500 text-gray-900 px-8 py-4 text-lg font-semibold rounded-md hover:bg-red-400 hover:scale-105 transition-all duration-300 shadow-lg animate-wiggle">
              Book Now
            </button>
          </div>
          <div
            className={`md:w-1/2 ${visibleSections.has("home") ? "animate-slide-in-right" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Sharp fade haircut"
              width={600}
              height={800}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className={`py-20 px-4 bg-gray-800 ${visibleSections.has("services") ? "animate-bounce-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-red-400">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-in">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Signature Cut
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Precision-crafted haircuts tailored to accentuate your features
                and reflect your bold personality. Every strand matters in our
                pursuit of perfection.
              </p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-in">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Beard Grooming
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Expert shaping and maintenance for the modern gentleman.
                Transform your beard into a statement of sophistication and
                strength.
              </p>
            </div>
            <div className="text-center bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-in">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Hot Towel Shave
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Indulge in the ultimate relaxation with our traditional hot
                towel shave. Smooth, close, and rejuvenating – the pinnacle of
                masculine grooming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section
        id="experience"
        className={`py-20 px-4 bg-gray-900 ${visibleSections.has("experience") ? "animate-fade-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div
            className={`md:w-1/2 mb-8 md:mb-0 md:pr-12 ${visibleSections.has("experience") ? "animate-slide-in-left" : ""}`}
          >
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
              alt="Vintage barber chair"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div
            className={`md:w-1/2 ${visibleSections.has("experience") ? "animate-slide-in-right" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-4xl font-bold mb-8 text-red-400">
              The Experience
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Step into a sanctuary of sophistication where every detail is
              curated for the discerning gentleman. Sink into plush leather
              chairs, sip complimentary craft beverages, and let our curated
              playlists of modern beats and classic tunes set the tone.
            </p>
            <p className="text-lg text-gray-400">
              At Khaos, grooming isn't just a service – it's an elevated ritual
              that sharpens your edge and refines your presence.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        id="testimonials"
        className={`py-20 px-4 bg-gray-800 ${visibleSections.has("testimonials") ? "animate-bounce-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-red-400">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-in">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "Khaos doesn't just cut hair – they craft confidence. My new
                look has turned heads and boosted my game."
              </p>
              <p className="font-semibold text-red-400">- Alex R.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-in">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "The hot towel shave is pure luxury. I leave feeling like a
                million bucks every time."
              </p>
              <p className="font-semibold text-red-400">- Marcus T.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-in">
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                "Finally found a barber who gets the modern gentleman aesthetic.
                Sharp, sophisticated, and spot-on."
              </p>
              <p className="font-semibold text-red-400">- Jordan K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className={`py-12 px-4 bg-gray-900 border-t border-gray-800 ${visibleSections.has("contact") ? "animate-fade-in" : ""}`}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Contact</h3>
            <p className="text-gray-300">
              123 Style Street
              <br />
              Modern City, MC 12345
            </p>
            <p className="text-gray-300 mt-2">(555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-400">Hours</h3>
            <p className="text-gray-300">Mon-Fri: 9AM - 7PM</p>
            <p className="text-gray-300">Sat: 8AM - 5PM</p>
            <p className="text-gray-300">Sun: Closed</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          <p>&copy; 2024 Khaos Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
