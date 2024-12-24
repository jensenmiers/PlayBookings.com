import React, {useState} from "react";
import RootLayout from './layout'
import { toast } from 'react-toastify';


export default function Home() {

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // event handler for input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  // event handler for button click
  const handleGetDemoClick = async (event) => {
    event.preventDefault();

    if (!email) {
      toast.error('Please enter a valid email address.');
      return
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Success! 🎉 Thank you for your interest. We'll be in touch soon at " + email + "!", {
          className: "bg-green-50 border-green-200",
        });
        setEmail('');
        setSubmitted(true);
      } else {
        toast.error(`Error: ${result.error}`);
      }
    } catch (error) {
      toast.error('An unexpected error occured.');
    }
  };

  return (
      <RootLayout>
        <section className="flex flex-col items-center justify-center min-h-[50vh] bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center">
            Book Sports Facilities with Ease.
          </h2>
          <p className="mb-6 text-base sm:text-lg text-center">
            Need to reserve a space? Quickly find and reserve indoor basketball courts near you.
          </p>
          <form onSubmit={handleGetDemoClick}>
            <div className="mb-6 flex flex-col sm:flex-row gap-2 w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded text-sm sm:text-base w-full sm:w-96 text-black"
                value={email} // binding the input value to the state
                onChange={handleEmailChange} // add the event listener for text
              />
              <button
                type="submit"
                className={`px-4 sm:px-6 py-2 bg-green-500 text-black font-semibold rounded text-sm sm:text-base whitespace-nowrap transition-colors duration-150 ${submitted ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}
                disabled={!email || submitted}
              >
                {submitted ? 'Submitted 😎' : 'Get a Demo'}
              </button>
            </div>
          </form>
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
      </RootLayout>
  );
}
