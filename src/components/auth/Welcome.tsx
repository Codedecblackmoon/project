import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {!showRoleSelection ? (
          <>
            {/* Logo */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-100 h-100 rounded-full p-4 mx-auto">
                <img
                  src="/uploads/BulaLogo.png"
                  alt="BulaBooks Logo - Child reading under stars"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setShowRoleSelection(true)}
                className="w-40 h-12 border-2 border-white text-white bg-transparent rounded-lg hover:bg-black/90 font-semibold"
              >
                Log In
              </Button>

              <Button
                onClick={handleSignup}
                variant="outline"
                className="w-40 h-12 border-2 border-white text-white bg-transparent rounded-lg hover:bg-white hover:text-primary font-semibold"
              >
                Sign Up
              </Button>
            </div>
          </>
        ) : (
          /* Role Selection for Login */
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Log In As
            </h2>

            <div className="flex justify-center space-x-8">
              <button
                onClick={() => handleRoleSelect("student")}
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src="/uploads/learnerProfile.jpg"
                    alt="Learner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-semibold text-lg">
                  Learner
                </span>
              </button>

              <button
                onClick={() => handleRoleSelect("teacher")}
                className="flex flex-col items-center space-y-3 group"
              >
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src="/uploads/teacherProfile.jpg"
                    alt="Teacher"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-semibold text-lg">
                  Teacher
                </span>
              </button>
            </div>

            <Button
              onClick={() => setShowRoleSelection(false)}
              variant="ghost"
              className="text-white hover:bg-white/10 mx-auto"
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
