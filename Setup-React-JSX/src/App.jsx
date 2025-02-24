import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

// register the hook to avoid React version discrepancies
gsap.registerPlugin(useGSAP);

// this is a function component and its name always start with capital latter.

function App({ name }) {

  const refInput = useRef(null);

  useEffect(() => {
    if (refInput.current) {
      gsap.from(refInput.current, {
        opacity: 0,
        scale: 1.4,
        duration: 1.5,
        color: "red"
      });
    }
  }, [])

  // this is a javaScript function that return HTML called JSX.
  return (
    <>
      <h2 ref={refInput}>Hello word {name}</h2>
      <h3>Hello Again</h3>
    </>
  )

}

export default App;