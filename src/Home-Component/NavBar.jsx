import { Link, useLocation } from "react-router-dom";
import logo from '../assets/phaithWonder.png';
import { useState } from "react";

// Directly import all your perfume lists into the NavBar file
import { Product, Product2, Product3 } from "../Product-Component/data/Product";

function NavBar({ cartCount, openCart }){
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const location = useLocation();
    
    const isProductPage = location.pathname === '/products';

    // Combine all three product lists into a single master array for searching
    const allProducts = [...Product, ...Product2, ...Product3];

    // Handle dynamic live filtering as typing happens
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredResults([]);
            return;
        }

        // Filter through the entire combined list at once
        const matches = allProducts.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(matches);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setFilteredResults([]);
    };

    return(
        <div>
            <div className="flex items-center justify-between px-10 py-4 bg-primary text-white font-bold fixed w-full top-0 z-50 gap-4">
                {/* Brand Logo Container */}
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[40px] h-[40px] rounded-full" />
                    </Link>
                </div>

                {/* Center Viewport: Desktop Search Bar (ONLY visible on Product Page) */}
                {isProductPage && (
                    <div className="hidden md:block relative w-full max-w-sm mx-auto text-black font-normal">
                        <div className="flex items-center bg-white/10 border border-white/20 rounded-md px-3 py-1.5 focus-within:border-white focus-within:bg-white transition-all text-white focus-within:text-slate-800">
                            <i className="bx bx-search text-xl mr-2 flex-shrink-0 opacity-70"></i>
                            <input
                                type="text"
                                placeholder="Search fragrances..."
                                value={searchQuery}
                                onChange={handleSearch}
                                className="w-full bg-transparent text-sm outline-none placeholder:text-white/60 focus-within:placeholder:text-slate-400"
                            />
                            {searchQuery && (
                                <button onClick={clearSearch} className="text-current opacity-60 hover:opacity-100 cursor-pointer border-none bg-none">
                                    <i className="bx bx-x text-xl"></i>
                                </button>
                            )}
                        </div>

                        {/* Floating Dropdown Results Box */}
                        {filteredResults.length > 0 && (
                            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-md shadow-2xl z-50 overflow-y-auto max-h-60">
                                {filteredResults.map((item) => (
                                    <Link
                                        key={item.id}
                                        // This updates the URL string so your grid can catch it and filter down instantly
                                        to={`/products?search=${encodeURIComponent(item.name)}`}
                                        onClick={clearSearch}
                                        className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-none block"
                                    >
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-9 h-9 flex items-center justify-center bg-slate-50 p-1 rounded-sm flex-shrink-0">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-800 truncate">
                                                {item.name}
                                            </span>
                                        </div>
                                        <span className="text-xs font-bold text-slate-600 pl-2 flex-shrink-0">
                                            ₦{item.price}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Fallback Empty Search Alert Layout */}
                        {searchQuery && filteredResults.length === 0 && (
                            <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-100 rounded-md shadow-xl z-50 p-4 text-center text-xs text-slate-400">
                                No fragrances match "{searchQuery}"
                            </div>
                        )}
                    </div>
                )}

                {/* Right Sided Header Elements Layout Block */}
                <div className="flex items-center gap-8 flex-shrink-0">
                    {/* Desktop Menu */}
                    <nav className="hidden sm:flex gap-8">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Desktop Cart Icon - Only visible on Product Page & Large Screens */}
                        {isProductPage && (
                            <button 
                                onClick={openCart} 
                                className="hidden sm:block relative p-2 bg-white rounded-full text-black text-xl 
                                hover:scale-110 cursor-pointer transition-transform"
                            >
                                <i className='bx bx-cart text-2xl rounded-full px-[3px]'></i>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        )}

                        {/* Toggle Button for Mobile */}
                        <button 
                            className="sm:hidden text-2xl" 
                            onClick={() => setOpen(!open)}
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="flex flex-col items-center sm:hidden bg-primary w-full z-40 fixed text-white p-6 gap-5 top-[72px] shadow-lg">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                    
                    {/* Mobile Cart Link - Sits INSIDE the menu, only on Product Page */}
                    {isProductPage && (
                        <div 
                            className="flex items-center gap-2 mt-4 p-3 bg-white text-black 
                            rounded-lg w-full justify-center cursor-pointer" 
                            onClick={() => { openCart(); setOpen(false); }}
                        >
                            <i className='bx bx-cart text-2xl text-primary'></i>
                            <span className="text-primary">View Cart ({cartCount})</span>
                        </div>
                    )}
                </nav>
            )}
        </div>
    )
}

export default NavBar;