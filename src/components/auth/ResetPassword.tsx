import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      setMessage("Please enter both password fields.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true);

    // ✅ Supabase automatically reads the recovery token from the URL
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Password updated successfully!");
      setTimeout(() => navigate("/login"), 2000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#f9fafb]">Reset Password</h1>
        <p className="text-[#f9fafb]/80 text-sm mt-2">
          Enter your new password below
        </p>

        <div className="mt-6 space-y-4">
          {/* New Password */}
          <div className="relative">
            <Label htmlFor="password" className="text-[#f9fafb]/80">
              New Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="h-12 bg-white/20 border-white/30 text-[#f9fafb] placeholder:text-white/60 rounded-lg pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-white/70"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Label htmlFor="confirmPassword" className="text-[#f9fafb]/80">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="h-12 bg-white/20 border-white/30 text-[#f9fafb] placeholder:text-white/60 rounded-lg pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-[#f9fafb]/70"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Button
            onClick={handleReset}
            disabled={loading}
            className="w-full h-12 bg-[#111827] text-[#f9fafb] rounded-lg hover:bg-[#111827]/90 font-semibold"
          >
            {loading ? "Updating..." : "Reset Password"}
          </Button>

          {message && <p className="mt-3 text-sm text-[#f9fafb]/90">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
