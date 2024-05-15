import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myString = "J'aime les maths";
  const monTab: Array<number> = [ 1, 5, -2, 8, 9];
  const codht = monTab.map((x) =>
    <p>{x>=2 ? "Il fait " + x +  " degrés dehors ":  "Il fait " + x +  " degré dehors " }</p>
  )
  const mesInvites = [
    {
      age : 50,
      nom : "Gérard"
    },
    {
      age : 60,
      nom : "Estelle"
    },
    {
      age : 17,
      nom : "Laurie"
    },
  ];

  const codeInvites =  <div>{mesInvites.map((post, index)=> 
      <p key={index}>

      </p>


    )} </div>            
  

   let monBooleen: boolean = true;         
  return (
    <>
        {monBooleen ==true ?  "le booléen est vrai": "le booléen est faux    \ "  }
        {monBooleen ==true && "        affiché que si true     "    }
        {codht}
        


    </>
  )
}

export default App
