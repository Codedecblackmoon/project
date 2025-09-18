import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [studentName, setStudentName] = useState("Student");
  const [grade, setGrade] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("studentName");
    const savedGrade = localStorage.getItem("studentGrade");
    if (savedName) setStudentName(savedName);
    if (savedGrade) setGrade(savedGrade);
  }, []);

  // Function to handle story reading
  const handleReadStory = (storyId: string) => {
    navigate(`/story/${storyId}`);
  };

  // Function to handle game playing
  const handlePlayGame = (gameId: string) => {
    navigate(`/game/${gameId}`);
  };

  // Function to handle speaking practice
  const handleSpeakPractice = () => {
    navigate("/speak-practice");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-lg font-bold">BulaBooks 📚</h1>
          <div 
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg shadow-md cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/profile")}
          >
            👦
          </div>{/* avatar */}
        </div>
      </header>

      {/* Main Tabs (Read, Play, Speak, Explore) */}
      <Tabs defaultValue="read" className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-4 bg-white rounded-none border-b sticky top-0 z-10">
          <TabsTrigger value="read" className="text-sm md:text-base transition-all hover:bg-orange-100 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">📖 Read</TabsTrigger>
          <TabsTrigger value="play" className="text-sm md:text-base transition-all hover:bg-orange-100 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">🎮 Play</TabsTrigger>
          <TabsTrigger value="speak" className="text-sm md:text-base transition-all hover:bg-orange-100 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">🎤 Speak</TabsTrigger>
          <TabsTrigger value="explore" className="text-sm md:text-base transition-all hover:bg-orange-100 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-600">🌍 Explore</TabsTrigger>
        </TabsList>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Read Tab */}
          <TabsContent value="read" className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Hello, {studentName}!</h1>
                <p className="opacity-90 text-sm">
                  Ready for another story adventure
                  {grade ? ` in Grade ${grade}?` : "?"}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-80">Level 5</div>
                <div className="text-lg font-bold">1,250 XP</div>
              </div>
            </div>

            {/* Story Library */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Story Library</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: "too-small",
                    title: "You're too small",
                    cover: "/books_Upload/Too small 1.png",
                    desc: "Mama Tau was coming home! She had been away for a long time studying...",
                  },
                  {
                    id: "thokos-library",
                    title: "Thoko's first library book",
                    cover: "/books_Upload/Thokos library1.png",
                    desc: "Thoko walked into the library with Gogo. She liked the smell of the new building...",
                  },
                  {
                    id: "no-price",
                    title: "There is no price for being kind",
                    cover: "/books_Upload/No Price1.png",
                    desc: "In a village far away, there lived a very poor boy who herded sheep to feed his family...",
                  },
                ].map((story) => (
                  <Card 
                    key={story.id} 
                    className="flex gap-4 items-center p-3 shadow-sm rounded-xl hover:shadow-md transition-all cursor-pointer"
                    onClick={() => handleReadStory(story.id)}
                  >
                    <img
                      src={story.cover}
                      alt={story.title}
                      className="w-20 h-28 rounded-lg object-cover"
                    />
                    <CardContent className="p-0 flex-1">
                      <h3 className="font-bold text-base">{story.title}</h3>
                      <p className="text-xs text-gray-600">{story.desc}</p>
                      <Button
                        size="sm"
                        className="mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all"
                      >
                        Read →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Play Tab */}
          <TabsContent value="play">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Mini Games</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: "word-puzzle", title: "Word Puzzle", icon: "🧩", color: "bg-purple-500 hover:bg-purple-600" },
                { id: "rhyme-time", title: "Rhyme Time", icon: "🎵", color: "bg-blue-500 hover:bg-blue-600" },
                { id: "speed-read", title: "Speed Read", icon: "⚡", color: "bg-orange-500 hover:bg-orange-600" },
                { id: "voice-match", title: "Voice Match", icon: "🎤", color: "bg-pink-500 hover:bg-pink-600" },
              ].map((game) => (
                <div
                  key={game.id}
                  className={`rounded-xl p-4 text-white shadow-md ${game.color} flex flex-col items-center cursor-pointer transition-all hover:scale-105`}
                  onClick={() => handlePlayGame(game.id)}
                >
                  <div className="text-3xl">{game.icon}</div>
                  <h3 className="mt-2 font-bold text-center">{game.title}</h3>
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="mt-2 rounded-full bg-white text-gray-800 hover:bg-gray-100"
                  >
                    Play
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Speak Tab */}
          <TabsContent value="speak">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Speak Practice</h2>
            <Card className="p-6 text-center shadow-md rounded-xl hover:shadow-lg transition-all cursor-pointer" onClick={handleSpeakPractice}>
              <div className="text-5xl mb-4">🎤</div>
              <p className="text-sm text-gray-700 mb-4">
                Practice your pronunciation with AI!
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all">
                Start Speaking
              </Button>
            </Card>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Recent Practices</h3>
            <div className="grid gap-3">
              {[
                { word: "Elephant", score: 85 },
                { word: "Butterfly", score: 72 },
                { word: "Adventure", score: 90 },
              ].map((practice, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="font-medium">{practice.word}</span>
                  <div className="flex items-center">
                    <span className="text-sm mr-2">{practice.score}%</span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${practice.score > 80 ? 'bg-green-500' : practice.score > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${practice.score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Explore Tab */}
          <TabsContent value="explore">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Explore Challenges</h2>
            <div className="grid gap-4">
              <Card className="p-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate('/challenges/daily')}>
                <h3 className="font-bold flex items-center">Daily Challenge <span className="ml-2">🌟</span></h3>
                <p className="text-xs text-gray-600">Read 2 stories today!</p>
                <div className="mt-2 flex items-center">
                  <Progress value={50} className="h-2 mr-2" />
                  <span className="text-xs">1/2 completed</span>
                </div>
              </Card>
              <Card className="p-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate('/challenges/weekly')}>
                <h3 className="font-bold flex items-center">Weekly Quest <span className="ml-2">🚀</span></h3>
                <p className="text-xs text-gray-600">Earn 500 XP this week.</p>
                <div className="mt-2 flex items-center">
                  <Progress value={75} className="h-2 mr-2" />
                  <span className="text-xs">375/500 XP</span>
                </div>
              </Card>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { title: "Bookworm", icon: "📖", earned: true },
                { title: "Storyteller", icon: "🎭", earned: true },
                { title: "Word Master", icon: "🔠", earned: false },
                { title: "Speed Reader", icon: "⚡", earned: false },
              ].map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg text-center ${achievement.earned ? 'bg-yellow-100 border border-yellow-300' : 'bg-gray-100 opacity-60'}`}
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <p className="text-xs font-medium">{achievement.title}</p>
                  <span className="text-xs">{achievement.earned ? 'Earned!' : 'Locked'}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>

      {/* Footer XP + Navigation */}
      <footer className="bg-white border-t p-3 flex justify-around items-center text-sm">
        <span className="flex items-center font-bold">⭐ <span className="ml-1">XP: 1250</span></span>
        <Button 
          variant="ghost" 
          className="flex items-center text-xs"
          onClick={() => navigate('/badges')}
        >
          🏆 <span className="ml-1">Badges</span>
        </Button>
        <Button 
          variant="ghost" 
          className="flex items-center text-xs"
          onClick={() => navigate('/progress')}
        >
          📊 <span className="ml-1">Progress</span>
        </Button>
      </footer>
    </div>
  );
};

export default StudentDashboard;