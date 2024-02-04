import { useState } from "react";
import { Question } from "../../../lib/data/questions";

import styles from "./quizQuestion.module.css";

type QuizQuestionProps = {
  question: Question;
  next: (answer: string) => void;
};

export default function QuizQuestion({ question, next }: QuizQuestionProps) {
  const { answers, title } = question;

  const [userAnswer, setUserAnswer] = useState<string>("");

  function getNextQuestions() {
    if (userAnswer === "") return;
    next(userAnswer);
    setUserAnswer("");
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.questionNumber}>Вопрос 1</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.answers}>
        {answers.map((answer, index) => (
          <label className={styles.answers__label} key={index}>
            <input
              className={styles.answers__input}
              type='radio'
              name='answer'
              value={answer}
              checked={userAnswer === answer || false}
              onChange={(event) => setUserAnswer(event.target.value)}
            />
            <span className={styles.answers__text}>{answer}</span>
          </label>
        ))}
      </div>
      <button className={styles.nextBtn} onClick={getNextQuestions}>
        Далее
      </button>
    </div>
  );
}
