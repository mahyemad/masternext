//importing card function from components
'use client'
import Card from "@/components/card"
import { useState } from "react"

  export default function Home() {
    const [isvisiable, setisvisible]=useState(true)
    const [names, setnames]=useState(['Mahy','Aya','Zayd'])
    const name = 'mahy'
    const handleclick =(e)=>{
        console.log(e)
        setisvisible(!isvisiable)  
 }
 const handleAdd= ()=>{
setnames([...names, 'New element'])
 }
 const cards = isvisiable
  && names.map( (name,index) => <Card key={index}>{name}</Card>)

    console.log(handleclick)
    console.log(name)
    console.log(names)
    return (  
   <>
   <div className="p-20 space y-4">
    <div>
      hello, {name}
  </div>
{cards  }
 <div className="flex space x-4">
 <button onClick= {handleclick}>
    {isvisiable?'Hide': 'Show'}</button>                                    {/*comment*/}
    
    <button onClick={handleAdd}>
        Add 
    </button>
 </div>
  
   </div>
   </>
    );
  }
  