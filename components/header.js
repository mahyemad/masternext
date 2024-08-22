import Counter from "./counter";
import Link from "next/link";
export default function Header() {
  return (
    <header className="p-20 border-yellow-400">
    <ul className="flex space-x-4">
        <li> <Link href="/test10">Home</Link></li>
        <li> <Link href="/about">About</Link></li>
        <li> <Link href="/about/projects">Projects</Link></li>


        
    </ul>
    <Counter/>
  </header>
 )
}
