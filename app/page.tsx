import Image from "next/image";
import infoCards from "./libs/InfoCards";
import Icon from "./dhl";
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
                        <img src="/dhlogo.jpeg" className="object-fill w-[90%] h-[90%] m-auto rounded-lg opacity-70" />
                    </div>
                </div>
            </div>
        </main>
        <div className="bg-white dark:bg-gray-800 relative z-25 items-center overflow-hidden grid grid-cols-1">
            <div className="divider"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 m-auto gap-4">
                <CardTest />
            </div>

        </div>
        <div className="bg-white dark:bg-gray-800 relative z-25 items-center overflow-hidden grid grid-cols-1">
            <div className="divider"></div>

            <h1 className="text-4xl m-auto font-bebas-neue pb-8 pt-8 ">
                Technologies
            </h1>
            <h2 className="text-xl m-auto font-bebas-neue pb-8 pt-8 ">
                The magic that makes it happen
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-6 m-auto gap-4">
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-green-500 opacity-100">Python</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-green-500 opacity-100">Django</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">NextJs</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Rails</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Dotnet</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-blue-900 opacity-100">C++</div>

                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-teal-500 opacity-100">Docker</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-teal-500 opacity-100">Kubernetes</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-red-400 opacity-100">Azure</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-red-400 opacity-100">Terraforms</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-pink-500 opacity-100">AWS</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-pink-500 opacity-100">AWS cdk</div>

                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">MSSQL</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">Stripe</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-red-100 border-red-300 dark:up-bg-dark dark:border-black dark:text-red-500 opacity-100">Postgres</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">DataDog</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-red-100 border-red-300 dark:up-bg-dark dark:border-black dark:text-red-500 opacity-100">Prometheus</div>
                <div className="rounded border px-4 py-2 shadow-sm bg-purple-100 border-purple-300 dark:up-bg-dark dark:border-black dark:text-purple-500 opacity-100">And a lot more..</div>

            </div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content dark:bg-gray-800">
                <aside className="items-center grid-flow-col">
                    <Icon />
                    <p>Copyright Dattahub Pty Ltd © 2024 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </nav>
            </footer>
        </div>
    </>);
};


function CardTest() {
    return (<>
        {infoCards.map(function (element) {
            return (
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

