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
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <div className='flex items-center'>
                <img 
                    src={item.image || item.img} 
                    alt={item.name} 
                    style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" }} 
                />
                 <span>{item.name} x {item.quantity}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  style={{ width: "28px", height: "31px", cursor: "pointer", border: "none", color: "white", background: "#DBA39A", borderRadius: "10px", fontSize:"20px" }}
                >
                  -
                </button>
                
                <span>{item.quantity}</span>
                
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  style={{ width: "28px", height: "31px", cursor: "pointer", border: "none", color: "white", background: "#DBA39A", borderRadius: "10px", fontSize:"20px" }}
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ color: "red", border: "none", background: "none", fontSize: "20px", cursor:"pointer" }}>
                <i className="bx bx-trash"></i>
              </button>
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