import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleForgotPassword = async () => {
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`, // 🔑 user comes back here
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset link sent! Please check your email.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark p-4">
      <div className="bg-ds/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#f9fafb]">Forgot Password</h1>
        <p className="text-[#f9fafb]/80 text-sm mt-2">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="email" className="text-[#f9fafb]/80">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/20 border-white/30 text-[#f9fafb] placeholder:text-white/60 rounded-lg"
            />
          </div>

          <Button
            onClick={handleForgotPassword}
            disabled={!email || loading}
            className="w-full h-12 bg-[#111827] text-[#f9fafb] rounded-lg hover:bg-[#111827]/90 font-semibold"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>

          {message && (
            <p className="mt-3 text-sm text-[#f9fafb]/90">{message}</p>
          )}

          <div className="mt-4">
            <Button
              variant="link"
              className="text-[#f9fafb]/80 hover:text-[#f9fafb]"
              onClick={() => (window.location.href = "/login")}
            >
              ← Back to Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
