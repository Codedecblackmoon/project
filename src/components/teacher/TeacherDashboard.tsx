import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TeacherDashboard = () => {
  // Sample data for charts
  const skillsData = [
    { skill: 'Vocabulary', score: 85 },
    { skill: 'Reading', score: 78 },
    { skill: 'Pronunciation', score: 92 },
    { skill: 'Fluency', score: 71 },
  ];

  const languageData = [
    { name: 'English', value: 45, color: 'hsl(var(--game-blue))' },
    { name: 'isiZulu', value: 25, color: 'hsl(var(--game-purple))' },
    { name: 'Setswana', value: 20, color: 'hsl(var(--game-orange))' },
    { name: 'Afrikaans', value: 10, color: 'hsl(var(--game-red))' },
  ];

  const topPerformers = [
    { name: 'Sarah M.', score: 95, badges: 12 },
    { name: 'Alex K.', score: 89, badges: 8 },
    { name: 'Thabo N.', score: 87, badges: 10 },
    { name: 'Emma L.', score: 84, badges: 7 },
    { name: 'Sipho D.', score: 82, badges: 9 },
  ];

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <img 
                src="/lovable-uploads/55840e5c-afc6-4e2c-ba39-1785cb971340.png" 
                alt="BulaBooks"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-bold">BulaBooks Teacher</div>
              <div className="text-sm opacity-90">Grade 4A • Mrs. Johnson</div>
            </div>
          </div>
          
          <Button variant="hero-outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            + New Assignment
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Top Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-gradient-card shadow-card border-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">28</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-card shadow-card border-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-game-blue">24</div>
              <div className="text-sm text-muted-foreground">Active Today</div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-card shadow-card border-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-game-purple">78%</div>
              <div className="text-sm text-muted-foreground">Class Avg Score</div>
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-card shadow-card border-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-game-orange">142</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Class Progress Chart */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-lg font-bold text-foreground mb-4">Class Progress</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={skillsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="skill" />
                  <YAxis />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Language Performance */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-lg font-bold text-foreground mb-4">Language Performance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {languageData.map((lang, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: lang.color }}
                  ></div>
                  <span className="text-sm">{lang.name} {lang.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Common Struggles */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-lg font-bold text-foreground mb-4">Areas of Concern</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Reading Fluency</span>
                <Badge variant="destructive">6 students</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Pronunciation</span>
                <Badge variant="destructive">4 students</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Comprehension</span>
                <Badge variant="destructive">3 students</Badge>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-lg font-bold text-foreground mb-4">Recommendations</h3>
            <div className="space-y-3">
              <div className="p-3 bg-game-blue/10 rounded-lg">
                <div className="text-sm font-medium">Focus on Phonics</div>
                <div className="text-xs text-muted-foreground">Assign rhyme-time games</div>
              </div>
              <div className="p-3 bg-game-purple/10 rounded-lg">
                <div className="text-sm font-medium">Reading Practice</div>
                <div className="text-xs text-muted-foreground">More story assignments</div>
              </div>
              <div className="p-3 bg-game-orange/10 rounded-lg">
                <div className="text-sm font-medium">Group Activities</div>
                <div className="text-xs text-muted-foreground">Team story quests</div>
              </div>
            </div>
          </Card>

          {/* Top Performers */}
          <Card className="p-6 bg-gradient-card shadow-card border-0">
            <h3 className="text-lg font-bold text-foreground mb-4">Top Performers</h3>
            <div className="space-y-3">
              {topPerformers.map((student, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{student.name}</div>
                      <div className="text-xs text-muted-foreground">{student.badges} badges</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-foreground">{student.score}%</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Weekly Summary */}
        <Card className="p-6 bg-gradient-card shadow-card border-0">
          <h3 className="text-lg font-bold text-foreground mb-6">Weekly Class Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">This Week's Highlights</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 23 students completed daily reading goals</li>
                <li>• Average reading speed improved by 8%</li>
                <li>• 15 new badges were earned</li>
                <li>• Voice recognition accuracy: 89%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Next Week's Focus</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Introduce new folktale collection</li>
                <li>• Focus on comprehension activities</li>
                <li>• Schedule parent-teacher conferences</li>
                <li>• Plan group reading challenges</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;