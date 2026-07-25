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
            <h3 className="text-center text-primary
             mt-12.5 mb-12.5 text-lg md:text-2xl font-semibold">Perfume</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center text-center 
            gap-2.5
            max-w-250 mx-auto">
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={AvantiRed} 
                    alt="AvantiRed" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Avanti (for her)</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={Challenge} 
                    alt="Challenge" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Challenge</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={AfnanBrown} 
                    alt="AfnanBrown" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Afnan Brown</h3>
                </div>
            </div>
            {/* Body Spray */}
            <h3 className="text-center text-primary
             mt-12.5 mb-12.5 text-lg md:text-2xl font-semibold">Body Spray</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center text-center 
            gap-2.5
            max-w-250 mx-auto">
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={RiggGold} 
                    alt="RiggGold" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Rigg Gold</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={RiggPatrol} 
                    alt="RiggPatrol" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Rigg Patrol</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={RiggVoyage} 
                    alt="RiggVoyage" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Rigg Voyage</h3>
                </div>
            </div>
            {/* Body Mist */}
            <h3 className="text-center text-primary
             mt-12.5 mb-12.5 text-lg md:text-2xl font-semibold">Body Mist</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center text-center 
            gap-2.5
            max-w-250 mx-auto">
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={BodyMistVanilla} 
                    alt="Body-mist Vanilla" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Body-mist Vanilla</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={BodyMistPink} 
                    alt="Body-mist Pink" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Body-mist Pink</h3>
                </div>
                <div className="bg-white shadow-lg rounded 
                mb-5
                md:mb-7.5
                p-2.5 
                transition-transform hover:-translate-y-2.5
                cursor-pointer
                w-75
                h-70
                flex
                flex-col
                items-center
                justify-center
                ">
                    <img src={BodyMistVanilla} 
                    alt="Body-mist Vanilla" 
                    className="w-37.5"
                    />
                    <h3 className="font-bold">Body-mist Vanilla</h3>
                </div>
            </div>
        </div>
    )
}

export default Features