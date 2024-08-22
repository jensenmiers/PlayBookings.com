import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <h2 className="text-4xl font-bold">Welcome to Play Bookings</h2>
          <p className="mt-4 text-lg">Rent public basketball gyms easily.</p>
          <p className="mt-4 text-lg">Discover and book indoor courts at your convenience.</p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded">Sign up for updates and early access</button>
        </section>

        {/* Features Section */}
        <section id="features" className="p-8">
          <h3 className="text-2xl font-bold text-center">Features</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-gray-200 rounded">
              <h4 className="font-bold">Easy booking</h4>
              <p>Seamless booking experience for gym rentals.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded">
              <h4 className="font-bold">Affordable rates</h4>
              <p>Competitive pricing for private resevations.</p>
            </div>
            <div className="p-4 bg-gray-200 rounded">
              <h4 className="font-bold">Secure payments</h4>
              <p>Safe and reliable payments using Stripe.</p>
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