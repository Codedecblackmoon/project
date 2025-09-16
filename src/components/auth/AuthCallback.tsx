import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      // ✅ Check the session after redirect
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Auth callback error:", error.message);
        navigate("/login"); // fallback
        return;
      }

      if (data?.session) {
        console.log("Google login success:", data.session.user);

        // Example: if you want to route students vs teachers
        const role = data.session.user.user_metadata?.role || "student";
        if (role === "student") {
          navigate("/create-avatar");
        } else {
          navigate("/dashboard");
        }
      } else {
        console.log("No session found. Redirecting to login.");
        navigate("/login");
      }
    };

    handleAuth();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-[#f9fafb]">
      <p className="text-lg animate-pulse">Finishing sign in…</p>
    </div>
  );
};

export default AuthCallback;
