import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StoryCardProps {
  title: string;
  image: string;
  status: 'new' | 'continue' | 'completed';
  progress?: number;
  level?: string;
}

const StoryCard = ({ title, image, status, progress, level }: StoryCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'continue': return 'bg-orange-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'new': return 'NEW';
      case 'continue': return 'CONTINUE';
      case 'completed': return 'READ AGAIN';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative mb-3">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover rounded-xl"
        />
        {progress && progress > 0 && (
          <div className="absolute bottom-2 left-2 right-2">
            <div className="bg-black/60 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">{title}</h3>
      
      <div className="flex items-center justify-between">
        {level && (
          <Badge variant="secondary" className="text-xs">
            {level}
          </Badge>
        )}
        
        <Button
          size="sm"
          className={`text-xs font-semibold text-white px-3 py-1 rounded-md ${getStatusColor()}`}
        >
          {getStatusText()}
        </Button>
      </div>
    </div>
  );
};

export default StoryCard;