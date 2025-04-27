import React, { useState } from "react";

const SecureImagePopup = () => {
  const [open, setOpen] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
      >
        View Certificate
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              ×
            </button>
            <img
              src="/images/resume_template.jpeg"
              alt="Secure Certificate"
              className="rounded-lg pointer-events-none select-none "
              onContextMenu={handleContextMenu}
              draggable="false"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SecureImagePopup;
