import React,{useState} from "react";
import styles from "./couter.module.css"

const testStyle2 = `${styles.class2}`
const Counter = () =>{
                            // initialize with initial value
    const [count,setCount] = useState(0);
    // we are using destructuring here => we are destructuring the variable and kinds of desturucturing in the count and setCount
    // React.useState => {value,setValue}

    const handleClick = (value) =>{
        setCount(count+value);
        // react needs u to use setCounter 
        //so that it knows that the state is updated
    }
    return (
        <>
        <h1>Counter</h1>
        <h1 style={{color:"blue",backgroundColor:"yellow"}}>{count}</h1>
        {/* If we will not use callback function, react will re-render the function agian and again without any specific event and this will throw error */}
        <button className={styles.class1} onClick={() => {handleClick(1)}}>Add</button>
        <button className = {testStyle2} onClick={() => {handleClick(-1)}}>Reduce</button>
        </>
    )

}

export {Counter}

// one rule in react is, we don't try to mutate and update value directly
// state is something that the component remembers