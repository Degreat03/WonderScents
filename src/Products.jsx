import { Product, Product2, Product3 } from "./Product-Component/data/Product.js";
import ProductCard from "./Product-Component/Component/ProductCard.jsx";
import { useState } from "react";

function Products({  addToCart }) {
    // 1. Separate states so each "See More" button works independently
    const [showAll1, setShowAll1] = useState(false);
    const [showAll2, setShowAll2] = useState(false);
    const [showAll3, setShowAll3] = useState(false);

    // 2. Map each visible array to its correct data source
    const visibleProducts1 = showAll1 ? Product : Product.slice(0, 6);
    const visibleProducts2 = showAll2 ? Product2 : Product2.slice(0, 6);
    const visibleProducts3 = showAll3 ? Product3 : Product3.slice(0, 6);

    return (
        <div className="pt-[80px]"> 
            {/* Category 1: Perfume (using 'Product') */}
            <div className="my-[80px] mx-[20px]">
                <h2 className="text-center text-3xl font-bold my-[20px]">Perfume</h2>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] bg-white shadow-[4px_4px_5px_gray] p-[50px_10px] w-full">
                        {visibleProducts1.map((item) => (
                            <ProductCard key={item.id} item={item} onAdd={addToCart} />
                        ))}
                    </div>
                    {Product.length > 6 && (
                        <button 
                            onClick={() => setShowAll1(!showAll1)}
                            className="mt-10 px-8 py-2 bg-black text-white rounded-full 
                            hover:bg-gray-800 transition-all font-bold cursor-pointer"
                        >
                            {showAll1 ? "Show Less" : "See More Products"}
                        </button>
                    )}
                </div>
            </div>

            Category 2: Body Spray (using 'Product2')
            <div className="my-[80px] mx-[20px]">
                <h2 className="text-center text-3xl font-bold my-[20px]">Body Spray</h2>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] bg-white shadow-[4px_4px_5px_gray] p-[50px_10px] w-full">
                        {visibleProducts2.map((item) => (
                            <ProductCard key={item.id} item={item} onAdd={addToCart} />
                        ))}
                    </div>
                    {Product2.length > 6 && (
                        <button 
                            onClick={() => setShowAll2(!showAll2)}
                            className="mt-10 px-8 py-2 bg-black text-white rounded-full 
                            hover:bg-gray-800 transition-all font-bold cursor-pointer"
                        >
                            {showAll2 ? "Show Less" : "See More Products"}
                        </button>
                    )}
                </div>
            </div>

            {/* Category 3: Body Mist (using 'Product3') */}
            <div className="my-[80px] mx-[20px]">
                <h2 className="text-center text-3xl font-bold my-[20px]">Body Mist</h2>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] bg-white shadow-[4px_4px_5px_gray] p-[50px_10px] w-full">
                        {visibleProducts3.map((item) => (
                            <ProductCard key={item.id} item={item} onAdd={addToCart} />
                        ))}
                    </div>
                    {Product3.length > 6 && (
                        <button 
                            onClick={() => setShowAll3(!showAll3)}
                            className="mt-10 px-8 py-2 bg-black text-white rounded-full 
                            hover:bg-gray-800 transition-all font-bold cursor-pointer"
                        >
                            {showAll3 ? "Show Less" : "See More Products"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Products;