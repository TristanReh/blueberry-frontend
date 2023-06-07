import { useState, useEffect } from "react";
import "../styles/Counter.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export function Counter({id, imgSrc}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Init local storage')
        let counterValue = parseInt(localStorage.getItem('counter-' + id));
        if (!counterValue || counterValue == NaN) localStorage.setItem('counter-' + id, count);
        setCount(counterValue);
    }, [])

    const changeCount = (amount) => {
        const updatedCount = count + amount;
        setCount(updatedCount);
        localStorage.setItem('counter-' + id, updatedCount);
    };

    return (
        <div className="counter">
            <img src={imgSrc}/>
            <button onClick={() => changeCount(1)}><AiOutlinePlus size={18}/></button>
            <span>{count}</span>
            <button onClick={() => changeCount(-1)}><AiOutlineMinus size={18}/></button>
        </div>
    );
}
