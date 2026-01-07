import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Lock, CreditCard } from 'lucide-react';

const Checkout: React.FC = () => {
  const { totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      setLoading(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen py-12 px-4 max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">إتمام الشراء</h1>
        <div className="flex items-center justify-center text-green-400 text-sm gap-2">
          <Lock className="w-4 h-4" />
          <span>اتصال مشفر وآمن 100%</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-mystic-card p-8 rounded-2xl border border-white/5 space-y-6">
        {/* User Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold border-b border-white/10 pb-2">بياناتك الشخصية</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">الاسم الأول</label>
              <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-mystic-accent focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">اسم العائلة</label>
              <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-mystic-accent focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">البريد الإلكتروني</label>
            <input required type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-mystic-accent focus:outline-none" />
            <p className="text-xs text-gray-500 mt-1">سنرسل روابط التحميل إلى هذا البريد.</p>
          </div>
        </div>

        {/* Payment Mockup */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-semibold border-b border-white/10 pb-2">طريقة الدفع</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-mystic-accent bg-mystic-accent/10 p-4 rounded-xl flex items-center justify-center cursor-pointer">
              <span className="font-bold text-white">Credit Card</span>
            </div>
            <div className="border border-white/10 bg-black/20 p-4 rounded-xl flex items-center justify-center cursor-pointer opacity-50">
              <span className="font-bold text-gray-400">PayPal</span>
            </div>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg space-y-4 border border-white/5">
            <div>
              <label className="block text-gray-400 text-sm mb-1">رقم البطاقة</label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent border border-white/10 rounded-lg p-3 pl-10 text-white focus:border-mystic-accent focus:outline-none" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">تاريخ الانتهاء</label>
                <input required type="text" placeholder="MM/YY" className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-white focus:border-mystic-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">CVC</label>
                <input required type="text" placeholder="123" className="w-full bg-transparent border border-white/10 rounded-lg p-3 text-white focus:border-mystic-accent focus:outline-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-mystic-accent hover:bg-purple-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'جاري المعالجة...' : `دفع $${totalPrice.toFixed(2)}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;