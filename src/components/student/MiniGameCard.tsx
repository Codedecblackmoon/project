import { Badge } from "@/components/ui/badge";

interface MiniGameCardProps {
  title: string;
  icon: string;
  color: string;
  xp: number;
  difficulty?: string;
}

const MiniGameCard = ({ title, icon, color, xp, difficulty }: MiniGameCardProps) => {
  return (
    <div className={`${color} rounded-2xl p-4 text-white shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-2xl">{icon}</div>
        <Badge variant="secondary" className="bg-white/20 text-white border-0">
          {xp} XP
        </Badge>
      </div>
      
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      
      {difficulty && (
        <p className="text-white/80 text-sm">{difficulty}</p>
      )}
    </div>
  );
};

export default MiniGameCard;