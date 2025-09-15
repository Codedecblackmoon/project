import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import StoryCard from "./StoryCard";
import MiniGameCard from "./MiniGameCard";
import { useEffect, useState } from "react";

const StudentDashboard = () => {
  const [studentName, setStudentName] = useState("Student");
  const [grade, setGrade] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("studentName");
    const savedGrade = localStorage.getItem("studentGrade");

    if (savedName) setStudentName(savedName);
    if (savedGrade) setGrade(savedGrade);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full p-1">
              <img
                src="/lovable-uploads/55840e5c-afc6-4e2c-ba39-1785cb971340.png"
                alt="BulaBooks"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-bold">BulaBooks</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white">
              📩 0
            </Button>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              👦
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">
                Welcome back, {studentName}!
              </h1>
              <p className="opacity-90">
                Ready for another reading adventure
                {grade ? ` in Grade ${grade}?` : "?"}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-80">Level 5</div>
              <div className="text-lg font-bold">1,250 XP</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Story Adventures */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Story Adventures
                </h2>
                <Button variant="link" className="text-orange-600">
                  View All →
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StoryCard
                  title="The Brave Little Lion"
                  image="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300&h=200&fit=crop"
                  status="continue"
                  progress={65}
                  level="Level 3"
                />
                <StoryCard
                  title="Rainbow Castle Adventure"
                  image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop"
                  status="new"
                  level="Level 4"
                />
                <StoryCard
                  title="Ocean Friends"
                  image="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
                  status="completed"
                  level="Level 2"
                />
              </div>
            </div>

            {/* Mini Games */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Mini Games</h2>
                <Button variant="link" className="text-orange-600">
                  View All →
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MiniGameCard
                  title="Word Puzzle"
                  icon="🧩"
                  color="bg-purple-500"
                  xp={50}
                  difficulty="Easy"
                />
                <MiniGameCard
                  title="Rhyme Time"
                  icon="🎵"
                  color="bg-blue-500"
                  xp={75}
                  difficulty="Medium"
                />
                <MiniGameCard
                  title="Speed Read"
                  icon="⚡"
                  color="bg-orange-500"
                  xp={100}
                  difficulty="Hard"
                />
                <MiniGameCard
                  title="Voice Match"
                  icon="🎤"
                  color="bg-pink-500"
                  xp={60}
                  difficulty="Easy"
                />
              </div>
            </div>

            {/* Co-op Adventures */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Co-op Adventures
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-100 rounded-2xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      T
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        Team Story Quest
                      </h3>
                      <p className="text-sm text-gray-600">
                        Adventure with friends
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-purple-500 text-white">
                      Join Quest
                    </Button>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="bg-green-100 rounded-2xl p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      B
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Reading Buddy</h3>
                      <p className="text-sm text-gray-600">
                        Read together online
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-500 text-white">
                      Find Buddy
                    </Button>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Together */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Play Together
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      📚
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        Reading Buddies
                      </h3>
                      <p className="text-sm text-gray-600">
                        Learn with family and friends
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-blue-500 text-white">
                    Join Session
                  </Button>
                </div>

                <div className="bg-white rounded-2xl p-4 shadow-sm border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      🎮
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Coming Soon</h3>
                      <p className="text-sm text-gray-600">
                        More multiplayer games!
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Notify Me
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Stats */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Your Progress</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Reading Speed</span>
                    <span>125 WPM</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Stories Read</span>
                    <span>23/40</span>
                  </div>
                  <Progress value={58} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Streak</span>
                    <span>7 days</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </div>

            {/* Recent Badges */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Recent Badges</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl mb-1">
                    🏆
                  </div>
                  <div className="text-xs font-medium">First Story</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-1">
                    📖
                  </div>
                  <div className="text-xs font-medium">Speed Reader</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl mb-1">
                    🔥
                  </div>
                  <div className="text-xs font-medium">7-Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl mb-1">
                    ⭐
                  </div>
                  <div className="text-xs font-medium">Star Learner</div>
                </div>
              </div>
            </div>

            {/* Class Ranking */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Class Ranking</h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    1
                  </div>
                  <span className="text-sm font-medium">Emma</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    2,150 XP
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    2
                  </div>
                  <span className="text-sm font-medium">You</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    1,250 XP
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    3
                  </div>
                  <span className="text-sm font-medium">James</span>
                  <span className="text-xs text-gray-500 ml-auto">
                    1,100 XP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;