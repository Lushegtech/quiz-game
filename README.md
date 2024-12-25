# Quiz Game

This application is built using **Astro**,**TypeScript**, **React**, and **Tailwind CSS** for a user-centric quiz experience. Features include:

- **Leaderboard** to display top scores.
- **Timer** for added challenge.
- **Feedback modal** to collect user insights.
- **Responsive design** for seamless interaction on any device.

---

## Getting Started

To set up the project locally:

**Clone the repository**:
   ```bash
   git clone https://github.com/Lushegtech/quiz-game
   cd quiz-game
```

**Install dependencies**:
```
npm install
```
**Run the development server**:

```bash
npm run dev
```
**Project Directory**
```bash

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


```

```bash

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


