import { Link } from "react-router-dom"
import logo from '../assets/phaithWonder.png';

function Footer(){
    return(
        /* Changed flex to flex-col (for mobile) and sm:flex-row (for desktop) */
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-primary p-[50px] gap-10">
            
            {/* Section 1: Logo */}
            <div className="flex flex-col items-center sm:items-start">
                <Link to="/">
                 <img src={logo} alt="Logo" className="w-[70px] h-[70px] rounded-full" />
                </Link>
                <h2 className="text-white mt-2">Wonder Scent's</h2>
            </div>

            {/* Section 2: Quick Links */}
            <div className="text-center sm:text-left text-white">
                <h2 className="font-[700] mb-[10px]">Quick Links:</h2>
                {/* Removed 'hidden' so links show on mobile too */}
                <nav className="flex flex-col gap-2">
                    <Link to="/" className="text-sm font-[300]">Home</Link>
                    <Link to="/about" className="text-sm font-[300]">About</Link>
                    <Link to="/products" className="text-sm font-[300]">Products</Link>
                    <Link to="/contact" className="text-sm font-[300]"> Contact</Link>
                </nav>
            </div>

            {/* Section 3: Social Handles */}
            <div className="text-white text-center sm:text-left">
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
    );
}

export default Footer;