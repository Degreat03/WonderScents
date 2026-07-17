import React from 'react'; // Unused useState removed to fix terminal error
import { usePaystackPayment } from 'react-paystack';

function Cart({ cart, 
                setCart, 
                isCartOpen, 
                setIsCartOpen, 
                removeFromCart, 
                handlePaymentSuccess, 
                isDelivery, 
                setIsDelivery,
                updateQuantity 
            }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCost = Math.round(totalPrice * 0.1);
  const finalTotal = isDelivery ? totalPrice + deliveryCost : totalPrice;

  const config = {
    reference: new Date().getTime().toString(),
    email: "customer@example.com",
    amount: finalTotal * 100,
    publicKey: 'pk_test_8a8a25b412e2fcabac50f5476535173253d03f97',
    metadata: {
        custom_fields: [
            {
                display_name: "Cart Items",
                variable_name: "cart_items",
                // This line creates the text you'll see in Paystack
                value: cart.map(item => `${item.name} (x${item.quantity})`).join(", ")
            
            },
            {
                display_name: "Delivery Fee",
                variable_name: "delivery_fee",
                // This line creates the text you'll see in Paystack
                value: `₦${deliveryCost}`
            
            },
        ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  // FIX: Added these functions back so the terminal errors go away
  const onSuccess = (reference) => {
    handlePaymentSuccess(reference);
  };

  const onClose = () => {
    console.log("Payment window closed");
  };

  const handleCheckoutClick = () => {
    // 1. Clear the UI and storage immediately
    setCart([]); 
    localStorage.removeItem("wonderscents_cart");
    
    // 2. Open Paystack
    initializePayment(onSuccess, onClose);
  };

  if (!isCartOpen) return null;

  return (
    <div style={{ position: "fixed", top: 0, right: 0, width: "350px", height: "100vh", backgroundColor: "white", zIndex: 1000, padding: "20px", boxShadow: "-2px 0 10px rgba(0,0,0,0.1)", overflowY: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", backgroundColor: "black", color: "white", padding: "10px" }}>
        <h2 style={{ margin: 0 }}>Your Cart</h2>
        <button onClick={() => setIsCartOpen(false)} style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}>X</button>
      </div>

      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4"
              style={{ gap: "12px" }}
            >
              {/* Left: Product Image & Text Block */}
              <div className="flex items-center flex-1 min-w-0" style={{ gap: "12px" }}>
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  style={{ width: "48px", height: "48px", objectFit: "contain", backgroundColor: "#f8fafc", p: "4px", borderRadius: "4px" }} 
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-slate-800 truncate">{item.name}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">x {item.quantity}</span>
                </div>
              </div>

              {/* Right: Controls Wrapper (Quantity Selectors + Trash Button Aligned) */}
              <div className="flex items-center" style={{ gap: "14px" }}>
                
                {/* Modern Compact Stepper */}
                <div 
                  className="flex items-center border border-slate-200 rounded-sm bg-white overflow-hidden"
                  style={{ height: "28px" }}
                >
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="hover:bg-slate-50 transition-colors flex items-center justify-center font-medium text-slate-600"
                    style={{ width: "24px", height: "100%", cursor: "pointer", border: "none", background: "none", fontSize: "14px" }}
                  >
                    -
                  </button>
                  
                  <span className="text-xs font-bold text-slate-700 px-1 select-none text-center min-w-[20px]">
                    {item.quantity}
                  </span>
                  
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="hover:bg-slate-50 transition-colors flex items-center justify-center font-medium text-slate-600"
                    style={{ width: "24px", height: "100%", cursor: "pointer", border: "none", background: "none", fontSize: "14px" }}
                  >
                    +
                  </button>
                </div>
                
                {/* Sleek Delete Icon Action */}
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="hover:text-red-600 text-slate-400 transition-colors p-1"
                  style={{ border: "none", background: "none", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center" }}
                >
                  <i className="bx bx-trash"></i>
                </button>

              </div>
            </div>
          ))}
          {/* FIX: Using setIsDelivery here fixes the "defined but never used" error */}
          <div style={{ marginTop: "20px", marginLeft:"20px", fontSize: "14px"  }}>
            <label>
              <input type="radio" checked={!isDelivery} onChange={() => setIsDelivery(false)} /> Store Pickup(Free)
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="radio" checked={isDelivery} onChange={() => setIsDelivery(true)} /> Home Delivery(₦{deliveryCost})
            </label>
          </div>

          <button 
            onClick={handleCheckoutClick}
            style={{ width: "100%", padding: "12px", backgroundColor: "black", color: "white", marginTop: "20px", cursor: "pointer" }}
          >
            Proceed to Checkout (₦{finalTotal})
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;