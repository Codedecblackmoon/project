import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logo from "./logos/logo o.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      alert(error.message);
      setLoading(false);
      return;
    }

    //  Get the logged-in user's role from metadata
    const userRole = data.user?.user_metadata?.role || "student";

    if (userRole === "teacher") {
      navigate("/teacher-dashboard");
    } else {
      navigate("/student-dashboard");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Google login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto pt-">
        {/* Header */}
        <div className="text-center ">
          {/* <div className="w-18 h-18 rounded-full mx-auto flex flex-col items-center justify-center">
            <img
              src={logo}
              alt="BulaBooks Logo"
              className="w-40 h-40 object-contain"
            />
          </div> */}
          <h1 className="text-2xl font-bold text-[#111827] mb-1">
            Login to your Account
          </h1>
          <p className="text-[#111827]/80 text-sm mb-5">Welcome back to BulaBooks!</p>
        </div>

        <div className="shadow-xl inset-shadow-x1 inset-shadow-indigo-500 shadow-[#000000]-500/60 bg-[#ffffff] rounded-t-lg p-6 border border-[#f9fafb]/20">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Google Sign-in */}
            <Button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full h-12 bg-black text-[#f9fafb] rounded-xs hover:bg-[#f96d00]/90 font-semibold flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign in with Google</span>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-[#111827]/70">or</span>
              </div>
            </div>

            {/* Email & Password */}
            <div className="space-y-4">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" inset-shadow-x1 inset-shadow-indigo-500 h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
                placeholder="Email"
                required
              />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-white/20 border-[#111827]/30 text-[#111827] placeholder:text-[#111827]/60 rounded-sm inset-shadow-2xs inset-shadow-sm inset-shadow-indigo-500"
                placeholder="Password"
                required
              />
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="border-[#111827]/30 data-[state=checked]:bg-[#111827] data-[state=checked]:text-[#f9fafb]"
                />
                <Label htmlFor="remember" className="text-[#111827]/80">
                  Remember Me
                </Label>
              </div>

              <Button
                type="button"
                variant="link"
                className="text-[#111827]/80 text-sm p-0 h-auto"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </Button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loading}
              className=" w-full h-12 bg-black text-[#f9fafb] rounded-xs hover:bg-[#f96d00]/90 font-semibold"
            >
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </div>

        {/* Back to Welcome */}
        <div className="text-center mt-6">
          <Button
            onClick={() => navigate("/")}
        
            className="text-[#111827]/80 bg-transparent hover:text-[#f9fafb] "
          >
            ← Back to Welcome
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
