import React, {useState} from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button className={styles.button} type='button' onClick={() => setCounter(prevState => prevState + 1)}>Inc</button>
            <span>{counter}</span>
        </div>
    );
};

export default Counter;