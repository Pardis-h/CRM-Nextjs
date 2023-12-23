import Link from "next/link"

function Layout({children}:any) {
  return (
    <div  className={`flex flex-col items-center justify-between p-10 max-w-[1200px] mx-auto`}
    >
        <header className="flex w-full justify-between" >
            <Link href={"/"} className=" font-extrabold text-xl" >CRM</Link>
            <Link href={"/add-customer"} className="px-5 py-3 rounded-md bg-indigo-500 text-white">Add Customer</Link>
        </header>
        <main className="min-h-[calc(100vh_-_140px)] w-full ">
            {children}
        </main>
        <footer>CRM | Next.js Project | Pardis Haghdoust</footer>
    </div>
  )
}

export default Layout