import { Link } from "react-router-dom";
import backgroundImage from "../assets/BCG.webp";
import  Navbar  from '../components/Navbar';

 const FrontPage = () => (
  <div className="relative min-h-screen overflow-hidden">
    {/* Background Layer */}
    <div className="absolute inset-0 z-10">
      <img
        src={backgroundImage}
        alt="Background"
        className="w-full h-full object-cover opacity-100 "
       
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
    </div>

    {/* Main Content */}
    <div className="relative z-10  ">

      <Navbar />


      <main className="pt-24 sm:pt-32 md:pt-40 px-6 text-center max-w-xl mx-auto animate-slideDown animate-fadeUp" aria-label="Hero Section">
        <div>
          <p className="mb-4 text-sm text-gray-700">
            Announcing our next moves for its development.{" "}
            <Link to="/reminders" className="text-indigo-600 font-semibold">Read more →</Link>
          </p>

          <h1 className="animate-fadeUp text-4xl font-bold text-gray-900 sm:text-5xl">
            Welcome to Job Tracker
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            Your one-stop solution for managing job applications.
            Track, organize, and win interviews smarter.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link to="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-indigo-500 transition">
              Get Started
            </Link>
            <Link to="/features" className="text-sm font-medium py-3 text-gray-800 hover:text-gray-900 transition">
              Learn More →
            </Link>
          </div>
        </div>
      </main>
    </div>
  </div>
);
export default FrontPage;