import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Eye, Scissors, Shirt, Glasses, Edit } from "lucide-react";
import AvatarDisplay from "@/components/avatar/AvatarDisplay";
import CategorySelector from "@/components/avatar/CategorySelector";
import ItemGrid from "@/components/avatar/ItemGrid";
import { AvatarCategory, AvatarState } from "@/pages/CreateAvatar";

const ProfilePage = () => {
  const navigate = useNavigate();
  
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AvatarCategory>('base');
  
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
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

  useEffect(() => {
    // Load saved data from localStorage
    const savedName = localStorage.getItem("studentName");
    const savedEmail = localStorage.getItem("studentEmail");
    const savedGrade = localStorage.getItem("studentGrade");
    const savedAvatar = localStorage.getItem("avatar");
    
    if (savedName) setNickname(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedGrade) setGrade(savedGrade);
    if (savedAvatar) {
      try {
        setAvatar(JSON.parse(savedAvatar));
      } catch (error) {
        console.error("Error parsing saved avatar:", error);
      }
    }
  }, []);

  const handleItemSelect = (category: AvatarCategory, item: string) => {
    setAvatar(prev => ({
      ...prev,
      [category]: item
    }));
  };

  const handleSaveAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
    setIsEditingAvatar(false);
  };

  const handleSaveProfile = () => {
    localStorage.setItem("studentName", nickname);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentGrade", grade);
    setIsEditingProfile(false);
  };

  const handleBack = () => {
    navigate("/student-dashboard");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 shadow-md flex justify-between items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="text-white hover:bg-white/20"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-bold">My Profile</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      <div className="flex-1 p-4 space-y-6">
        {/* Avatar Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Avatar</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditingAvatar(!isEditingAvatar)}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              {isEditingAvatar ? "Cancel" : "Edit Avatar"}
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <AvatarDisplay avatar={avatar} />
            
            <div className="text-center mt-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-800">{nickname}</h3>
              <p className="text-gray-600">Level {level}</p>
            </div>

            {isEditingAvatar && (
              <div className="w-full space-y-4">
                <CategorySelector
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
                
                <ItemGrid
                  category={activeCategory}
                  selectedItem={avatar[activeCategory]}
                  onItemSelect={(item) => handleItemSelect(activeCategory, item)}
                />
                
                <Button
                  onClick={handleSaveAvatar}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Save Avatar
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Information Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              {isEditingProfile ? "Cancel" : "Edit Profile"}
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="nickname" className="text-sm font-medium text-gray-700">
                Name
              </Label>
              {isEditingProfile ? (
                <Input
                  id="nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900">{nickname || "Not set"}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              {isEditingProfile ? (
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              ) : (
                <p className="mt-1 text-gray-900">{email || "Not set"}</p>
              )}
            </div>

            <div>
              <Label htmlFor="grade" className="text-sm font-medium text-gray-700">
                Grade
              </Label>
              {isEditingProfile ? (
                <select
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="mt-1 w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select Grade</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                </select>
              ) : (
                <p className="mt-1 text-gray-900">{grade ? `Grade ${grade}` : "Not set"}</p>
              )}
            </div>

            {isEditingProfile && (
              <Button
                onClick={handleSaveProfile}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Save Profile
              </Button>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">My Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">1,250</div>
              <div className="text-sm text-gray-600">Total XP</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-600">Badges Earned</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Stories Read</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">Level {level}</div>
              <div className="text-sm text-gray-600">Current Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;