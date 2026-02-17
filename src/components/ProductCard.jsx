// src/components/ProductCard.jsx
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { cart, addToCart, increment, decrement } = useCart();

  const cartItem = cart.find(item => item.name === product.name);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img
          src={product.image.desktop}
          alt={product.name}
          className="w-full h-48 md:h-56 object-cover"
        />

        {/* Both buttons now have THE SAME SIZE & POSITION */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          {quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="
                flex items-center justify-center gap-3
                bg-white border-2 border-red text-red font-semibold
                px-8 py-4 rounded-full shadow-md
                hover:bg-rose-50 active:scale-95
                transition-all duration-200
                min-w-[220px] h-14 text-base whitespace-nowrap
              "
            >
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt=""
                className="w-5 h-5"
              />
              Add to Cart
            </button>
          ) : (
            <div
              className="
                flex items-center justify-between
                bg-red text-white font-semibold
                px-6 py-4 rounded-full shadow-md
                min-w-[220px] h-14
              "
            >
              <button
                onClick={() => decrement(product.name)}
                className="
                  w-10 h-10 flex items-center justify-center
                  hover:bg-red-700/20 active:scale-95
                  rounded-full transition-all duration-150
                "
                aria-label="Decrease quantity"
              >
                <img
                  src="/assets/images/icon-decrement-quantity.svg"
                  alt="Decrease"
                  className="w-5 h-5"
                />
              </button>

              <span className="min-w-[3ch] text-center text-lg font-bold">
                {quantity}
              </span>

              <button
                onClick={() => increment(product.name)}
                className="
                  w-10 h-10 flex items-center justify-center
                  hover:bg-red-700/20 active:scale-95
                  rounded-full transition-all duration-150
                "
                aria-label="Increase quantity"
              >
                <img
                  src="/assets/images/icon-increment-quantity.svg"
                  alt="Increase"
                  className="w-5 h-5"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="text-rose-500 text-sm">{product.category}</p>
        <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
        <p className="text-red font-bold mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}