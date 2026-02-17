// src/components/MobileCartBar.jsx
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import Cart from './Cart';

export default function MobileCartBar() {
  const { totalItems, cart } = useCart();
  const [showSheet, setShowSheet] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <>
      {/* Fixed bottom bar - polished styling */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-rose-100 shadow-lg lg:hidden">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-rose-500 font-medium">Order Total</p>
            <p className="text-xl font-bold text-rose-900">${total.toFixed(2)}</p>
          </div>

          <button
            onClick={() => setShowSheet(true)}
            className="
              bg-red text-white font-bold px-8 py-4 rounded-full 
              hover:opacity-90 active:scale-95 transition-all duration-200 
              flex items-center gap-3 shadow-md text-base
            "
          >
            <span>View Cart</span>
            <span className="bg-white text-red rounded-full w-7 h-7 flex items-center justify-center font-semibold text-sm">
              {totalItems}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom sheet overlay */}
      {showSheet && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setShowSheet(false)}
        >
          <div 
            className="
              absolute bottom-0 left-0 right-0 
              bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto
              pb-safe lg:pb-6                    /* ← prevent cut-off on small screens */
            "
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Polished sheet header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-rose-100">
                <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
                  Your Cart ({totalItems})
                </h2>
                <button 
                  onClick={() => setShowSheet(false)}
                  className="
                    text-rose-500 hover:text-rose-900 
                    text-3xl font-bold leading-none
                  "
                  aria-label="Close cart sheet"
                >
                  ×
                </button>
              </div>

              {/* Full cart content */}
              <Cart />
            </div>
          </div>
        </div>
      )}
    </>
  );
}