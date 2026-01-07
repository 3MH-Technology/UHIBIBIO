import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowLeft, CreditCard, ShoppingCart } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, removeFromCart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-mystic-card p-8 rounded-full mb-6">
          <ShoppingCart className="w-12 h-12 text-gray-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4">سلة التسوق فارغة</h2>
        <p className="text-gray-400 mb-8">لم تضف أي حقائق غامضة إلى سلتك بعد.</p>
        <Link 
          to="/catalog" 
          className="bg-mystic-accent px-6 py-3 rounded-lg text-white font-bold hover:bg-purple-600 transition-colors"
        >
          تصفح الكتب
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-r-4 border-mystic-accent pr-4">سلة التسوق</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-mystic-card rounded-xl p-4 flex gap-4 border border-white/5 items-center">
              <img src={item.coverUrl} alt={item.title} className="w-20 h-28 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.author}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-mystic-accent font-bold">${item.price} x {item.quantity}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button 
            onClick={clearCart}
            className="text-sm text-gray-400 hover:text-white underline mt-4"
          >
            إفراغ السلة
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-mystic-card p-6 rounded-xl border border-white/5 sticky top-24">
            <h3 className="text-xl font-bold mb-6">ملخص الطلب</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>المجموع الفرعي</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>الضرائب (تقديري)</span>
                <span>$0.00</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between text-xl font-bold text-white">
                <span>الإجمالي</span>
                <span className="text-mystic-accent">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2 mb-4"
            >
              <CreditCard className="w-5 h-5" /> إتمام الشراء
            </button>
            
            <Link to="/catalog" className="flex items-center justify-center text-gray-400 hover:text-white text-sm">
              <ArrowLeft className="w-4 h-4 ml-1" /> متابعة التسوق
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;