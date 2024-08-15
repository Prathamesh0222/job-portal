import Link from "next/link"


const Header = () => {
  return (
    <header>
    <div className="container flex items-center justify-between mx-auto my-4">
      <Link href={"/"} className="font-bold text-xl">Job Board</Link>
      <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-lg">
        <Link href={"/login"} className="bg-white hover:bg-slate-200 text-black">Login</Link>
        <Link href={"/new-listing"} className="bg-neutral-700 hover:bg-neutral-800 text-white">Post a job</Link>
      </nav>
    </div>
  </header>
  )
}

export default Header