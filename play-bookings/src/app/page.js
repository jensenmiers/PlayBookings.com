import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-between p-24">
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
        <section className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
          <h2 className="text-4xl font-bold">Discover & Book Sports Facilities with Ease</h2>
          <p className="mt-4 text-lg">Quickly Find and Book Indoor Gyms & Outdoor Fields Near You.</p>
          <p className="mt-4 text-lg">Own a Gym or Field? Earn by Listing Your Space in Minutes.</p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded">Get Early Access – Join Our List for Exclusive Updates!</button>
        </section>

        {/* Features Section */}
        <section id="features" className="p-8">
          <h3 className="text-2xl font-bold text-center features-text">Features</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-200 rounded features-text">
              <h4 className="font-bold">Effortless Booking.</h4>
              <p>Reserve Sports Spaces in Just a Few Clicks.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded features-text">
              <h4 className="font-bold">Maximize Revenue.</h4>
              <p>Rent Out Unused Sports Spaces Easily.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded features-text">
              <h4 className="font-bold">Trusted & Verified.</h4>
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
