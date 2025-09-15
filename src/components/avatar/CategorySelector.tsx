import { Button } from "@/components/ui/button";
import { AvatarCategory } from "@/pages/CreateAvatar";
import { LucideIcon } from "lucide-react";

interface Category {
  id: AvatarCategory;
  icon: LucideIcon;
  label: string;
}

interface CategorySelectorProps {
  categories: Category[];
  activeCategory: AvatarCategory;
  onCategoryChange: (category: AvatarCategory) => void;
}

const CategorySelector = ({ categories, activeCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <div className="flex space-x-3">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant="ghost"
            size="icon"
            onClick={() => onCategoryChange(category.id)}
            className={`w-12 h-12 rounded-2xl transition-all ${
              isActive 
                ? 'bg-white text-orange-500 shadow-lg' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Icon className="h-6 w-6" />
          </Button>
        );
      })}
    </div>
  );
};

export default CategorySelector;