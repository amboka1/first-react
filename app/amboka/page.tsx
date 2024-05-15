import AmbokasBtn from "../components/ambkBtn/AmbokasBtn";
import styles from '../page.module.css'

export default function Amboka() {
    const user = 'Dato';
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <AmbokasBtn title="რეგისტრაცია"  userIsRegistred={user} />
            </div>
        </main>
    )
}