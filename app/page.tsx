import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Button title="რეგისტრაცია" mode="outline" icon />
      </div>
    </main>
  );
}
