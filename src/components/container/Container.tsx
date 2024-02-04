import styles from "./container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className={styles.root}>{children}</div>;
}
