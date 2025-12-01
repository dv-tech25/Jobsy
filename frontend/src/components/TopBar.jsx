import React from 'react';
import avatar  from '../assets/avatar.avif';
export default function TopBar({ userName, onToggleSidebar }) {
  return (
    <div className="flex md:hidden justify-between items-center bg-blue-900 text-white p-3 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          className="rounded-full aspect-square max-w-[2rem] border"
          alt="avatar"
        />
        <h2 className="font-semibold text-base">Hi {userName}</h2>
      </div>
      <button onClick={onToggleSidebar} className="text-2xl" aria-label="Toggle sidebar">☰</button>
    </div>
  );
}
