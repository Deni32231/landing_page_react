import { useState } from "react";
import {
  getFirstQuestion,
  getQuestionById,
  getRoadMap,
} from "../services/quiz/Quiz";
import { Question } from "../data/questions";

export enum QuizStatus {
  NOT_STARTED,
  STARTED,
  ENDED,
}

export type Result = {
  question: Question;
  answer: string;
};

export function useQuestion() {
  const firstQuestion = getFirstQuestion();

  const [question, setQuestion] = useState<Question>(firstQuestion);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [roadMap, setRoadMap] = useState<number[]>([]);
  const [status, setStatus] = useState<QuizStatus>(QuizStatus.NOT_STARTED);
  const [results, setResults] = useState<Result[]>([]);

  console.log(roadMap.length, currentIndex);

  function next(answer: string) {
    setResults([...results, { question, answer }]);

    let currentRoadMap = roadMap;
    if (currentRoadMap.length === 0) {
      currentRoadMap = getRoadMap(answer);
      setRoadMap(currentRoadMap);
    }

    if (currentIndex + 1 === currentRoadMap.length) {
      setStatus(QuizStatus.ENDED);
      return;
    }

    const nextCurrentIndex = currentIndex + 1;
    setCurrentIndex(nextCurrentIndex);

    const nextQuestionId = currentRoadMap[nextCurrentIndex];

    setQuestion(getQuestionById(nextQuestionId));
  }

  function getStart() {
    setStatus(QuizStatus.STARTED);
  }

  return [question, next, status, results, getStart] as const;
}
