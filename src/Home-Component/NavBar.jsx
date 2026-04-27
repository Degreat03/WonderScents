import { Link, useLocation } from "react-router-dom";
import logo from '../assets/phaithWonder.png';
import { useState } from "react";

function NavBar({ cartCount, openCart }){
    const [open, setOpen] = useState(false);
    const location = useLocation();
    
    const isProductPage = location.pathname === '/products';

    return(
        <div>
            <div className="flex items-center justify-between px-10 py-4 bg-primary text-white font-bold fixed w-full top-0 z-50">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[40px] h-[40px] rounded-full" />
                    </Link>
                </div>

                <div className="flex items-center gap-8">
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