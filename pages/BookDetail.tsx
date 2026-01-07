import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BOOKS } from '../constants';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, Check, ShieldCheck, Download, Calendar } from 'lucide-react';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const book = BOOKS.find(b => b.id === id);

  if (!book) {
    return <div className="text-center py-20 text-2xl">الكتاب غير موجود</div>;
  }

  const handleBuyNow = () => {
    addToCart(book);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      <div className="bg-mystic-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
        <div className="grid md:grid-cols-3 gap-0">
          
          {/* Image Section */}
          <div className="md:col-span-1 relative h-[500px] md:h-full">
            <img 
              src={book.coverUrl} 
              alt={book.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mystic-card via-transparent to-transparent md:bg-gradient-to-r"></div>
          </div>

          {/* Info Section */}
          <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-mystic-accent/20 text-mystic-accent px-3 py-1 rounded-full text-sm font-medium">
                {book.category}
              </span>
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="mr-1">{book.rating}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{book.title}</h1>
            <p className="text-xl text-gray-400 mb-6">بقلم: {book.author}</p>

            <div className="flex items-center gap-6 mb-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>نشر: {book.publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>تحميل آمن</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>PDF / EPUB</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-10 text-gray-300 leading-relaxed">
              <p>{book.description}</p>
              <p>هذا الكتاب يحتوي على معلومات قد لا تكون مناسبة للجميع. القراءة على مسؤوليتك الخاصة. المحتوى الرقمي سيكون متاحاً فوراً بعد الشراء في لوحة التحكم الخاصة بك.</p>
            </div>

            <div className="mt-auto">
              <div className="text-3xl font-bold text-white mb-6">${book.price}</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-mystic-accent hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" /> شراء الآن
                </button>
                <button 
                  onClick={() => addToCart(book)}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> أضف إلى السلة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;