import type { FunctionComponent } from "react";
import { useEffect } from "react";
import confetti from 'canvas-confetti';
import { motion } from "framer-motion";
import { Trophy, Star, Award, Clock } from 'lucide-react';
import { saveScore } from "../utils/scoreTracker";

interface ScoreDisplayProps {
  score: number;
  totalQuestions: number;
  timeSpent: number;
}

const formatTime = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} seconds`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return remainingSeconds > 0 
    ? `${minutes}m ${remainingSeconds}s`
    : `${minutes} minutes`;
};

const ScoreDisplay: FunctionComponent<ScoreDisplayProps> = ({ 
  score, 
  totalQuestions,
  timeSpent
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  useEffect(() => {
    if (percentage > 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    saveScore(percentage, timeSpent);
  }, [percentage, timeSpent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-8">
        <div className="flex justify-center mb-6">
          {percentage >= 80 ? (
            <Trophy className="w-16 h-16 text-yellow-500" />
          ) : percentage >= 60 ? (
            <Star className="w-16 h-16 text-silver-500" />
          ) : (
            <Award className="w-16 h-16 text-bronze-500" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Quiz Complete!</h2>
        
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-primary-600 mb-2">
            {percentage}%
          </div>
          <p className="text-gray-600 mb-2">
            You got {score} out of {totalQuestions} questions correct
          </p>
          <div className="flex items-center justify-center text-gray-600 mt-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>Completed in {formatTime(timeSpent)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <motion.div
            className="w-full bg-gray-200 rounded-full h-4 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
          >
            <motion.div
              className={`h-full rounded-full ${
                percentage >= 80 ? 'bg-green-500' :
                percentage >= 60 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              initial={{ width: "0%" }}
              animate={{ width: `${percentage}%` }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>
          <div className="flex justify-center space-x-4">
            <a
              href="/quiz"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Try Again
            </a>
            <a
              href="/leaderboard"
              className="px-6 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
            >
              View Leaderboard
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScoreDisplay;
