import Container from "../container/Container";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Container>
        <div className={styles.inner}>
          <span className={styles.subtitle}>
            Запутались в сложных терминах и документах?
          </span>
          <span className={styles.title}>
            Узнайте, какие документы подготовить и что учесть при продаже и
            покупке квартиры
          </span>
          <a className={styles.button} href='#'>
            Хочу знать больше
          </a>
        </div>
      </Container>
    </div>
  );
}
