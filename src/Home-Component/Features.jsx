import AvantiRed from "../assets/Avanti-red.jpg"
import AvantiBlue from "../assets/Avanti-blue-1.jpg"
import AvantiBlack from "../assets/Avanti-black.jpg"
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
                ">
                    <img src={AvantiRed} 
                    alt="Avanti-red" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Avanti Red</h3>
                </div>
                <div className="bg-white shadow-lg
                 rounded  p-[10px]
                mb-[20px]
                md:mb-[30px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                ">
                    <img src={AvantiBlue} 
                    alt="Avanti-red" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Avanti Blue</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                ">
                    <img src={AvantiBlack} 
                    alt="Avanti-red" 
                    className="w-[300px] h-[300px]"
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
                ">
                    <img src={RiggGold} 
                    alt="Riggs-gold" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Riggs Gold</h3>
                </div>
                <div className="bg-white shadow-lg rounded
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                ">
                    <img src={RiggPatrol} 
                    alt="Riggs-patrol" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Riggs Patrol</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                ">
                    <img src={RiggVoyage} 
                    alt="Riggs-voyage" 
                    className="w-[300px] h-[300px]"
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
                ">
                    <img src={BodyMistCoco} 
                    alt="Body-mist Coconut" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Body-mist Coconut</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                ">
                    <img src={BodyMistPink} 
                    alt="Body-mist Pink" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Body-mist Pink</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-[20px]
                md:mb-[30px]
                p-[10px] 
                transition-transform hover:-translate-y-[10px]
                cursor-pointer
                ">
                    <img src={BodyMistVanilla} 
                    alt="Body-mist Vanilla" 
                    className="w-[300px] h-[300px]"
                    />
                    <h3 className="font-[700]">Body-mist Vanilla</h3>
                </div>
            </div>
        </div>
    )
}

export default Features