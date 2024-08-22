'use client'
import { useState } from "react"


export default function Test7() {
  const [count, setcount] = useState(0);
console.log(count)
function inc(){
  setcount(count +1)
}
function dec(){
  setcount(count -1)
} 
  return (
<>
<div>hello this is calaculator page</div>
<div>Initial value is {count}</div>

<div>
  <button onClick={inc}>
    Increment
  </button>
</div>

<div>
  <button onClick={dec}>
    Decrement
  </button>
</div>















</>
  )
}
