//conditional rendering
'use client'

import { useState } from "react"

function Card({children}){
    return(
   <div className="border rounded-md border-gray-600 p-4">
{children  }
  
  
   </div>
   
    )
  }
  export default function Home() {
    const [isvisiable, setisvisible]=useState(true)
    const name = 'mahy'
    const handleclick =(e)=>{
        console.log(e)
        setisvisible(!isvisiable)  
 }
 const cards = isvisiable && 
 <>
 <Card>this is passed from parent </Card>
   <Card>
     <div>this is js!</div>
     <Card>nested text inside js</Card>
   </Card>
 </>

    console.log(handleclick)
    console.log(name)
    return (  
   <>
   <div className="p-20 space y-4">
    <div>
      hello, {name}
  </div>
{cards  }
  <button onClick= {handleclick}>
    {isvisiable?'Hide': 'Show'}</button> {/*comment*/}
  
   </div>
   </>
    );
  }
  