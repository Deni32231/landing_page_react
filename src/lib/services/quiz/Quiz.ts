import { allQuestions } from "../../data/questions";

export function getFirstQuestion() {
  return allQuestions[0];
}

export function getRoadMap(answer: string): number[] {
  switch (answer) {
    case "Договор купли-продажи":
    case "Какие у вас правоустанавливающие документы?":
      return [1, 2, 3, 4, 5, 6, 7];

    case "Договор приватизации":
    case "Свидетельство о праве на наследство":
    case "Договор дарения":
    case "Справка ЖСК":
      return [2, 5, 6, 7];

    default:
      return [1, 2, 3, 4, 5, 6, 7];
  }
}

export function getQuestionById(id: number) {
  return allQuestions.filter((question) => question.id === id)[0];
}
