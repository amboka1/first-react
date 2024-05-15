'use client'
import styles from "./counter.module.scss"
import { useState } from "react"

export const Counter = () => {
    
    const classesForMomateba = [styles.button]
    const classesForDakleba = [styles.button]
    const [counter, setCounter] = useState(0);

    const momateba = () => {
        if(counter < 10) {
            setCounter(counter + 1);
        }
    };

    const dakleba = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };
    if (counter >= 10) {
        classesForMomateba.push(styles.disabled);
    }
    if (counter <= 0) {
        classesForDakleba.push(styles.disabled);
    }
    return (
        <>
            <h1>{counter}</h1>
            <button className={classesForMomateba.join(' ')} onClick={momateba}>მომატება</button>
            <button className={classesForDakleba.join(' ')} onClick={dakleba}>დაკლება</button>
        </>
    )
}