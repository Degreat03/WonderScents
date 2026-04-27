import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Product from "./Products.jsx"
import Contact from "./Contact.jsx"
import NavBar from "./Home-Component/NavBar.jsx"
import { useState } from "react"
import Cart from "./Product-Component/page/Cart";
import Footer from "./Home-Component/Footer.jsx"

function App(){
    const [cart, setCart] = useState([]);
      const [isCartOpen, setIsCartOpen] = useState(false);

  // This shared function adds items to the global cart state
      const addToCart = (product) => {
        setCart((prev) => {
          const exists = prev.find((i) => i.id === product.id);
          return exists 
            ? prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
            : [...prev, { ...product, quantity: 1 }];
        });
      };
      const removeFromCart = (id) => {
          setCart(cart.filter(item => item.id !== id));
      };
    return(
      
      <div className="flex flex-col min-h-screen">
        <NavBar cartCount={cart.length} openCart={() => setIsCartOpen(true)}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<Product addToCart={addToCart}/>}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Cart 
        cart={cart} 
        setCart={setCart} 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen} 
        addToCart={addToCart}
        removeFromCart={removeFromCart} 
      />
      <Footer />
      </div>
      
    )
}

export default App