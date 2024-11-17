# 📚 Quiz Game Project

Welcome to the **Quiz Game** project! This application uses **Astro**, **React**, and **Tailwind CSS** to deliver a dynamic, visually appealing quiz experience. Features include:

- 🏆 **Leaderboard** to display top scores.
- ⏳ **Timer** for added challenge.
- 📝 **Feedback modal** to collect user insights.
- 📱 **Responsive design** for seamless interaction on any device.

---

## 🚀 Getting Started

To set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd quiz-game

Install dependencies:

npm install
Run the development server:

npm run dev

/
├── public/                   # Static assets (images, favicon, etc.)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Card.astro        # Quiz card component
│   │   ├── FeedbackModal.tsx # User feedback modal
│   │   ├── Footer.tsx        # Footer section
│   │   ├── Leaderboard.tsx   # Leaderboard display
│   │   ├── LoadingSpinner.tsx # Loading spinner for async actions
│   │   ├── QuestionCard.tsx  # Quiz question card
│   │   ├── QuizPage.tsx      # Main quiz page logic
│   │   ├── ScoreDisplay.tsx  # Displays the user's score
│   │   └── Timer.tsx         # Countdown timer
│   ├── data/                 # Quiz data and other static content
│   ├── layouts/              # Layout components for consistent design
│   │   └── MainLayout.tsx    # Wrapper for pages
│   ├── pages/                # Page components
│   │   ├── index.astro       # Home page
│   │   ├── leaderboard.astro # Leaderboard page
│   │   └── quiz.astro        # Quiz page
│   ├── styles/               # Global and component-specific styles
│   └── utils/                # Utility functions
├── .vscode/                  # VSCode editor settings
├── astro.config.mjs          # Astro configuration file
├── postcss.config.js         # PostCSS configuration file
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Documentation for the project

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


