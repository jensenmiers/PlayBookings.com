"use client";

// import Image from "next/image";
// import Head from "next/head";
import React, {useState} from "react";

export default function Home() {

  // state to hold the email input variable
  const [email, setEmail] = useState("");

  // event handler for input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleGetDemoClick = async (event) => {
    // ADD THE LOGIC TO SUBMIT THE EMAIL TO MAILCHIMP
    event.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email}),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Email subscribed successfully!');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      alert('An unexpected error occured.');
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        {/* Header */}
        <header className="flex justify-between p-4 bg-gray-800 text-white">
          <h1 className="text-lg font-bold">Play Bookings</h1>
          <nav>
            <a href="#features" className="mx-2">Features</a>
            {/* <a href="#testimonials" className="mx-2">Testimonials</a> */}
            <a href="#contact" className="mx-2">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        {/* <section className="flex flex-col items-center justify-center h-[50vh] bg-blue-600 text-white"> */}
        <section className="flex flex-col items-center justify-center min-h-[50vh] bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-4xl font-bold">Discover & Book Sports Facilities with Ease</h2> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Discover & Book Sports Facilities with Ease.
          </h2>
          {/* <p className="mt-4 text-lg">Quickly Find and Book Indoor Gyms & Outdoor Fields Near You.</p> */}
          <p className="mt-4 text-base sm:text-lg text-center">
            Quickly Find and Book Indoor Gyms & Outdoor Fields Near You.
          </p>
          {/* <p className="mt-4 text-lg">Own a Gym or Field? Earn by Listing Your Space in Minutes.</p> */}
          <p className="mt-4 text-base sm:text-lg text-center">
            Own a Gym, Field, or Sports Facility? Earn by Listing Your Space in Minutes.
          </p>
          {/* <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded">Get Early Access – Join Our List for Exclusive Updates!</button> */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2 w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded text-sm sm:text-base w-full text-black"
              value={email} // binding the input value to the state
              onChange={handleEmailChange} // add the event listener for text
            />
            <button
              className="px-4 sm:px-6 py-2 bg-yellow-500 text-black font-semibold rounded text-sm sm:text-base whitespace-nowrap"
              onClick={handleGetDemoClick} // add the event handler for submitting the buttton
            >
              Get Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="p-4 sm:p-8">
          <h3 className="text-2xl sm:text-2xl font-bold text-center text-gray-800 dark:text-white">Features</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="p-4 bg-gray-200 rounded features-text">
              <h4 className="font-bold text-lg">Effortless Booking.</h4>
              <p>Reserve Spaces in Just a Few Clicks.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded features-text">
              <h4 className="font-bold text-lg">Maximize Revenue.</h4>
              <p>Rent Out Unused Sports Spaces Easily.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded features-text">
              <h4 className="font-bold text-lg">Trusted & Verified.</h4>
              <p>Only High-Quality, Reliable Venues.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Play Bookings LLC. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}
