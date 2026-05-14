import AvantiRed from "../assets/avanti-water-perfume.png"
import Challenge from "../assets/challenge-intense.png"
import AfnanBrown from "../assets/afnan-brown.jpg"
import RiggGold from "../assets/rigg-gold.png"
import RiggPatrol from "../assets/rigg-patrol.png"
import RiggVoyage from "../assets/rigg-voyage-2.png"
import BodyMistCoco from "../assets/body-mist-coconut.jpg"
import BodyMistPink from "../assets/body-mist-pink.jpg"
import BodyMistVanilla from "../assets/vanilla.jpg"

function Features(){
    return(
        <div>
            <h2 className="text-center text-xl md:text-4xl font-[600] my-[20px]">Features</h2>
            <h3 className="text-center text-primary
             mt-[30px] mb-[30px] text-lg md:text-2xl font-[600]">Perfumes</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center 
            justify-items-center text-center max-w-[1000px] mx-auto
            gap-[10px]
            ">
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px] 
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={AvantiRed} 
                    alt="Avanti-black" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700] mt-[10px]">Avanti Black</h3>
                </div>
                <div className="bg-white shadow-lg
                 rounded  p-[10px]
                mb-[20px]
                md:mb-[30px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={Challenge} 
                    alt="Avanti-red" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Tusk White</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={AfnanBrown} 
                    alt="Afnan Brown" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Avanti Black</h3>
                </div>
            </div>
            {/* Body Spray */}
            <h3 className="text-center text-primary
             mt-[50px] mb-[50px] text-lg md:text-2xl font-[600]">Body Sprays</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center text-center 
            gap-[10px]
            max-w-[1000px] mx-auto">
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px] 
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={RiggGold} 
                    alt="Riggs-gold" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Riggs Gold</h3>
                </div>
                <div className="bg-white shadow-lg rounded
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={RiggPatrol} 
                    alt="Riggs-patrol" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Riggs Patrol</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={RiggVoyage} 
                    alt="Riggs-voyage" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Riggs Voyage</h3>
                </div>
            </div>
            {/* Body Mist */}
            <h3 className="text-center text-primary
             mt-[50px] mb-[50px] text-lg md:text-2xl font-[600]">Body Mist</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center text-center 
            gap-[10px]
            max-w-[1000px] mx-auto">
                <div className="bg-white shadow-lg rounded mr-[20px] 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={BodyMistCoco} 
                    alt="Body-mist Coconut" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Body-mist Coconut</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={BodyMistPink} 
                    alt="Body-mist Pink" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Body-mist Pink</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                w-[300px]
                h-[280px]
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={BodyMistVanilla} 
                    alt="Body-mist Vanilla" 
                    className="w-[150px]"
                    />
                    <h3 className="font-[700]">Body-mist Vanilla</h3>
                </div>
            </div>
        </div>
    )
}

export default Features