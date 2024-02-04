import { Result } from "../../../lib/hooks/useQuestion";

import styles from "./quizEnd.module.css";

type QuizEndProps = {
  results: Result[];
};

export default function QuizEnd({ results }: QuizEndProps) {
  console.log(results);

  return (
    <div className={styles.wrapper}>
      <div className={styles.flexWrapper}>
        <span className={styles.title}>Ваш персональный отчет готов!</span>
        <button className={styles.downloadBtn}>Скачать</button>
        <span className={styles.text}>Или</span>
        <span className={styles.inputHelpText}>
          Получите файл на ваш электронный адрес
        </span>
        <input className={styles.input} type='text' placeholder='Email' />
        <button className={styles.sendBtn}>Отправить</button>
      </div>
    </div>
  );
}
