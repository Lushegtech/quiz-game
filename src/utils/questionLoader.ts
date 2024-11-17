export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
  }
  
  export async function loadQuestions(): Promise<Question[]> {
    try {
      const questions = await import('../data/question.json');
      return questions.questions;
    } catch (error) {
      console.error('Error loading questions:', error);
      return [];
    }
  }