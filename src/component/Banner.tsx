
import banner_one from "../assets/ic_banner_one.png";

export const Banner =  () => {
    return(
        <div className="w-screen px-10 lg:px-32 mt-5 justify-center items-center flex">
            <div className="h-64 rounded-2xl w-full bg-orange-100 flex justify-between items-center space-x-10 px-10">
                <div>
                <h1 className="text-4xl font-extrabold">Grab upto 50% off On <br /> <span className="text-2xl">the selected earphone.</span></h1>
                <button className="text-white font-bold text-sm py-3 px-5 rounded-full bg-purple-300 mt-4">Buy now</button>
                </div>
                <img src={banner_one} className=" h-5/6" alt="" />
            </div>
        </div>
    );
}