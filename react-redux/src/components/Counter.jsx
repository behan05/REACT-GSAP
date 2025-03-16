import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addNum, removeNum } from "../features/counterSlice";
import style from "../styles/counter.module.css";
import btnStyle from "../styles/btn.module.css";


function Counter() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.counter.countValue);


    useEffect(() => {
        document.title = "Counter APP Live!"
    });

    return (
        <div className={style.counterContainer}>
            <h2>Current Counter value is : {selector}</h2>
            <button onClick={() => dispatch(addNum(selector + 1))} className={btnStyle.btn}>Increase Value</button>

            <button onClick={() => dispatch(removeNum(selector - 1))} className={btnStyle.btn}>Decrease Value</button>
        </div>
    )
}

export default Counter;