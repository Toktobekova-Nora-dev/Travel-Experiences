"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  Mountain,
  Tent,
  Clock,
  Star,
  Check,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Shield,
  Award,
} from "lucide-react";

export default function BookingPage() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [travelers, setTravelers] = useState({ adults: 2, children: 0 });
  const [selectedDate, setSelectedDate] = useState("");
  const [addOns, setAddOns] = useState({
    horseRiding: false,
    eagleHunting: false,
    cookingClass: false,
  });
  const [step, setStep] = useState(1);

  const tours = [
    {
      id: 1,
      name: "Song-Kol Lake Adventure",
      duration: "3 Days / 2 Nights",
      difficulty: "Moderate",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80",
      highlights: ["Yurt Stay", "Horseback Riding", "Alpine Lake"],
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: "Ala-Archa National Park Trek",
      duration: "2 Days / 1 Night",
      difficulty: "Easy",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      highlights: ["Mountain Views", "Day Hikes", "Wildlife"],
      rating: 4.8,
      reviews: 94,
    },
    {
      id: 3,
      name: "Silk Road Cultural Journey",
      duration: "7 Days / 6 Nights",
      difficulty: "Easy",
      price: 890,
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      highlights: ["Historical Sites", "Local Culture", "Traditional Meals"],
      rating: 5.0,
      reviews: 156,
    },
  ];

  const addOnOptions = [
    { id: "horseRiding", name: "Extended Horse Riding", price: 75 },
    { id: "eagleHunting", name: "Eagle Hunting Demonstration", price: 120 },
    { id: "cookingClass", name: "Traditional Cooking Class", price: 45 },
  ];

  const calculateTotal = () => {
    if (!selectedTour) return 0;
    let total =
      selectedTour.price * travelers.adults +
      selectedTour.price * 0.6 * travelers.children;
    Object.keys(addOns).forEach((key) => {
      if (addOns[key]) {
        const addOn = addOnOptions.find((a) => a.id === key);
        total += addOn.price * (travelers.adults + travelers.children);
      }
    });
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598948485421-33a1655d3c18?w=1600&q=80')",
            mixBlendMode: "overlay",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Kyrgyzstan</h1>
          <p className="text-xl mb-6">Book Your Mountain Adventure Today</p>
          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Licensed Guides</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > s ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span
              className={
                step >= 1 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Select Tour
            </span>
            <span
              className={
                step >= 2 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Details
            </span>
            <span
              className={
                step >= 3 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Information
            </span>
            <span
              className={
                step >= 4 ? "text-blue-600 font-medium" : "text-gray-500"
              }
            >
              Payment
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Tour Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Choose Your Adventure
                </h2>
                <div className="grid gap-6">
                  {tours.map((tour) => (
                    <div
                      key={tour.id}
                      onClick={() => {
                        setSelectedTour(tour);
                        setStep(2);
                      }}
                      className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02] ${
                        selectedTour?.id === tour.id
                          ? "ring-4 ring-blue-500"
                          : ""
                      }`}
                    >
                      <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1 h-64 md:h-auto">
                          <img
                            src={tour.image}
                            alt={tour.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                                {tour.name}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {tour.duration}
                                </span>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    tour.difficulty === "Easy"
                                      ? "bg-green-100 text-green-700"
                                      : tour.difficulty === "Moderate"
                                      ? "bg-yellow-100 text-yellow-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {tour.difficulty}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-blue-600">
                                ${tour.price}
                              </div>
                              <div className="text-sm text-gray-500">
                                per person
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {tour.rating} ({tour.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tour.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Select This Tour
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Trip Details */}
            {step === 2 && selectedTour && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Trip Details
                </h2>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min={new Date().toISOString().split("T")[0]}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Best season: June - September for mountain tours
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adults (18+)
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setTravelers({
                            ...travelers,
                            adults: Math.max(1, travelers.adults - 1),
                          })
                        }
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-lg font-semibold">
                        {travelers.adults}
                      </span>
                      <button
                        onClick={() =>
                          setTravelers({
                            ...travelers,
                            adults: travelers.adults + 1,
                          })
                        }
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Children (0-17)
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setTravelers({
                            ...travelers,
                            children: Math.max(0, travelers.children - 1),
                          })
                        }
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-lg font-semibold">
                        {travelers.children}
                      </span>
                      <button
                        onClick={() =>
                          setTravelers({
                            ...travelers,
                            children: travelers.children + 1,
                          })
                        }
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Enhance Your Experience
                  </h3>
                  {addOnOptions.map((addOn) => (
                    <label
                      key={addOn.id}
                      className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg mb-3 cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addOns[addOn.id]}
                          onChange={(e) =>
                            setAddOns({
                              ...addOns,
                              [addOn.id]: e.target.checked,
                            })
                          }
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="font-medium text-gray-800">
                          {addOn.name}
                        </span>
                      </div>
                      <span className="font-bold text-blue-600">
                        +${addOn.price}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedDate}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Traveler Information */}
            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Traveler Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number (with country code) *
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dietary Requirements
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Any allergies, vegetarian, vegan, etc."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Any special requirements or requests..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Payment Details
                </h2>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800 font-medium">
                    🔒 Secure Payment - Your information is encrypted and safe
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600 rounded mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <span className="text-blue-600 underline">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-blue-600 underline">
                        Cancellation Policy
                      </span>
                    </span>
                  </label>
                </div>

                <div className="mb-8 bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800 mb-2">
                    💡 <strong>Travel Insurance Recommended</strong>
                  </p>
                  <p className="text-sm text-blue-700">
                    Protect your adventure with travel insurance. We can help
                    arrange coverage.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg">
                    Confirm Booking - ${calculateTotal()}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Booking Summary
              </h3>

              {selectedTour ? (
                <>
                  <div className="mb-4 pb-4 border-b">
                    <img
                      src={selectedTour.image}
                      alt={selectedTour.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-bold text-gray-800">
                      {selectedTour.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {selectedTour.duration}
                    </p>
                  </div>

                  {selectedDate && (
                    <div className="mb-4 pb-4 border-b">
                      <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(selectedDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users className="w-4 h-4" />
                        <span>
                          {travelers.adults} Adult
                          {travelers.adults > 1 ? "s" : ""}
                          {travelers.children > 0
                            ? `, ${travelers.children} Child${
                                travelers.children > 1 ? "ren" : ""
                              }`
                            : ""}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        Tour ({travelers.adults} adults)
                      </span>
                      <span className="font-semibold">
                        ${selectedTour.price * travelers.adults}
                      </span>
                    </div>
                    {travelers.children > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Tour ({travelers.children} children)
                        </span>
                        <span className="font-semibold">
                          $
                          {Math.round(
                            selectedTour.price * 0.6 * travelers.children
                          )}
                        </span>
                      </div>
                    )}
                    {Object.keys(addOns).map((key) => {
                      if (addOns[key]) {
                        const addOn = addOnOptions.find((a) => a.id === key);
                        return (
                          <div
                            key={key}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-gray-600">{addOn.name}</span>
                            <span className="font-semibold">
                              +$
                              {addOn.price *
                                (travelers.adults + travelers.children)}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <div className=" pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-gray-800">
                        Total
                      </span>
                      <span className="text-3xl font-bold text-blue-600">
                        ${calculateTotal()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      All taxes and fees included
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      What's Included:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Professional English-speaking guide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>All accommodation & meals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Transportation & transfers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>National park entrance fees</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Mountain className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p>Select a tour to see pricing</p>
                </div>
              )}

              <div className="border-t pt-4">
                <p className="text-xs text-gray-600 mb-3 flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Free cancellation up to 14 days before departure</span>
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span>+996 555 123 456</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span>info@kyrgyztravel.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-3">Why Book With Us?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Local Experts</p>
                    <p className="text-blue-100 text-xs">
                      Native guides with deep knowledge
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Best Price Guarantee</p>
                    <p className="text-blue-100 text-xs">
                      Find it cheaper? We'll match it
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">24/7 Support</p>
                    <p className="text-blue-100 text-xs">
                      Always here when you need us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">Questions about your booking?</p>
          <p className="text-gray-400 text-sm">
            We'll respond within 24 hours • Email: info@kyrgyztravel.com •
            WhatsApp: +996 555 123 456
          </p>
        </div>
      </div>
    </div>
  );
}
