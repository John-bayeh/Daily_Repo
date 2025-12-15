import { useState } from "react";
export default function Last()
{
    interface Persons{
        name:string,
        age:number
    }
  const [person,setPerson]=useState<Persons>({
     name:"kal",
     age:22
  });
  function increase()
  {
    setPerson({
        ...person,age:person.age+1
    })
  }
    return(
        <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
         <button onClick={increase}>
             Incrreased Age
         </button>
        </div>
    )
}