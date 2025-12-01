import React from 'react';
import avatar  from '../assets/avatar.avif';
export default function Sidebar({ show, userName, statusCounts, onLogout }) {
  return (
    <div className={`${show ? 'block' : 'hidden'} md:flex md:w-72 md:flex-col bg-blue-900 text-white p-6 gap-6 md:sticky md:top-0 max-h-screen `}>

      <div className="hidden md:flex items-center gap-3 animate-slideDown animate-fadeUp">
        <img src={avatar} className="rounded-full aspect-square max-w-[4rem] border" alt="avatar" />
        <h2 className="text-lg font-semibold">Hi {userName}</h2>
      </div>

      <div className="bg-white/10 p-4 rounded-xl space-y-2 mb-2 animate-slideDown animate-fadeUp">
        <h3 className="text-xl font-semibold">Analysis</h3>
        <p className="flex justify-between">Total <span>{statusCounts?.total ?? 0}</span></p>
        <p className="flex justify-between text-yellow-300">Pending <span>{statusCounts?.pending ?? 0}</span></p>
        <p className="flex justify-between text-green-300">Shortlisted <span>{statusCounts?.shortlisted ?? 0}</span></p>
        <p className="flex justify-between text-red-300">Rejected <span>{statusCounts?.rejected ?? 0}</span></p>
      </div>

      <button
        onClick={onLogout}
        className="flex gap-2 bg-blue-500 rounded-4xl h-10 items-center justify-center mt-auto hover:bg-blue-600 transition px-4 py-2 animate-slideDown animate-fadeUp"
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
        </div>
        <div>Logout</div>
      </button>
    </div>
  );
}
