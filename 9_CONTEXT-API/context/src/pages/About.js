//import { useContext } from "react"

import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContent";

//import { CounterContext } from "../context/CounterContext"





const About = () => {

  const { counter } = useCounterContext()

  /* 5 - context mais complexo */
  const { color, dispatch } = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About