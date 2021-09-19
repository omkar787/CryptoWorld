import React, { useState, useRef } from 'react'
import './App.css'
import Container from './components/Container'


export default function App() {
    const [coin, setcoin] = useState("bitcoin")
    const inputHandler = useRef("bitcoin")
    
    function onClickHandler(){
        const temp = (inputHandler.current.value === ""?"bitcoin":inputHandler.current.value)

        console.log(temp);
        setcoin(temp)
        inputHandler.current.value = ""
    }

    return (
        <div className="app">
            <input className="input-el" ref={inputHandler} type="text" placeholder={coin}/>
            <button onClick={onClickHandler} className="btn">Search</button>
            <Container search={coin} />
        </div>
    )
}
