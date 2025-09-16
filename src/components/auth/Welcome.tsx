import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logos/logo o.png"
import teacher from "./logos/teach.png"
import kide from "./logos/kid.png"

const Welcome = () => {
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role: "student" | "teacher") => {
    navigate(`/login?role=${role}`);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {!showRoleSelection ? (
          <>
            {/* Logo */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-100 h-100 rounded-full p-4 mx-auto">
                <img
                  src={logo}
                  alt="BulaBooks Logo - Child reading under stars"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setShowRoleSelection(true)}
                className="w-40 h-12 shadow-xl text-[#f9fafb] bg-[#111827] rounded-xs hover:bg-[#f96d00]/90 font-semibold"
              >
                Log In
              </Button>

              <Button
                onClick={handleSignup}
                variant="outline"
                className="w-40 h-12 shadow-xl border-2 border-[#111827] text-[#111827] bg-transparent rounded-xs hover:bg-white hover:border-[#f96d00] hover:text-[#f96d00] font-semibold"
              >
                Sign Up
              </Button>
            </div>
          </>
        ) : (
          /* Role Selection for Login */
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#111827] text-center">
              Log In As
            </h2>

            <div className="flex justify-center space-x-20">
              <button
                onClick={() => handleRoleSelect("student")}
                className="flex flex-col items-center space-y-3 group p-10"
              >
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center group-hover:scale-125 transition-transform">
                  <img
                    src={kide}
                    alt="Learner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-#111827] font-semibold text-lg">
                  Learner
                </span>
              </button>

              <button
                onClick={() => handleRoleSelect("teacher")}
                className="flex flex-col items-center space-y-3 group p-10"
              >
                <div className="w-24 h-24 bg-[#111827]   rounded-full overflow-hidden flex items-center justify-center group-hover:scale-125 transition-transform">
                  <img
                    src={teacher}
                    alt="Teacher"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#111827] font-semibold text-lg">
                  Teacher
                </span>
              </button>
            </div>

            <Button
              onClick={() => setShowRoleSelection(false)}
              variant="ghost"
              className="text-[#111827] hover:bg-[#f96d00] mx-auto"
            >
              ← Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Welcome;
