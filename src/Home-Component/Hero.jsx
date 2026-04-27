import fragranceImg from "../assets/fragrances.png"
import { Link } from "react-router-dom"


function Hero(){
    return(
        <div className="bg-center bg-cover bg-no-repeat h-[80vh] text-center flex flex-col
        justify-center items-center text-white" 
        style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${fragranceImg})` }}
        >
            <div className="flex flex-col items-center justify-center mt-[70px]" >
                <h3 className="text-lg md:text-xl tracking-widest ">Welcome to</h3>
                <h1 className="text-3xl md:text-7xl text-bold drop-shadow-lg">Wonder Scent's Limited</h1>
                <p className="italic mt-[10px]">A home of the best fragrance</p>
                <Link to="/products">
                <button className="bg-[#E2A7A0] text-white mt-[10px] px-[25px] py-[5px] 
                rounded-2xl font-bold hover:bg-primary cursor-pointer transition-all">
                    Book Now
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero