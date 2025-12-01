import React, { useState, useRef, useEffect } from "react";

/**
 * Dropdown Component - Provides action menu for application cards
 * @component
 */
export default function Dropdown({ app, updateStatus, deleteApplication }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Application actions menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <button
            onClick={() => {
              updateStatus(app._id, app.status);
              setOpen(false);
            }}
            className="block w-full px-4 py-2.5 text-sm text-left text-gray-700 hover:bg-blue-50 transition-colors"
          >
            ✓ Update Status
          </button>

          <button
            onClick={() => {
              deleteApplication(app._id);
              setOpen(false);
            }}
            className="block w-full px-4 py-2.5 text-sm text-left text-gray-700 hover:bg-red-50 transition-colors border-t border-gray-200"
          >
            ✕ Delete
          </button>
        </div>
      )}
    </div>
  );
}
