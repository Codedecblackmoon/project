import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/auth/Welcome";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import AuthCallback from "@/components/auth/AuthCallback";
import ForgotPassword from "@/components/auth/ForgotPassword";
import ResetPassword from "@/components/auth/ResetPassword";
import CreateAvatar from "./pages/CreateAvatar";
import StudentDashboard from "./components/student/StudentDashboard";
import StoryPage from "./components/student/StoryPage";
import BadgesPage from "./components/student/BadgesPage";
import ProgressPage from "./components/student/ProgressPage";
import TeacherDashboard from "./components/teacher/TeacherDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-avatar" element={<CreateAvatar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
