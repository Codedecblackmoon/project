import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProgressPage = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Stories Read", value: 70 },
    { label: "Games Completed", value: 50 },
    { label: "Speaking Practice", value: 40 },
    { label: "XP Progress", value: 80 },
  ];

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <header className="bg-orange-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="font-bold">📊 My Progress</h1>
        <Button variant="secondary" onClick={() => navigate(-1)}>← Back</Button>
      </header>

      <main className="p-6 max-w-3xl mx-auto space-y-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{stat.label}</span>
              <span className="text-sm">{stat.value}%</span>
            </div>
            <Progress value={stat.value} className="h-2" />
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProgressPage;
