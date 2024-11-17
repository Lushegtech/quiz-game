import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import type { FC } from "react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  isCorrect: boolean;
  correctAnswer: string;
  explanation?: string;
}

const FeedbackModal: FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  isCorrect,
  correctAnswer,
  explanation
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            
            <Dialog.Panel
              as={motion.div}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <div className={`flex items-center justify-center mb-4 ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}>
                {isCorrect ? (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </motion.svg>
                )}
              </div>

              <Dialog.Title
                as="h3"
                className="text-xl font-medium text-center leading-6 text-gray-900 mb-4"
              >
                {isCorrect ? "Correct! 🎉" : "Not quite right 😅"}
              </Dialog.Title>

              {!isCorrect && (
                <p className="text-sm text-gray-500 mb-4">
                  The correct answer was: <span className="font-semibold">{correctAnswer}</span>
                </p>
              )}

              {explanation && (
                <p className="text-sm text-gray-600 mb-4">{explanation}</p>
              )}

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
                  onClick={onClose}
                >
                  Continue
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;