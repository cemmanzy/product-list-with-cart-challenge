// src/App.jsx
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import MobileCartBar from './components/MobileCartBar'; // ← NEW import
import { useCart } from './context/CartContext';

function App() {
  const { cart, totalItems } = useCart();

  return (
    <div className="min-h-screen bg-rose-50 text-rose-900 font-sans">
      {/* Header – visible on all screens */}
      <header className="sticky top-0 z-10 bg-rose-50/90 backdrop-blur-sm border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Desserts</h1>
          
          <div className="relative">
            <button className="relative p-3 rounded-full hover:bg-rose-100 transition-colors">
              <span className="text-2xl">🛒</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16 pb-24 lg:pb-16">
        {/* ← added pb-24 on mobile so content isn't hidden under bottom bar */}
        
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 lg:gap-12">
          {/* Products – full width on mobile */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {/* Desktop-only cart sidebar – hidden on mobile */}
          <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start space-y-6">
            <Cart />
          </div>
        </div>
      </div>

      {/* Mobile-only bottom cart bar */}
      <MobileCartBar />
    </div>
  );
}

export default App;