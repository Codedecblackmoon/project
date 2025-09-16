import { AvatarCategory } from "@/pages/CreateAvatar";
import { useState, useEffect } from "react";

interface ItemGridProps {
  category: AvatarCategory;
  selectedItem: string;
  onItemSelect: (item: string) => void;
}

// Define available items for each category
const categoryItems: Record<AvatarCategory, string[]> = {
  accessories: ['hat-2', 'hat-1', 'hat-3', 'hat-4'],
  base: ['base-1', 'base-2', 'base-3', 'base-4', 'base-5'],
  hair: ['hair-1', 'hair-2'],
  eyes: ['eyes-1', 'eyes-2', 'eyes-3', 'eyes-4', 'eyes-5'],
  mouth: ['mouth-1', 'mouth-2'],
  clothes: ['clothes-3', 'clothes-2', 'clothes-4', 'clothes-5', 'clothes-1'],
};

const ItemGrid = ({ category, selectedItem, onItemSelect }: ItemGridProps) => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(categoryItems[category] || []);
  }, [category]);

  const getCategoryLabel = (category: AvatarCategory): string => {
    const labels: Record<AvatarCategory, string> = {
      base: 'Body Type',
      hair: 'Hair Type',
      eyes: 'Eye Type',
      mouth: 'Mouth Type',
      clothes: 'Outfit',
      accessories: 'Accessories'
    };
    return labels[category];
  };

  return (
    <div className="bg-white/90 rounded-3xl p-6 w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        {getCategoryLabel(category)}
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => {
          const isSelected = selectedItem === item;
          const isEmpty = item === '';
          
          return (
            <button
              key={item || `empty-${index}`}
              onClick={() => onItemSelect(item)}
              className={`aspect-square rounded-2xl border-2 transition-all ${
                isSelected 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              } flex items-center justify-center overflow-hidden`}
            >
              {isEmpty ? (
                <div className="text-gray-400 text-2xl">✕</div>
              ) : (
                <img
                  src={`/avatars/${category}/${item}.png`}
                  alt={`${category} ${item}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to a placeholder
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback text-gray-400 text-2xl';
                      fallback.textContent = '?';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ItemGrid;