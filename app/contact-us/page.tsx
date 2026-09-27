"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to an API route, or a service like Formspree /
    // Resend, since this is a static form with no backend yet.
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <section className="py-12 px-6 max-w-2xl mx-auto">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">Contact Us</h1>

        <div className="flex justify-center mb-8">
          <img
            src="/91f7f1c9-b94e-4867-a9f0-f74d01968341_orig.jpeg"
            alt="Contact Firebrand International Gospel Missions"
            className="w-full max-w-md object-cover rounded-md"
          />
        </div>

        <p className="mb-10 text-sm sm:text-base">
          Please fill out the form below. If you would like to submit a
          question or prayer request, please do so{" "}
          <a href="/prayer-requests" className="text-red-700 underline">
            here
          </a>
          .
        </p>

        {submitted ? (
          <p className="rounded-md bg-green-50 px-4 py-3 text-green-800">
            Thank you for reaching out. We&apos;ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1 block font-medium text-gray-700">
                  First Name <span className="text-red-700">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1 block font-medium text-gray-700">
                  Last Name <span className="text-red-700">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-medium text-gray-700">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            </div>

            <div>
              <label htmlFor="comment" className="mb-1 block font-medium text-gray-700">
                Comment <span className="text-red-700">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={5}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            </div>

            <label className="flex items-start gap-2 text-gray-700">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
              />
              I agree to receiving marketing and promotional materials
            </label>

            <button
              type="submit"
              className="rounded-md bg-red-700 px-6 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-red-800"
            >
              Submit
            </button>
          </form>
        )}
      </section>
    </main>
  );
}