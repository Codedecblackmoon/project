// 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Eye, EyeOff } from "lucide-react"; 

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [language, setLanguage] = useState("english");
  const [grade, setGrade] = useState("3");
  const [school, setSchool] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Email/Password Signup
const handleSignup = async () => {
  if (!name || !email || !password || !confirmPassword || !role) return;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!termsAccepted) {
    alert("You must accept the Terms & Privacy Policy to continue.");
    return;
  }

  // Sign up user
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
        role,
        language,
        grade: role === "student" ? grade : null,
        school: role === "teacher" ? school : null,
        parent_email: role === "student" ? parentEmail : null,
      },
    },
  });

  if (error) {
    if (error.code === "user_already_exists") {
      alert("This email is already registered. Please log in instead.");
    } else {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
    return;
  }

  console.log("User signed up:", data);

  if (role === "student") {
    navigate(`/create-avatar?role=${role}`);
  } else {
    navigate(`/login?role=${role}`);
  }
};

  // Google OAuth Signup
  // const handleGoogleSignup = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: { redirectTo: window.location.origin },
  //   });

  //   if (error) {
  //     console.error("Google signup error:", error.message);
  //     alert(error.message);
  //     return;
  //   }

  //   console.log("Google OAuth response:", data);
  // };

  const handleGoogleSignup = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`, // ✅ callback page
        queryParams: {
          access_type: "offline", // refresh tokens
          prompt: "consent", // always ask user to pick account
        },
      },
    });

    if (error) {
      console.error("Google signup error:", error.message);
      alert(error.message);
      return;
    }

    console.log("Google OAuth redirecting...", data);
  } catch (err) {
    console.error("Unexpected Google signup error:", err);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center p-4">
      <div className="w-800 max-w-md mx-auto text-center space-y-6">
        {/* Logo */}
        {/* <div className="w-20 h-20 rounded-full p-4 mx-auto">
          <img
            src="/uploads/bulabooksLogo.png"
            alt="BulaBooks Logo"
            className="w-full h-full object-contain"
          />
        </div> */}

        <h1 className="text-2xl font-bold text-[#111827] mb-0">Sign Up</h1>
        <p className="text-[#111827]/80 ">Create your account to get started</p>

        {/* Signup Form */}
        <div className="shadow-xl inset-shadow-x1 inset-shadow-indigo-500 shadow-[#000000]-500/60 bg-[#ffffff] rounded-t-lg p-6 border border-[#f9fafb]/20">
          {/* Full Name */}

          {/* jjjj */}
          <div className="flex flex-row items-center justify-center gap-5">
            <div>
              <Label htmlFor="name" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
                required
              />
            </div>
          </div>
          
          <div className="flex flex-row items-center justify-center gap-5">
            {/* Password */}
            <div className="relative">
              <Label htmlFor="password" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 bottom-3 text-[#111827]/70"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Label htmlFor="confirmPassword" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 bottom-3 text-[#111827]/70"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          

          {/* Role */}
          <div>
            <Label htmlFor="role" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">I am a</Label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as "student" | "teacher")}
              className="h-12 w-full bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
            >
              <option value="student">Learner</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Grade (only learners) */}
          {role === "student" && (
            <div>
              <Label htmlFor="grade" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Grade</Label>
              <select
                id="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="h-12 w-full bg-white/20 border-[#111827]/60 text-[#111827]/60 rounded-sm px-1"
              >
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
              </select>
            </div>
          )}

          {/* School (only teachers) */}
          {role === "teacher" && (
            <div>
              <Label htmlFor="school" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">School</Label>
              <Input
                id="school"
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="Your School Name"
                className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-lg"
              />
            </div>
          )}

          {/* Parent Email (optional, only learners) */}
          {role === "student" && (
            <div>
              <Label htmlFor="parentEmail" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Parent/Guardian Email (optional)</Label>
              <Input
                id="parentEmail"
                type="email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                placeholder="Parent Email"
                className="h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
              />
            </div>
          )}

          {/* Language */}
          <div className="pb-10">
            <Label htmlFor="language" className="block text-left text-[#111827]/80 font-bold pb-2 pt-5">Preferred Language</Label>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="h-12 w-full bg-white/20 border-[#111827]/60 text-[#111827]/60 rounded-sm px-1"
            >
              <option value="english">English</option>
              <option value="zulu">isiZulu</option>
              <option value="xhosa">isiXhosa</option>
              <option value="sotho">Sesotho</option>
              <option value="tswana">Setswana</option>
              <option value="sepedi">Sepedi</option>
              <option value="swati">siSwati</option>
              <option value="venda">Tshivenda</option>
              <option value="tsonga">Xitsonga</option>
              <option value="afrikaans">Afrikaans</option>
              <option value="ndebele">isiNdebele</option>
            </select>
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2 text-left">
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="h-4 w-4"
            />
            <Label htmlFor="terms" className="text-[#111827]/80 text-sm pb-2">
              I agree to the <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy Policy</a>
            </Label>
          </div>

          {/* Submit */}
          <Button
            onClick={handleSignup}
            className="w-full h-12 bg-black text-white rounded-lg hover:bg-black/90 font-semibold mt-2"
            disabled={!name || !email || !password || !confirmPassword || !role}
          >
            Sign Up
          </Button>

          {/* Forgot Password
          <div className="mt-2 text-right">
            <Button
              variant="link"
              className="text-white/80 hover:text-white text-sm"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Button>
          </div> */}

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-[#111827]/30"></div>
            <span className="px-2 text-[#111827]/70 text-sm">or</span>
            <div className="flex-grow border-t border-[#111827]/30"></div>
          </div>

          {/* Google Signup */}
          <Button
            onClick={handleGoogleSignup}
            className="w-full h-12 bg-[#f96d00] text-white rounded-lg hover:bg-[#ff8629] font-semibold"
          >
            Sign Up with Google
          </Button>
        </div>

        {/* Back to Welcome */}
        <div className="text-center mt-6">
          <Button
            onClick={() => navigate("/")}
            variant="link"
            className="text-[#111827]/80 hover:text-[#ff8629]"
          >
            ← Back to Welcome
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
