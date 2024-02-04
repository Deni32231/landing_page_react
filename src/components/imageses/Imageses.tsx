import Container from "../container/Container";
import styles from "./imageses.module.css";

export default function Imageses() {
  return (
    <div>
      <Container>
        <div className={styles.inner}>
          <img src='/img/imageses-1.svg' alt='' />
          <img src='/img/imageses-2.svg' alt='' />
          <img src='/img/imageses-3.svg' alt='' />
        </div>
      </Container>
    </div>
  );
}
