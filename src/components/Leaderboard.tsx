import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getHighScores } from '../utils/scoreTracker';
import type { FC } from 'react';
import '../styles/globals.css';

interface HighScore {
  name: string;
  score: number;
  date: string;
  timeSpent: number;
}

const Leaderboard: FC = () => {
  const [scores, setScores] = useState<HighScore[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize scores after component mounts (client-side only)
    setScores(getHighScores());
    setIsLoading(false);

    // Update scores if they change
    const updateScores = () => {
      setScores(getHighScores());
    };
    window.addEventListener('storage', updateScores);
    return () => window.removeEventListener('storage', updateScores);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {scores.length > 0 ? (
          <table className="w-full">
            <thead className="bg-primary-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Rank</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Score</th>
                <th className="px-6 py-3 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <motion.tr
                  key={`${score.name}-${score.date}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{score.name}</td>
                  <td className="px-6 py-4">{score.score}</td>
                  <td className="px-6 py-4">{score.timeSpent}s</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No scores yet. Be the first to play!
          </div>
        )}
      </div>
      <div className="text-center mt-8">
        <a
          href="/quiz"
          className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Play Quiz
        </a>
      </div>
    </motion.div>
  );
};

export default Leaderboard;