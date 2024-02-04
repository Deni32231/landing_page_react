import Container from "../container/Container";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <a className={styles.logo} href='/'>
            <img
              className={styles.logoImg}
              src='/img/footer-logo.svg'
              alt='logo'
            />
          </a>

          <ul className={styles.contacts}>
            <li className={styles.contacts__item}>
              <img
                className={styles.contacts__img}
                src='/img/geo.svg'
                alt='geo icon'
              />
              <span className={styles.contacts__text}>
                г. Москва, Красная площадь д.1
              </span>
            </li>
            <li className={styles.contacts__item}>
              <img
                className={styles.contacts__img}
                src='/img/phone.svg'
                alt='phone icon'
              />
              <span className={styles.contacts__text}>+ 7 495 835 47 11</span>
            </li>
          </ul>

          <ul className={styles.workTime}>
            <li className={styles.workTime__title}>
              <img
                className={styles.workTime__titleImg}
                src='/img/watch.svg'
                alt='watch svg'
              />
              <span className={styles.workTime__titleText}>Режим работы</span>
            </li>
            <li className={styles.workTime__item}>
              Пн. - Пт. - с 9:00 до 17:00
            </li>
            <li className={styles.workTime__item}>
              Сб. - Вс. - с 9:00 до 17:00
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
