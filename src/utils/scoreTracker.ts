interface HighScore {
  name: string;
  score: number;
  date: string;
  timeSpent: number;
}

const HIGH_SCORES_KEY = 'quiz_high_scores';
const MAX_HIGH_SCORES = 10;

export const saveScore = (score: number, timeSpent: number): void => {
  if (typeof window === 'undefined') return;

  const name = prompt('Congratulations! Enter your name for the leaderboard:');
  if (!name) return;

  const newScore: HighScore = {
    name,
    score,
    date: new Date().toISOString(),
    timeSpent
  };

  const existingScores = getHighScores();
  existingScores.push(newScore);
  
  // Sort by score (descending) and time spent (ascending)
  existingScores.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.timeSpent - b.timeSpent;
  });

  // Keep only top scores
  const topScores = existingScores.slice(0, MAX_HIGH_SCORES);
  localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(topScores));
};

export const getHighScores = (): HighScore[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const scores = localStorage.getItem(HIGH_SCORES_KEY);
    return scores ? JSON.parse(scores) : [];
  } catch (error) {
    console.error('Error reading scores from localStorage:', error);
    return [];
  }
};
