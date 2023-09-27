import '../styles/cta.css';

const Cta = () => {
    return (
        <>
            <div className="bg-scroll bg-inner flex justify-center items-center">
                <div className="mx-10">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-white mb-4 text-center md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-white text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
                    <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 px-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 rounded-l-none hover:bg-lime-600 bg-lime-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none">subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta;