import AboutImg from "../assets/about-img.jpg";
import  Navbar  from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />  
      
      <div className="bg-gray-200 min-h-screen p-1 font-sans overflow-x-hidden flex flex-col items-center pt-20">
        

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl gap-16">
          {/* Left Image */}
          <div className="w-full flex justify-center animate-fadeIn">
            <img
             
              src={AboutImg}
              alt="Designer at work"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2  animate-slideDown animate-fadeUp">
            <h2 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight ">
              ABOUT US
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Job Application Tracker helps you stay organized and on top of all your job applications.
              Keep track of the positions you’ve applied for, deadlines, interview schedules, and follow-ups
              in one convenient place.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Designed for professionals and students alike, the app ensures you never miss an important update
              and can manage your job search efficiently. Prioritize opportunities, set reminders, and monitor
              your progress with ease.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aim to make the job hunting process seamless and stress-free, so you can focus on preparing
              for interviews and landing your dream role. Your career journey is simplified, organized, and
              fully under control.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-600 mt-8  animate-fadeUp">
          <button aria-label="Twitter" className="hover:text-black cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.27 4.27 0 0 0-7.28 3.89A12.12 12.12 0 0 1 3.15 4.6a4.27 4.27 0 0 0 1.32 5.7 4.22 4.22 0 0 1-1.94-.54v.05a4.27 4.27 0 0 0 3.42 4.18c-.33.09-.68.13-1.04.13-.25 0-.5-.02-.74-.07a4.27 4.27 0 0 0 3.99 2.96A8.56 8.56 0 0 1 2 19.54 12.07 12.07 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22.46 6z" />
            </svg>
          </button>
          <button aria-label="Facebook" className="hover:text-black cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.15 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.9h-2.34V22C18.34 21.22 22 17.07 22 12.07z"/>
            </svg>
          </button>
          <button aria-label="Instagram" className="hover:text-black cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
