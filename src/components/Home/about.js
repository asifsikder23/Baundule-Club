import Image from "next/image";

const Header = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mb-5">
            <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="/Assets/about.jpeg"
                    alt=""
                    width={500}
                    height={500}
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-24 lg:max-w-lg lg:pr-5">
                    <p className="inline-block py-px mb-4  font-semibold tracking-wider text-lime-600 uppercase rounded-full bg-teal-accent-400">
                        About Us
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Everything you
                        <br className="hidden md:block" />
                        can imagine{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            is real
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    Welcome to Baundule Club, where adventure meets expertise, and wanderlust finds its perfect companion. Our story is one of passion for travel, a commitment to exceptional experiences, and a dedication to making your travel dreams come true.
                    </p>
                    <div className="flex items-center">
                        <a
                            href="/about"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;