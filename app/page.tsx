import Image from "next/image";
import styles from "./styles/Home.module.css";
import infoCards from "./libs/InfoCards";
export default function Home() {

    return (<>
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <div className="bg-white dark:bg-gray-800 flex relative z-25 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-10">
                <span className="w-[30%] h-2 bg-gray-800 dark:bg-white mb-5"> </span>
                <h2 className="font-bebas-neue text-3xl pb-8 pt-8 ">
                    Launch your business for success
                </h2>
                <h1 className="font-bebas-neue uppercase text-5xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Transform Your 
                    <span className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Vision</span>
                    into 
                    <span className="text-5xl sm:text-7xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        Reality
                    </span>
                    with Us!
                </h1>

                <p className="text-m sm:text-serif text-gray-700 dark:text-white">

                    Bring your brilliant ideas to life.
                    Craft Exceptional Products that Delight Users.<br></br>
                    Partner with our exceptional team to turn your dreams into captivating software solutions.
                    <br></br>We specialize in creating products that not only meet but exceed expectations, ensuring an unforgettable user experience.
                    With our expertise and dedication, we'll guide you through every step of the journey, from conceptualization to launch, guaranteeing a seamless and joyful experience throughout.


                </p>
                <div className="flex mt-8">
                  
                  <a href="/contact" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                      Let's Start
                  </a>
                    <a href="/products" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Browse our products 
                    </a>
                </div>
            </div>
          <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-0 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl">
          </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="/dhlogo.jpeg" className="object-fill w-[90%] h-[90%] m-auto rounded-lg opacity-70"/>
            </div>
        </div>
    </div>
</main>
    <div className="bg-white dark:bg-gray-800 relative z-25 items-center overflow-hidden grid grid-cols-1">
        <div className="container mx-auto px-6 flex relative py-16">
                <span className="w-[100%] h-2 bg-gray-800 dark:bg-white mb-5"> </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 m-auto gap-4">
            <CardTest/>
        </div>

    </div>
    <div className="bg-white dark:bg-gray-800 relative z-25 items-center overflow-hidden grid grid-cols-1">
        <div className="container mx-auto px-6 flex relative py-16">
                <span className="w-[100%] h-2 bg-gray-800 dark:bg-white mb-5"> </span>
        </div>
        <h1 className="text-4xl m-auto font-bebas-neue pb-8 pt-8 ">
            Technologies
        </h1>
        <h2 className="text-xl m-auto font-bebas-neue pb-8 pt-8 ">
            The magic that makes it happen
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 m-auto gap-4">
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Python</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">NextJs</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>

        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Docker</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Kubernetes</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100"></div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>

        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-red-100 border-red-300 dark:up-bg-dark dark:border-black dark:text-red-500 opacity-100">Postgres</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Django</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-red-100 border-red-300 dark:up-bg-dark dark:border-black dark:text-red-500 opacity-100">Postgres</div>
        <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">And a lot more..</div>

        </div>

    </div>
        {/*
        
        <div className="grid grid-rows-12 h-screen">
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


function CardTest  ()  {
     return (<>
     {infoCards.map(function (element) {
        return(
                    <div key={element.id} className="row-span-1 card bg-base-100 shadow-xl">
                        <Image src={element.imgSrc} width={200} height={200} alt="Products" />
                        <div className="card-body">
                            <h2 className="card-title">{element.title}</h2>
                            <p>{element.bodyText}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary"><a href="/contact">Contact us</a> </button>
                            </div>
                        </div>
                    </div>
            );
        })}
        </>
        );
    }

