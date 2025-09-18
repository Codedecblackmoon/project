import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BadgesPage = () => {
  const navigate = useNavigate();

  const badges = [
    { title: "Bookworm", icon: "📖", desc: "Read 10 stories", earned: true },
    { title: "Storyteller", icon: "🎭", desc: "Complete 5 read-alouds", earned: true },
    { title: "Speed Reader", icon: "⚡", desc: "Finish a story in under 5 mins", earned: false },
    { title: "Word Master", icon: "🔠", desc: "Master 100 new words", earned: false },
  ];

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <header className="bg-orange-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="font-bold">🏆 My Badges</h1>
        <Button variant="secondary" onClick={() => navigate(-1)}>← Back</Button>
      </header>

      <main className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {badges.map((badge, idx) => (
          <div 
            key={idx}
            className={`p-4 rounded-xl text-center shadow-md ${
              badge.earned ? "bg-yellow-100 border border-yellow-300" : "bg-gray-100 opacity-60"
            }`}
          >
            <div className="text-3xl mb-2">{badge.icon}</div>
            <h3 className="font-bold text-sm">{badge.title}</h3>
            <p className="text-xs">{badge.desc}</p>
            <p className="text-xs mt-1">{badge.earned ? "✅ Earned" : "🔒 Locked"}</p>
          </div>
        ))}
      </main>
    </div>
  ); 
};

export default BadgesPage;
