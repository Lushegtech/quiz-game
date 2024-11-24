import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import QuestionCard from "./QuestionCard";
import Timer from "./Timer";
import FeedbackModal from "./FeedbackModal";
import ScoreDisplay from "./ScoreDisplay";
import LoadingSpinner from "./LoadingSpinner";
import { loadQuestions } from "../utils/questionLoader";
import type { Question } from "../utils/questionLoader";

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  
  useEffect(() => {
    const initQuiz = async () => {
      const loadedQuestions = await loadQuestions();
      setQuestions(loadedQuestions);
      setLoading(false);
      startTimeRef.current = Date.now();
    };
    initQuiz();
  }, []);

  const updateTimeSpent = () => {
    const currentTime = Date.now();
    const timeElapsed = Math.floor((currentTime - startTimeRef.current) / 1000);
    setTimeSpent(timeElapsed);
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedIndex: number): void => {
    if (!currentQuestion) return;
    const isCorrectAnswer = selectedIndex === currentQuestion.correctAnswer;
    setIsCorrect(isCorrectAnswer);
    setScore((prev) => (isCorrectAnswer ? prev + 1 : prev));
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      updateTimeSpent();
      setQuizCompleted(true);
    }
  };

  const handleTimeUp = () => {
    updateTimeSpent();
    setQuizCompleted(true);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      {!quizCompleted ? (
        <div className="max-w-4xl mx-auto">
          <Timer 
            duration={30} 
            onTimeUp={handleTimeUp}
          />
          {currentQuestion && (
            <QuestionCard
              question={currentQuestion.text}
              options={currentQuestion.options}
              onAnswer={handleAnswer}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          )}
          <FeedbackModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            isCorrect={isCorrect}
            correctAnswer={currentQuestion?.options[currentQuestion?.correctAnswer] || ''}
          />
        </div>
      ) : (
        <ScoreDisplay 
          score={score} 
          totalQuestions={questions.length}
          timeSpent={timeSpent}
        />
      )}
    </motion.div>
  );
};

export default QuizPage;
