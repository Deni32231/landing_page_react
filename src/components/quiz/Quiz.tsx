import styles from "./quiz.module.css";
import QuizStart from "./quizStart/QuizStart";
import QuizQuestion from "./quizQuestion/QuizQuestion";
import QuizEnd from "./quizEnd/QuizEnd";
import { QuizStatus, useQuestion } from "../../lib/hooks/useQuestion";
import Container from "../container/Container";

export default function Quiz() {
  const [question, next, status, results, getStart] = useQuestion();

  return (
    <div className={styles.quiz}>
      <Container>
        <span className={styles.title}>
          Пройдите небольшой опрос и узнайте, как избежать рисков при продаже
          или покупке квартиры
        </span>

        {status === QuizStatus.NOT_STARTED && <QuizStart getStart={getStart} />}

        {status === QuizStatus.STARTED && (
          <QuizQuestion question={question} next={next} />
        )}

        {status === QuizStatus.ENDED && <QuizEnd results={results} />}
      </Container>
    </div>
  );
}
