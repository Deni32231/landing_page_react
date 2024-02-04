import styles from "./quizStart.module.css";

type QuizStartProps = {
  getStart: () => void;
};

export default function QuizStart({ getStart }: QuizStartProps) {
  return (
    <div className={styles.quizStart__wrapper}>
      <div className={styles.quizStart}>
        <div className={styles.banner}></div>
        <span className={styles.subtitle}>
          Время прохождения опроса 3 минуты
        </span>
        <span className={styles.title}>
          Хочу безопасно и легко продать или купить квартиру
        </span>
        <button className={styles.startBtn} onClick={getStart}>
          Начать
        </button>
        <span className={styles.listTitle}>
          После завершения опроса вы получите PDF файл с содержащий:
        </span>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            Список документов, необходимых в вашем конкретном случае.
          </li>
          <li className={styles.list__item}>
            Разъяснение сложных терминов «на пальцах».
          </li>
          <li className={styles.list__item}>Оценку возможных рисков.</li>
        </ul>
      </div>
    </div>
  );
}
