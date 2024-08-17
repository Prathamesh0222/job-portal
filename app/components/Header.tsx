import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs"
import Link from "next/link"


const Header = async() => {
  const {user} = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header>
    <div className="container flex items-center justify-between mx-auto my-4">
      <Link href={"/"} className="font-bold text-xl">Job Board</Link>
      <nav className="flex gap-2">
        {!user ? (
          <Link href={signInUrl} className="bg-white hover:bg-slate-200 text-black py-2 px-4 rounded-lg">Login</Link>
        ):(
          <form action={async () => {
            'use server';
            await signOut();
          }}>
            <button type="submit" className="bg-white hover:bg-slate-200 text-black py-2 px-4 rounded-lg">Logout</button>
          </form>          
        )}
        
        <Link href={"/new-listing"} className="bg-neutral-700 hover:bg-neutral-800 text-white py-2 px-4 rounded-lg">Post a job</Link>
      </nav>
    </div>
  </header>
  )
}

export default Header