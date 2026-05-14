import { Link } from "react-router-dom"
import logo from '../assets/phaithWonder.png';

function Footer(){
    return(
        <div className="bg-primary text-white p-[30px] md:p-[50px]">
            {/* Use a grid: 1 column on mobile, 3 columns on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-[40px] text-center md:text-left">
                
                {/* Section 1: Logo */}
                <div className="flex flex-col justify-center md:justify-start">
                    <Link to="/">
                    <img src={logo} alt="Logo" className="w-[70px] h-[70px] rounded-full" />
                    </Link>
                    <h2 className="text-white mt-2">Wonder Scent's</h2>
                </div>

                {/* Section 2: Quick Links */}
                <nav>
                    <h3 className="mb-[15px] font-bold text-lg">Quick Links</h3>
                    <div className="flex flex-col text-sm gap-2">
                        <Link to="/" className="text-sm font-[300]">Home</Link>
                        <Link to="/about" className="text-sm font-[300]">About</Link>
                        <Link to="/products" className="text-sm font-[300]">Products</Link>
                        <Link to="/contact" className="text-sm font-[300]"> Contact</Link>
                    </div>
                </nav>

                {/* Section 3: Contact */}
                <div>
                    <h2 className="font-[700] mb-[10px]">Social Handles:</h2>
                    <div className="flex flex-col gap-3">
                        <div className="text-sm flex items-center justify-center sm:justify-start font-[300]">
                            <i className="bi bi-facebook"></i><span className="ml-[10px]">webpage.com</span>
                        </div>
                        <div className="text-sm flex items-center justify-center sm:justify-start font-[300]">
                            <i className="bi bi-whatsapp"></i><span className="ml-[10px]">webpage.com</span>
                        </div>
                        <div className="text-sm flex items-center justify-center sm:justify-start font-[300]">
                            <i className="bi bi-linkedin"></i><span className="ml-[10px]">webpage.com</span>
                        </div>
                        <div className="text-sm flex items-center justify-center sm:justify-start font-[300]">
                            <i className="bi bi-instagram"></i><span className="ml-[10px]">webpage.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <hr className="border-white/20 mb-6" />
            <p className="text-center text-xs opacity-80">
                &copy; 2026 Wonder Scent's. All rights reserved.
            </p>
        </div>
    )
}

export default Footer