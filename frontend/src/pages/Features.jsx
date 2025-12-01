import application_img from "../assets/application_img.svg";
import reminder_img from "../assets/reminder_img.jpeg";
import analytics_img from "../assets/analytics_img.svg";
import { FeatureCard } from "../components/FeatureCard";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";
//  feature data 
const features = [
  {
    img: application_img,
    title: "Track All Your Applications",
    description:
      "Keep all your job applications organized in one place. View details like company name, position, status, and deadlines effortlessly.",
  },
  {
    img: reminder_img,
    title: "Smart Reminders & Deadlines",
    description:
      "Never miss an opportunity! Get automatic reminders for upcoming interviews, follow-ups, or deadlines directly on your dashboard.",
  },
  {
    img: analytics_img,
    title: "Progress Analytics",
    description:
      "Visualize your job hunt progress with charts showing applications submitted, interviews attended, and offers received.",
  },
];

const FeatureSection = () => {
  return (
    <>
      {/*  Navbar  */}

      <Navbar />


      {/*  Section Layout */}
      <section
        className="bg-blue-50 min-h-screen py-20 px-6 sm:px-10 lg:px-24 text-center"
      >
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-12 text-gray-800 leading-tight"
        >
          Key Features of Our Job Application Tracker
        </h2>

        {/*  Features Grid */}
        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
  >
    <FeatureCard {...feature} />
  </motion.div>
))}

        </div>
      </section>
    </>
  );
};

export default FeatureSection;
