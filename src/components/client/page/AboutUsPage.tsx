import React from "react";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="flex items-center justify-center h-full px-4 mx-auto text-center text-white max-w-7xl">
          <div>
            <h1 className="mb-4 text-5xl font-bold">About Sayakat</h1>
            <p className="text-xl">
              Your trusted partner for Kyrgyzstan adventures
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl px-4 py-16 mx-auto">
        <div className="p-8 mb-8 bg-white shadow-lg rounded-2xl">
          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            Sayakat is dedicated to providing authentic, sustainable travel
            experiences that showcase the natural beauty and rich culture of
            Kyrgyzstan.
          </p>
          <p className="leading-relaxed text-gray-600">
            With over 10 years of experience, we've helped thousands of
            travelers discover the magic of Central Asia's mountains, lakes, and
            nomadic traditions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 text-center bg-white shadow-lg rounded-xl">
            <div className="mb-2 text-4xl font-bold text-emerald-600">
              5000+
            </div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div className="p-6 text-center bg-white shadow-lg rounded-xl">
            <div className="mb-2 text-4xl font-bold text-emerald-600">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="p-6 text-center bg-white shadow-lg rounded-xl">
            <div className="mb-2 text-4xl font-bold text-emerald-600">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
