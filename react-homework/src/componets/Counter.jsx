import { useState } from "react"

const Counter = function() {
    const [text, setText] = useState('')

    function handleText(event) {
        setText(event.target.value)
    }


    return(
        <div>
            <h1>{text}</h1>
            <input type="text" value = {text} onChange={handleText}/>
        </div>
    )
}

export default Counter