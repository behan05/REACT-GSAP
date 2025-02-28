import { useState } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import StateLifting from "./components/StateLifting";
import InputData from "./components/InputData";

function App() {
    const [text, setText] = useState("");

    return (
        <>
            <Counter />
            <Form />
            <InputData setText={setText} />
            <StateLifting text={text} />
        </>
    )
}

export default App;