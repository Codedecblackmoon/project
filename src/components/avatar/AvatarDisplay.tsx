import { AvatarState } from "@/pages/CreateAvatar";

interface AvatarDisplayProps {
  avatar: AvatarState;
  className?: string;
  showTopHalf?: boolean;
  onClick?: () => void;
}

const AvatarDisplay = ({ avatar, className = "", showTopHalf = false, onClick }: AvatarDisplayProps) => {
  const containerClasses = showTopHalf 
    ? "relative w-10 h-10 rounded-full overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    : "relative w-48 h-64 flex items-center justify-center";

  return (
    <div className={`${containerClasses} ${className}`} onClick={onClick}>
      {/* Glow effect for dashboard avatar */}
      {showTopHalf && <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />}
      
      {/* Avatar container */}
      <div className={`relative ${showTopHalf ? 'w-full h-full' : 'w-40 h-52'} bg-white/10 ${showTopHalf ? 'rounded-full' : 'rounded-3xl'} flex items-center justify-center overflow-hidden`}>
        {/* Base body */}
        {avatar.base && (
          <img
            src={`/avatars/base/${avatar.base}.png`}
            alt="Avatar base"
            className={`absolute inset-0 w-full h-full object-contain z-60 ${showTopHalf ? 'object-top scale-150' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Clothes */}
        {avatar.clothes && (
          <img
            src={`/avatars/clothes/${avatar.clothes}.png`}
            alt="Avatar clothes"
            className={`absolute inset-0 w-full h-full object-contain z-40 ${showTopHalf ? 'object-top scale-150' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Hair */}
        {avatar.hair && (
          <img
            src={`/avatars/hair/${avatar.hair}.png`}
            alt="Avatar hair"
            className={`absolute inset-0 w-full h-full object-contain z-30 ${showTopHalf ? 'object-top scale-150' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Eyes */}
        {avatar.eyes && (
          <img
            src={`/avatars/eyes/${avatar.eyes}.png`}
            alt="Avatar eyes"
            className={`absolute inset-0 w-full h-full object-contain z-10 ${showTopHalf ? 'object-top scale-150' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Mouth */}
        {avatar.mouth && (
          <img
            src={`/avatars/mouth/${avatar.mouth}.png`}
            alt="Avatar mouth"
            className={`absolute inset-0 w-full h-full object-contain z-50 ${showTopHalf ? 'object-top scale-150' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Accessories (hats, glasses, etc.) - Always on top */}
        {avatar.accessories && (
          <img
            src={`/avatars/accessories/${avatar.accessories}.png`}
            alt="Avatar accessories"
            className={`absolute inset-0 w-full h-full object-contain z-20 ${showTopHalf ? 'object-top scale-150' : ''}`}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Fallback avatar when no avatar is saved */}
        {!avatar.base && (
          <div className="absolute inset-0 flex items-center justify-center text-4xl text-white/50 z-5">
            👤
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarDisplay;