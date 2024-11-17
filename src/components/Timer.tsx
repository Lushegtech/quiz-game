import type { FunctionComponent } from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
}

const Timer: FunctionComponent<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isWarning, setIsWarning] = useState(false);
  const intervalRef = useRef<number>();

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          onTimeUp();
          return 0;
        }
        if (prev <= 5) {
          setIsWarning(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [onTimeUp]);

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="text-center mb-2">
        <span className={`text-xl font-semibold ${
          isWarning ? 'text-red-600' : 'text-gray-700'
        }`}>
          Time Remaining: {timeLeft}s
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${isWarning ? 'bg-red-500' : 'bg-green-500'}`}
          initial={{ width: "100%" }}
          animate={{ width: `${(timeLeft / duration) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default Timer;
