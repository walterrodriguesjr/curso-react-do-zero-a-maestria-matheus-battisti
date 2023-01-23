import { useState } from "react";



const Listrender = () => {

    const [list] = useState(["Walter", "Renan", "Charlene"]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Listrender;