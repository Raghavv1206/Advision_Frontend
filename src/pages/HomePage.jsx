import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function HomePage() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("advision_first_visit");

    if (!hasSeenPopup) {
      setShowPopup(true);
      sessionStorage.setItem("advision_first_visit", "true");
    }
  }, []);



  return (
    <div className="relative h-screen w-screen overflow-hidden text-white flex flex-col">

      {/* NAVBAR */}

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="max-w-md w-full mx-4 rounded-2xl border border-white/20 
      bg-gradient-to-br from-[#2a2630] to-[#3a3440] p-6 shadow-2xl text-center">

            <h2 className="text-xl font-semibold mb-3 text-[#D6BCEB]">
              Please Note
            </h2>

            <p className="text-sm text-white/80 leading-relaxed mb-5">
              Our backend is hosted on{" "}
              <span className="text-[#BDA8C8] font-medium">Render’s free plan</span>.
              When inactive, the server goes to sleep, so the{" "}
              <span className="font-semibold">
                first login request may take up to ~50 seconds
              </span>{" "}
              while the server starts.
              <br /><br />
              This happens only once — after that, the app runs smoothly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 rounded-full text-sm font-semibold 
          bg-gradient-to-r from-[#a88fd8] to-[#C8A9D0]
          hover:scale-105 transition-all duration-300"
            >
              Got it 👍
            </button>
          </div>
        </div>
      )}


      <header
        className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-9 py-3
          bg-transparent hover:bg-black/50 backdrop-blur-[3px] border-b border-white/10 
          transition-all duration-500 ease-in-out"
      >
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/advisionlogo.png"
            alt="AdVision Logo"
            className="h-9 w-auto drop-shadow-[0_2px_6px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105"
          />
        </div>

        <nav className="flex items-center space-x-6">
          <Link
            to="/login"
            className="text-sm text-white/90 hover:text-[#BDA8C8] transition-all duration-300 relative 
              after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#BDA8C8] 
              hover:after:w-full after:transition-all after:duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-sm font-semibold px-4 py-1.5 rounded-full text-[#ffffff] bg-gradient-to-r from-[#3a3440] to-[#a88fd8] 
              shadow-[0_0_15px_rgba(189,168,200,0.4)] hover:from-[#D6BCEB] hover:to-[#C8A9D0] 
              hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* CTA BUTTON */}
      <div className="absolute bottom-7 left-0 right-0 flex justify-center z-10">
        <button
          onClick={() => navigate("/login")}
          className="px-12 py-4 text-xl font-semibold text-[#ffffff] bg-gradient-to-r from-[#3a3440] to-[#a88fd8] 
            rounded-full border border-[#BDA8C8]/30 backdrop-blur-md 
            shadow-[inset_0_0_15px_rgba(189,168,200,0.3),0_0_20px_rgba(189,168,200,0.2)]
            hover:shadow-[inset_0_0_20px_rgba(189,168,200,0.5),0_0_25px_rgba(189,168,200,0.4)]
            hover:scale-105 hover:brightness-110 transition-all duration-500"
        >
          Explore AdVision
        </button>
      </div>
    </div>
  );
}
