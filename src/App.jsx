import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Product from "./Products.jsx"
import Contact from "./Contact.jsx"
import NavBar from "./Home-Component/NavBar.jsx"
import { useState, useEffect } from "react"
import Cart from "./Product-Component/page/Cart";
import Footer from "./Home-Component/Footer.jsx"
import ScrollToTop from "./ScrollToTop.jsx"

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("wonderscents_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("wonderscents_cart", JSON.stringify(cart));
  }, [cart]);

  const handlePaymentSuccess = (reference) => {
    console.log("Transaction ID:", reference.reference); // Using the variable fixes the error!
    alert("Payment Successful!");
    window.location.reload();
};

  const addToCart = (product) => {
  setCart((prev) => {
    // We use Number() to make sure "1" and 1 are treated as the same item
    const exists = prev.find((i) => Number(i.id) === Number(product.id));
    if (exists) {
      return prev.map((i) =>
        Number(i.id) === Number(product.id) ? { ...i, quantity: i.quantity + 1 } : i
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const updateQuantity = (id, amount) => {
  setCart((prev) =>
    prev.map((item) => {
      if (Number(item.id) === Number(id)) {
        // Prevent quantity from going below 1
        const newQuantity = Math.max(1, item.quantity + amount);
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
  );
};

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar cartCount={cart.length} 
              openCart={() => setIsCartOpen(true)}
       />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Cart
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        removeFromCart={removeFromCart}
        handlePaymentSuccess={handlePaymentSuccess}
        isDelivery={isDelivery}
        setIsDelivery={setIsDelivery}
        updateQuantity={updateQuantity}
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App