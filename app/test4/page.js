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
    const name = 'mahy'
    let lable = 'Show '
    const handleclick =(e)=>{
        console.log(e)  
      lable = 'hide'
    }
    console.log(handleclick)
    console.log(name)
    return (  
   <>
   <div className="p-20 space y-4">
    <div>
      hello, {name}
  </div>
  <Card>this is passed from parent </Card>
  <Card>
    <div>this is js!</div>
    <Card>nested text inside js</Card>
  </Card>
  <button onClick= {handleclick}>{lable}</button> {/*comment*/}
  
   </div>
   </>
    );
  }
  