import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Eye, Scissors, Shirt, Glasses } from "lucide-react";
import AvatarPreview from "@/components/avatar/AvatarPreview";
import CategorySelector from "@/components/avatar/CategorySelector";
import ItemGrid from "@/components/avatar/ItemGrid";

export type AvatarCategory = 'base' | 'hair' | 'eyes' | 'mouth' | 'clothes' | 'accessories';

export interface AvatarState {
  base: string;
  hair: string;
  eyes: string;
  mouth: string;
  clothes: string;
  accessories: string;
}

const CreateAvatar = () => {
  const navigate = useNavigate();
  
  const [activeCategory, setActiveCategory] = useState<AvatarCategory>('base');
  const [nickname, setNickname] = useState("Neo Moyo");
  const [level] = useState(6);
  
  const [avatar, setAvatar] = useState<AvatarState>({
    base: 'base-1',
    hair: 'hair-1',
    eyes: 'eyes-1',
    mouth: 'mouth-1',
    clothes: 'clothes-1',
    accessories: ''
  });

  const categories = [
    { id: 'base' as AvatarCategory, icon: User, label: 'Body Type' },
    { id: 'eyes' as AvatarCategory, icon: Eye, label: 'Eye Type' },
    { id: 'hair' as AvatarCategory, icon: Scissors, label: 'Hair Type' },
    { id: 'clothes' as AvatarCategory, icon: Shirt, label: 'Outfit' },
    { id: 'accessories' as AvatarCategory, icon: Glasses, label: 'Accessories' }
  ];

  const handleItemSelect = (category: AvatarCategory, item: string) => {
    setAvatar(prev => ({
      ...prev,
      [category]: item
    }));
  };

  const handleFinish = () => {
    localStorage.setItem("studentName", nickname);
    localStorage.setItem("studentEmail", ""); // Initialize empty email
    localStorage.setItem("studentGrade", ""); // Initialize empty grade
    localStorage.setItem("avatar", JSON.stringify(avatar));
    navigate("/student-dashboard");
  };

  const handleBack = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#f96d00] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-extrabold ">My profile</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Avatar Preview Section */}
      <div className="flex-1 flex flex-col items-center px-4">
        <div className="flex flex-row-reverse items-center justify-center gap-9">
          <div>
              <div className="pl-11 items-center justify-center">
                <AvatarPreview avatar={avatar} />
              </div>

            
              <div className="text-center text-white mt-4 mb-6">
                <h2 className="text-2xl font-bold">{nickname}</h2>
                <p className="text-white/80">Level {level}</p>
              </div>

              {/* Category Selector */}
              <CategorySelector
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div>
              {/* Nickname Input */}
              <div className="w-full max-w-md mb-6">
                <Input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="What can we call you?"
                  className=" h-12 text-center text-lg font-medium"
                />
              </div>

              {/* Item Selection Grid */}
              <div className="w-full max-w-md mt-6 mb-6">
                <ItemGrid
                  category={activeCategory}
                  selectedItem={avatar[activeCategory]}
                  onItemSelect={(item) => handleItemSelect(activeCategory, item)}
                />
              </div>
            </div>
        </div>

        <div className="pt-8 w-full flex flex-col items-center ">
          {/* Save Button */}
          <Button
            onClick={handleFinish}
            className="w-full max-w-md h-12 bg-black text-white font-semibold rounded-2xl hover:bg-black/90 mb-8"
          >
            Save & Start Learning!
          </Button>
        </div>
        
      </div>
    </div>
  );
};

export default CreateAvatar;