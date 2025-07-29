"use client";

import { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950 shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-indigo-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h18v18H3V3z" />
            </svg>
            <span className="text-xl font-bold text-indigo-400">Vetra</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-sm text-gray-300">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#integrations" className="hover:text-white">Integrations</a></li>
            <li><a href="#cta" className="hover:text-white">Try Now</a></li>
            <li><a href="#docs" className="hover:text-white">Docs</a></li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              strokeWidth="2" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-300">
            <li><a href="#features" className="block hover:text-white">Features</a></li>
            <li><a href="#integrations" className="block hover:text-white">Integrations</a></li>
            <li><a href="#cta" className="block hover:text-white">Try Now</a></li>
            <li><a href="#docs" className="block hover:text-white">Docs</a></li>
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <main className="bg-gray-900 text-white">
        {/* Hero Section with pt to offset nav */}
        <section className="text-center pt-24 pb-24 px-6 bg-gradient-to-br from-indigo-800 to-indigo-900">
          <h1 className="text-5xl font-bold text-indigo-300 mb-4">Meet Vetra</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            The future of infrastructure automation. Streamlined, scalable, and seriously powerful.
          </p>
          <div className="space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 py-2 px-6 rounded text-white font-semibold shadow">
              Get Started
            </button>
            <button className="border border-indigo-400 hover:bg-indigo-800 text-indigo-300 py-2 px-6 rounded font-semibold">
              View Docs
            </button>
          </div>
        </section>

        {/* Diagonal Divider: Bottom of Hero */}
        <div className="relative">
          <svg className="absolute top-0 w-full h-16 text-gray-950" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,100 100,0 100,100" />
          </svg>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-gray-950">
          <h2 className="text-3xl font-bold text-center text-indigo-400 mb-12">🚀 Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-2">Visual Playbook Editor</h3>
              <p>Create, manage, and run automation workflows with a drag-and-drop UI.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Role-Based Access Control</h3>
              <p>Granular permissions for safe and scalable team collaboration.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Job Monitoring</h3>
              <p>Track and audit tasks with detailed logs and live status updates.</p>
            </div>
          </div>
        </section>

        {/* Diagonal Divider: Bottom of Features */}
        <div className="relative">
          <svg className="absolute top-0 w-full h-16 text-gray-900" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,0 100,100 0,100" />
          </svg>
        </div>

        {/* Integrations Section */}
        <section id="integrations" className="py-20 px-6 bg-gray-900">
          <h2 className="text-3xl font-bold text-center text-indigo-400 mb-12">🔗 Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold mb-2">GitHub & GitLab</h3>
              <p>Version-controlled workflows with seamless CI/CD hooks.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Cloud Providers</h3>
              <p>Deploy across AWS, Azure, GCP with native provider modules.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Slack & Teams</h3>
              <p>Send automation alerts directly to your favorite chat platform.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="py-16 text-center bg-gradient-to-br from-indigo-900 to-gray-900">
          <h2 className="text-3xl font-bold text-indigo-300 mb-4">Ready to make DevOps delightful?</h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded font-semibold shadow">
            Try Vetra Now
          </button>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-500 text-center py-6">
          © {new Date().getFullYear()} Vetra Inc. Built with purpose.
        </footer>

        {/* Keep rest of your sections unchanged */}
        {/* Diagonal Divider, Features, Integrations, CTA, Footer… */}
      </main>
    </>
  );
}
