function Card({text}){
  return(
 <div className="border rounded-md border-gray-600 p-4">
Card component: {text}



 </div>
 
  )
}
export default function Home() {
  const name = 'mahy'
  console.log(name)
  return (  
 <>
 <div className="p-20 space y-4">
  <div>
    hello, {name}
</div>
<Card text="this is being passed from parent "></Card>


 </div>
 </>
  );
}
