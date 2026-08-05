import { Product, Product2, Product3 } from "./Product-Component/data/Product.js";
import ProductCard from "./Product-Component/Component/ProductCard.jsx";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductRequestForm from "./Product-Component/ProductRequestForm.jsx";

function Products({ addToCart }) {
    // 1. Separate states so each "See More" button works independently
    const [showAll1, setShowAll1] = useState(false);
    const [showAll2, setShowAll2] = useState(false);
    const [showAll3, setShowAll3] = useState(false);

    // 2. Map each visible array to its correct data source
    const visibleProducts1 = showAll1 ? Product : Product.slice(0, 6);
    const visibleProducts2 = showAll2 ? Product2 : Product2.slice(0, 6);
    const visibleProducts3 = showAll3 ? Product3 : Product3.slice(0, 6);

    const [searchParams] = useSearchParams();
    const searchTarget = searchParams.get("search"); // Catches what was clicked in Navbar

    const allProducts = [...Product, ...Product2, ...Product3];

    // Filter displayed grid items down if a search parameter exists in the URL string
    const displayedProducts = searchTarget
        ? allProducts.filter(item => item.name.toLowerCase().includes(searchTarget.toLowerCase()))
        : allProducts;

    return (
        <div className="pt-[80px]"> 
            {/* CONDITIONAL RENDERING: If a user searched for something, show unified results */}
            {searchTarget ? (
                <div className="my-[80px] mx-[20px]">
                    <h2 className="text-center text-3xl font-bold my-[20px]">
                        Search Results for "{searchTarget}"
                    </h2>
                    <div className="flex flex-col items-center">
                        {displayedProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] bg-white shadow-[4px_4px_5px_gray] p-[50px_10px] w-full">
                                {displayedProducts.map((item) => (
                                    <ProductCard key={item.id} item={item} onAdd={addToCart} />
                                ))}
                            </div>
                        ) : (
                            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md my-6 text-center">
                                <p className="text-slate-600 mb-4 font-semibold">
                                    No fragrances found matching "{searchTarget}".
                                </p>
                                <h3 className="text-lg font-bold mb-4 text-gray-800">Request it directly from us!</h3>
                                <ProductRequestForm />
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                /* Otherwise, if NO search is active, show default categorized rows */
                <>
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
                                    className="mt-10 px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-bold cursor-pointer"
                                >
                                    {showAll1 ? "Show Less" : "See More Products"}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category 2: Body Spray (using 'Product2') */}
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
                                    className="mt-10 px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-bold cursor-pointer"
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
                                    className="mt-10 px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-bold cursor-pointer"
                                >
                                    {showAll3 ? "Show Less" : "See More Products"}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* General Product Request Section */}
                    <div className="my-[80px] mx-[20px] flex justify-center">
                        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-[4px_4px_5px_gray]">
                            <h2 className="text-center text-2xl font-bold mb-2">Can't Find What You're Looking For?</h2>
                            <p className="text-center text-gray-600 mb-6 text-sm">Submit a request and we'll check stock availability for you.</p>
                            <ProductRequestForm />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Products;