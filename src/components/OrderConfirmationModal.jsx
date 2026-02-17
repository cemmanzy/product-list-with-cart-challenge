// src/components/OrderConfirmationModal.jsx
import { useCart } from '../context/CartContext';

export default function OrderConfirmationModal({ onClose, onNewOrder }) {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleNewOrder = () => {
    clearCart();
    onNewOrder();
    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 z-50 flex justify-start items-stretch
        pointer-events-auto
      "
      onClick={onClose}  // Click anywhere outside modal to close
    >
      <div
        className="
          relative bg-white w-full max-w-md h-full overflow-y-auto
          shadow-2xl border-r border-rose-200
          pointer-events-auto
        "
        onClick={(e) => e.stopPropagation()}  // Prevent close when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-rose-500 hover:text-rose-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="flex flex-col items-center text-center p-8">
          <img
            src="/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
            className="w-14 mb-6"
          />

          <h2 className="text-3xl font-bold text-rose-900 mb-3">
            Order Confirmed
          </h2>

          <p className="text-rose-500 mb-8">
            We hope you enjoy your food!
          </p>

          <div className="w-full bg-rose-50 rounded-xl p-6 mb-8">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center py-3 border-b border-rose-200 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="text-left">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-rose-500">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="flex justify-between mt-6 pt-4 border-t border-rose-200">
              <span className="font-medium text-rose-700">Order Total</span>
              <span className="text-2xl font-bold text-rose-900">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleNewOrder}
            className="
              w-full bg-red text-white py-5 rounded-full 
              font-bold text-lg tracking-wide uppercase
              hover:bg-red-700 active:scale-95
              transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-2
              mt-4
            "
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}