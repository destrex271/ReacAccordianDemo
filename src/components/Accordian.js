import { useState } from "react";

import styles from './Accordian.module.css';

const Accordian = ({question}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [symbolPlus, setSymbol] = useState(true);
    // console.dir(question)
    const showAns = ()  => {
        setShowAnswer(!showAnswer);
        setSymbol(!symbolPlus);
    }
    return (
        <>
            <div className={[styles.container]}>
                <div className={styles.question}>
                    {question.title} <button onClick={showAns} className={styles.btn}>{(symbolPlus)?"+":"-"}</button>
                </div>
                {(showAnswer)?(<div className={styles.answer}>
                    {question.info}
                </div>):(null)}
            </div>
        </>
    );
}
 
export default Accordian;