import Container from "../container/Container";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <a className={styles.logo} href='/'>
            <img className={styles.logo__img} src='/img/logo.svg' alt='logo' />
          </a>

          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href='#'>
                  Как продать квартиру
                </a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href='#'>
                  Истории клиентов
                </a>
              </li>
              <li className={styles.nav__item}>
                <img
                  className={styles.phoneIcon}
                  src='/img/phone.svg'
                  alt='phone icon'
                />
                <a className={styles.nav__link} href='#'>
                  + 7 495 835 47 11
                </a>
              </li>
            </ul>
          </nav>
          <a className={styles.callMeBtn} href='#'>
            Перезвоните мне
          </a>
        </div>
      </Container>
    </header>
  );
}
