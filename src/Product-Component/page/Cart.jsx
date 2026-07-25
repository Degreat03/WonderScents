import React, { useState } from 'react';

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

  const [txRef, setTxRef] = useState(() => `tx-${Date.now()}`);

  const handleCheckoutClick = () => {
    // 1. Close cart drawer so user sees product page underneath
    setIsCartOpen(false);

    // 2. Trigger native Flutterwave inline modal
    if (window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-06be8b32ce262b21c357b7dcf55d1360-X',
        tx_ref: txRef,
        amount: finalTotal,
        currency: 'NGN',
        payment_options: 'card,ussd,banktransfer',
        customer: {
          email: "emmanuelfaith869@gmail.com",
          phone_number: "08160398610",
          name: "Emmanuel Faith",
        },
        customizations: {
          title: "Wonderscents Store",
          description: "Payment for cart items",
          logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png",
        },
        meta: {
          cart_items: cart.map(item => `${item.name} (x${item.quantity})`).join(", "),
          delivery_fee: `₦${deliveryCost}`
        },
        callback: function (response) {
          console.log("Payment Response:", response);
          if (response.status === 'successful') {
            setCart([]); 
            localStorage.removeItem("wonderscents_cart");
            if (handlePaymentSuccess) {
              handlePaymentSuccess(response);
            }
          } else {
            alert("Payment failed.");
          }
          setTxRef(`tx-${Date.now()}`);
        },
        onclose: function() {
          console.log("Modal closed");
          setTxRef(`tx-${Date.now()}`);
        }
      });
    } else {
      alert("Flutterwave SDK failed to load. Please check your internet connection.");
    }
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
              <div className="flex items-center flex-1 min-w-0" style={{ gap: "12px" }}>
                <img 
                  src={item.image || item.img} 
                  alt={item.name} 
                  style={{ width: "48px", height: "48px", objectFit: "contain", backgroundColor: "#f8fafc", padding: "4px", borderRadius: "4px" }} 
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-slate-800 truncate">{item.name}</span>
                  <span className="text-[11px] text-slate-400 mt-0.5">x {item.quantity}</span>
                </div>
              </div>

              <div className="flex items-center" style={{ gap: "14px" }}>
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
                  
                  <span className="text-xs font-bold text-slate-700 px-1 select-none text-center min-w-5">
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

          <div style={{ marginTop: "20px", marginLeft:"20px", fontSize: "14px" }}>
            <label>
              <input type="radio" checked={!isDelivery} onChange={() => setIsDelivery(false)} /> Store Pickup (Free)
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input type="radio" checked={isDelivery} onChange={() => setIsDelivery(true)} /> Home Delivery (₦{deliveryCost})
            </label>
          </div>

          <button 
            type="button"
            onClick={handleCheckoutClick}
            style={{ width: "100%", padding: "12px", backgroundColor: "black", color: "white", marginTop: "20px", cursor: "pointer", border: "none" }}
          >
            Proceed to Checkout (₦{finalTotal})
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;