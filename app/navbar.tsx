import Icon from "./dhl";

const DHNavbar = () => {
  return (
    <header className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="container mx-auto columns-2 flex">
            <Icon/>
            <div className="uppercase text-gray-800 dark:text-white font-black text-2xl px-2 py-4">
                Dattahub Consulting 
          </div>
            </div>
            <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="/" className="py-2 px-6 flex">
                        Home
                    </a>
                    <a href="/products" className="py-2 px-6 flex">
                        Products
                    </a>
                    <a href="/people" className="py-2 px-6 flex">
                        People
                    </a>
                    <a href="/contact" className="py-2 px-6 flex">
                        Contact
                    </a>
                    <a href="/career" className="py-2 px-6 flex">
                        Career
                    </a>
                </nav>
                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default DHNavbar
