import type { FC } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionCardProps {
  question: string;
  options: string[];
  onAnswer: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  options,
  onAnswer,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
    setTimeout(() => {
      onAnswer(index);
      setSelectedOption(null);
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-lg hover:shadow-accent-primary/20 transition-all duration-300"
    >
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-text-secondary">
            Question {questionNumber} of {totalQuestions}
          </span>
          <motion.div 
            className="h-2 w-full max-w-[200px] bg-white/5 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
              initial={{ width: "0%" }}
              animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        
        <h2 className="text-section font-semibold text-text-primary mb-8">{question}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleOptionClick(index)}
                className={`min-h-[44px] p-4 rounded-xl text-left transition-all duration-300
                  ${selectedOption === index 
                    ? 'bg-accent-primary/20 border-2 border-accent-primary text-text-primary' 
                    : 'bg-white/5 border-2 border-white/10 text-text-primary hover:border-accent-primary/50'
                  }
                  focus:outline-none focus:ring-2 focus:ring-accent-primary/50`}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-current mr-3">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
