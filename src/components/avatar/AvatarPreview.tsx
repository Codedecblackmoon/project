// import { AvatarState } from "@/pages/CreateAvatar";

// interface AvatarPreviewProps {
//   avatar: AvatarState;
// }

// const AvatarPreview = ({ avatar }: AvatarPreviewProps) => {
//   return (
//     <div className="relative w-48 h-64 flex items-center justify-center">
//       {/* Glow effect */}
//       <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
      
//       {/* Avatar container */}
//       <div className="relative w-40 h-52 bg-white/10 rounded-3xl flex items-center justify-center overflow-hidden">
//         {/* Accessories */}
//         {avatar.accessories && (
//           <img
//             src={`/avatars/accessories/${avatar.accessories}.png`}
//             alt="Avatar accessories"
//             className="absolute inset-0 w-full h-full object-contain z-60"
//             onError={(e) => {
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         )}

//         {/* Base body */}
//         {avatar.base && (
//           <img
//             src={`/avatars/base/${avatar.base}.png`}
//             alt="Avatar base"
//             className="absolute inset-0 w-full h-full object-contain z-10"
//             onError={(e) => {
//               // Fallback to a simple avatar representation
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         )}
        
//         {/* Hair */}
//         {avatar.hair && (
//           <img
//             src={`/avatars/hair/${avatar.hair}.png`}
//             alt="Avatar hair"
//             className="absolute inset-0 w-full h-full object-contain z-20"
//             onError={(e) => {
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         )}
        
//         {/* Eyes */}
//         {avatar.eyes && (
//           <img
//             src={`/avatars/eyes/${avatar.eyes}.png`}
//             alt="Avatar eyes"
//             className="absolute inset-0 w-full h-full object-contain z-30"
//             onError={(e) => {
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         )}
        
//         {/* Mouth */}
//         {avatar.mouth && (
//           <img
//             src={`/avatars/mouth/${avatar.mouth}.png`}
//             alt="Avatar mouth"
//             className="absolute inset-0 w-full h-full object-contain z-40"
//             onError={(e) => {
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         )}
        
//         {/* Clothes */}
//         {avatar.clothes && (
//           <img
//             src={`/avatars/clothes/${avatar.clothes}.png`}
//             alt="Avatar clothes"
//             className="absolute inset-0 w-full h-full object-contain z-50"
//             onError={(e) => {
//               e.currentTarget.style.display = 'none';
//             }}
//           />
//         )}
        
        
//         {/* Fallback avatar when images fail to load */}
//         {/* <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/50 z-5">
//           👤
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default AvatarPreview;

import { AvatarState } from "@/pages/CreateAvatar";

interface AvatarPreviewProps {
  avatar: AvatarState;
}

const AvatarPreview = ({ avatar }: AvatarPreviewProps) => {
  return (
    <div className="relative w-48 h-64 flex items-center justify-center">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
      
      {/* Avatar container */}
      <div className="relative w-40 h-52 bg-white/10 rounded-3xl flex items-center justify-center overflow-hidden">
        {/* Base body */}
        {avatar.base && (
          <img
            src={`/avatars/base/${avatar.base}.png`}
            alt="Avatar base"
            className="absolute inset-0 w-full h-full object-contain z-60"
            onError={(e) => {
              // Fallback to a simple avatar representation
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Clothes */}
        {avatar.clothes && (
          <img
            src={`/avatars/clothes/${avatar.clothes}.png`}
            alt="Avatar clothes"
            className="absolute inset-0 w-full h-full object-contain z-20"
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
            className="absolute inset-0 w-full h-full object-contain z-30"
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
            className="absolute inset-0 w-full h-full object-contain z-40"
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
            className="absolute inset-0 w-full h-full object-contain z-50"
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
            className="absolute inset-0 w-full h-full object-contain z-10"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
        
        {/* Fallback avatar when images fail to load */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/50 z-5">
          👤
        </div> */}
      </div>
    </div>
  );
};

export default AvatarPreview;