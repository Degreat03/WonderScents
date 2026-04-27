import React from 'react';
import { useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

function Cart({ cart = [], isCartOpen, setIsCartOpen, removeFromCart }) {
    
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCost = totalPrice * 10 / 100;
    const grandTotal = totalPrice + deliveryCost; 
    const [isDelivery, setIsDelivery] = useState(false);
    const finalTotal = isDelivery ? grandTotal : totalPrice;

    // Paystack Configuration
    const config = {
    reference: (new Date()).getTime().toString(),
    email: "customer@example.com", 
    amount: finalTotal * 100,
    publicKey: 'pk_test_8a8a25b412e2fcabac50f5476535173253d03f97',
    metadata: {
        // "custom_fields" is the magic key that Paystack looks for to display data on the dashboard
        custom_fields: [
            {
                display_name: "Cart Items",
                variable_name: "cart_items",
                // We join the item names into a single string for easy reading
                value: cart.map(item => `${item.name} (${item.quantity})`).join(", ")
            },
            {
                display_name: "Checkout Type",
                variable_name: "checkout_type",
                value: "Fragrance Web Store"
            }
        ]
    }
};

    const initializePayment = usePaystackPayment(config);

    const onSuccess = (reference) => {
        // This is where you'd clear the cart and show a success message
        console.log("Payment Successful! Reference:", reference);
        alert("Thank you for your purchase!");
        setIsCartOpen(false);
    };

    const onClose = () => {
        console.log("Payment window closed");
    };

    return (
        <div>
            {/* Slide-out Cart Drawer */}
            {isCartOpen && (
                <div style={{
                    position: "fixed", top: "0", right: "0", width: "350px", height: "100vh",
                    backgroundColor: "white", boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
                    padding: "20px", zIndex: 100, overflowY: "auto"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "black", padding: "10px", color: "white", marginBottom: "15px" }}>
                        <h2 style={{ margin: 0, fontSize: "1.2rem" }}>Your Cart</h2>
                        <button onClick={() => setIsCartOpen(false)} style={{ cursor: "pointer", fontWeight: "700", background: "none", border: "none", color: "white", fontSize: "1.2rem" }}>X</button>
                    </div>

                    {cart.length === 0 ? <p>Your cart is empty.</p> : (
                        <>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: "flex", gap: "15px", marginBottom: "15px", alignItems: "center" }}>
                                    <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" }} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: "0" }}>{item.name}</h4>
                                        <small>{item.quantity} x ₦{item.price}</small>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ 
                                                display: "block", 
                                                background: "none", 
                                                border: "none", 
                                                color: "#ff4d4d", 
                                                fontSize: "0.75rem", 
                                                cursor: "pointer", 
                                                padding: "5px 0",
                                                textDecoration: "underline"
                                            }}
                                        >
                                            <i class="bx bx-trash text-xl text-primary" />
                                        </button>
                                    </div>
                                    <strong>₦{item.price * item.quantity}</strong>
                                </div>
                            ))}
                            <hr style={{ border: "0.5px solid #eee" }} />
                            <div style={{ textAlign: "right", marginTop: "20px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                                    <span>Total:</span>
                                    <h3>₦{finalTotal}</h3>
                                </div>
                                <div className="shipping-options text-sm mb-[10px] text-left">
                                <label className='mr-[10px]'>
                                    <input 
                                    type="radio" 
                                    name="shipping" 
                                    checked={!isDelivery} 
                                    onChange={() => setIsDelivery(false)} 
                                    /> Store Pickup (Free)
                                </label>
                                
                                <label>
                                    <input 
                                    type="radio" 
                                    name="shipping" 
                                    checked={isDelivery} 
                                    onChange={() => setIsDelivery(true)} 
                                    /> Home Delivery (₦{deliveryCost})
                                </label>
                                </div>
                                
                                <button 
                                    onClick={() => initializePayment(onSuccess, onClose)}
                                    style={{ 
                                        width: "100%", padding: "12px", backgroundColor: "#000", 
                                        color: "#fff", border: "none", borderRadius: "5px", 
                                        cursor: "pointer", fontSize: "1rem", fontWeight: "bold" 
                                    }}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;