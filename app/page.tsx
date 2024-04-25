import EnagageUs from "./engagement_modal";

export default function Home() {

    return (<>
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-[30%] h-2 bg-gray-800 dark:bg-white mb-10"> </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    DevOps
                    <span className="text-5xl sm:text-7xl">
                        on Steriods
                    </span>
                </h1>

                <h2 className="font-bebas-neue text-3xl pb-8 pt-8 ">
                    Launch your business for success
                </h2>

                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Is your business team excelling in strategy but facing hurdles with infrastructure?
                Don't waste valuable time on trial and error.
                Expedite upgrades and avoid costly mistakes by entrusting your infrastructure needs to seasoned experts.
                Accelerate your time to market and enjoy peace of mind by partnering with industry professionals.
                </p>
                <div className="flex mt-8">
                  
                  <a href="/contact" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                      Engage us
                  </a>
                    <a href="/products" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Browse our products 
                    </a>
                </div>
            </div>
          <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/dhlogo.jpeg" className="object-fill w-[90%] h-[90%] m-auto rounded-lg opacity-70"/>
            </div>
        </div>
    </div>
</main>

        {/* <div className="grid grid-rows-12 h-screen">
            <div className="grid grid-cols-12 row-span-10">
                <div className="bg-slate-700 bg-svg-pat bg-opacity-10 col-span-3"> <LeftSide/> </div>
                <div className= "col-span-6">
                    <MiddleHero/>
                </div>
                <div className="col-span-3">
                        <RightHero/> 
                </div>
            </div>
            <div className="row-span-2 bg-yellow-800">
                test this
            </div>
        </div>
        <MiddleHero/>
        <MiddleHero/>
        <MiddleHero/> */}
    </>);
};

