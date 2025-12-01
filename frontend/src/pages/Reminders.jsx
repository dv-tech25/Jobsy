import  Navbar  from "../components/Navbar";

 const Reminders = () => {
  const announcements = [
    { id: 1, message: "Welcome to the Job Application Portal!" },
    { id: 2, message: "Check out the new Features page." },
    { id: 3, message: "Remember to update your profile regularly." },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 pt-20 flex flex-col items-center font-sans ">
        {/* Header */}
        <h1 className="text-2xl md:text-2xl font-bold text-indigo-800 drop-shadow-sm tracking-tight mt-3 mb-6">
          See Important Updates
        </h1>

        <div
          className="bg-white shadow-lg rounded-2xl w-11/12 max-w-3xl p-6 mb-10 border border-gray-200 animate-slideDown animate-fadeUp"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
            📢 Announcements
          </h2>
          <ul className="space-y-3">
            {announcements.map((a) => (
              <li
                key={a.id}
                className="p-3 bg-indigo-50 text-gray-800 rounded-lg hover:bg-indigo-100 transition-all"
              >
                {a.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Reminders;