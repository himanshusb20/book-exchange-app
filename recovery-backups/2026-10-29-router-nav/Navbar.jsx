const Navbar = ()=>{

    return (
        <nav className="flex items-center justify-between border-b bg-white px-8 py-4">
            <h1 className="text-2xl font-bold text-green-700">
                BookSwap
            </h1>

            <div className="flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-green-700">
                Browse Books
                </a>

                <a href="#" className="text-gray-700 hover:text-green-700">
                Sell a Book
                </a>

                <button className="rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800">
                Login/Sign-Up
                </button>
            </div>
        </nav>
  )
}

export default Navbar