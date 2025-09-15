# BulaBooks – Read. Play. Speak. Grow.

BulaBooks is a **multilingual, gamified literacy app** designed for South African learners (Grades 3–7). It provides **fun story adventures, mini-games, speech practice, and progress tracking** for learners, while teachers access a **powerful dashboard with analytics, assignments, and student insights**.

---

## Features

### Teacher Features

* Secure teacher login
* Dashboard with class analytics (progress, struggles, performers)
* Student management (view learners, track badges, XP, activity)
* Assign stories, quizzes, and mini-games
* Generate/export progress reports (PDF/CSV)
* Weekly class summaries with recommendations

### Student Features

* Avatar creation & personalization
* Story Library (Read, Listen, Record modes)
* Literacy mini-games: Word Puzzle, Rhyme Time, Speed Read, Voice Match
* Cooperative learning (Reading Buddy, Team Story Quest)
* Gamification: XP, badges, levels, streaks, leaderboards
* Daily challenges and rewards
* Progress tracker with stats & achievements

### Core System Features

* Authentication: Email/password + Google Sign-in
* Role-based dashboards (Student vs Teacher)
* Multilingual support: English, Setswana, isiZulu, Afrikaans (expandable)
* Speech recognition for pronunciation practice
* Parental PIN for safety and control

---

## Design & Branding

* **Primary Color:** Orange gradient (#FF6A00 → #FF9500)
* **Secondary Colors:** White, Cream (#FFF5E5), Light Grey
* **Accents:** Black CTAs + colorful game cards
* **Style:** Rounded corners, playful icons, friendly UI, smooth transitions
* **Typography:** Large, high-contrast fonts for readability

---

## App Flow

### Onboarding

1. Welcome Screen → Login / Sign Up
2. Role Selection (Student / Teacher)
3. Login with Google or Email/Password
4. Student onboarding → Avatar, Name, Grade, Parental PIN

### Student Hub

* Read → Story Adventures & Library
* Play → Gamified literacy mini-games
* Speak → Pronunciation practice with AI
* Explore → Extra resources, challenges

### Teacher Hub

* Dashboard overview: Total Students, Active Today, Class Average, Badges
* Analytics charts: Progress bars, Language performance, Struggles
* Assignments: Create new tasks and games
* Reports: Export class or individual progress

---

## Tech Stack (Suggested)

* **Frontend:** React Native / Expo
* **Backend:** Node.js (Express) / Firebase
* **Database:** Supabase 
* **Auth:** Supabase Auth / Google OAuth
* **Charts & Analytics:** Recharts / Victory Charts
* **Speech Recognition:** Google Speech-to-Text API

---

## Installation

```bash
# Clone the repository
git clone https://github.com/Boitumellow012/bula-play-learn.git

# Navigate to project folder
cd bula-play-learn

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## Roadmap

* [ ] Expand language support (Xitsonga, Sesotho, isiXhosa, etc.)
* [ ] Add Parent Portal with insights
* [ ] Offline mode for low-connectivity areas
* [ ] AI-powered personalized story recommendations
* [ ] Teacher collaboration features

---


## 📄 License

This project is licensed under the MIT License.

---