// src/components/Cart.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, totalItems, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmOrder = () => {
    setShowConfirmation(true);
    // Auto-hide after 5 seconds
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  if (totalItems === 0) {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <img 
          src="/assets/images/illustration-empty-cart.svg" 
          alt="Empty cart" 
          className="mx-auto mb-6 w-48"
        />
        <p className="text-rose-500 font-semibold">Your cart is empty</p>
        <p className="text-rose-400 text-sm mt-2">
          Add some delicious desserts to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg relative">
      <h2 className="text-xl font-bold text-rose-900 mb-6">
        Your Cart ({totalItems})
      </h2>

      {/* Cart items list */}
      <div className="space-y-6 mb-8">
        {cart.map((item) => (
          <div 
            key={item.name} 
            className="flex items-center justify-between py-4 border-b border-rose-100 last:border-b-0"
          >
            <div className="flex items-center gap-4">
              <img 
                src={item.image.thumbnail} 
                alt={item.name} 
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p className="font-semibold text-rose-900">{item.name}</p>
                <p className="text-sm text-rose-500">
                  ${item.price.toFixed(2)} × {item.quantity}
                  <span className="ml-2 text-red font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.name)}
              className="p-2 rounded-full hover:bg-rose-50 transition-colors"
            >
              <img src="/assets/images/icon-remove-item.svg" alt="Remove" className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-rose-100">
        <span className="text-rose-500">Order Total</span>
        <span className="text-2xl font-bold text-rose-900">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <p className="text-center text-rose-500 text-sm mt-4">
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>

      <button 
        onClick={handleConfirmOrder}
        className="w-full bg-red text-white font-semibold py-4 rounded-full mt-6 hover:opacity-90 transition-opacity"
      >
        Confirm Order
      </button>

      {/* Small confirmation message */}
      {showConfirmation && (
        <div className="
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-white rounded-xl p-8 shadow-2xl border border-rose-200
    max-w-md w-11/12 text-center z-[9999]
        ">
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="Confirmed"
            className="w-16 mx-auto mb-6"
          />
          <h3 className="text-xl font-bold text-rose-900 mb-3">
            Order Confirmed
          </h3>
          <p className="text-rose-500 mb-6">
            We hope you enjoy your food!
          </p>
          <p className="text-lg font-semibold text-rose-900 mb-6">
            Order Total: ${totalPrice.toFixed(2)}
          </p>

          {/* Start New Order button */}
          <button
            onClick={() => {
              clearCart();                  // Reset cart
              setShowConfirmation(false);   // Hide message
            }}
            className="
              w-full bg-red text-white py-4 rounded-full 
              font-bold text-lg hover:bg-red-700 transition-colors mb-4
            "
          >
            Start New Order
          </button>

          {/* Close button */}
          <button
            onClick={() => setShowConfirmation(false)}
            className="text-rose-500 hover:text-rose-700 text-sm underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}