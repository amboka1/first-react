import { Counter } from "../components/Counter/counter"
import styles from "../page.module.css"
export default () => {
    return (
        <main className={styles.main}>
            <Counter />
        </main>
    )
}