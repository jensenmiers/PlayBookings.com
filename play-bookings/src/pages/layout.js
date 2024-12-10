import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
    <header className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Play Bookings</h1>
      <nav>
        <a href="#features" className="mx-2">Features</a>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="p-4 bg-gray-800 text-white text-center">
      <p>&copy; 2024 Play Bookings LLC. All rights reserved.</p>
    </footer>
  </div>
  // BAD CODE FROM APP ROUTER STRUCTURE
  //  <html lang="en">
  //     <body className={inter.className}>{children}</body>
  //   </html>
  // ^ BAD CODE FROM APP ROUTER STRUCTURE
  );
}
