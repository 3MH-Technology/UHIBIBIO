import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKS, CATEGORIES } from '../constants';
import BookCard from '../components/BookCard';
import { ArrowLeft, BookOpen, AlertTriangle } from 'lucide-react';

const Home: React.FC = () => {
  const featuredBooks = BOOKS.filter(b => b.rating >= 4.5).slice(0, 4);
  const newBooks = BOOKS.filter(b => b.isNew).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/80 via-mystic-dark/50 to-mystic-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm mb-4 animate-bounce">
            <AlertTriangle className="w-4 h-4" />
            <span>تحذير: المحتوى قد يغير نظرتك للعالم</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 leading-tight">
            اكتشف الحقيقة <span className="text-mystic-accent">المخفية</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            مكتبة متخصصة في الكتب النادرة، نظريات المؤامرة، والتاريخ الممنوع. تجرأ على المعرفة.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="px-8 py-3 rounded-full bg-mystic-accent text-white font-bold text-lg hover:bg-purple-600 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              تصفح المكتبة
            </Link>
            <Link 
              to="/catalog?sort=new" 
              className="px-8 py-3 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              أحدث الإصدارات
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold border-r-4 border-mystic-accent pr-4">الأكثر مبيعاً</h2>
          <Link to="/catalog" className="flex items-center text-mystic-accent hover:text-white transition-colors">
            عرض الكل <ArrowLeft className="w-4 h-4 mr-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-12 bg-mystic-card/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">تصنيفات مثيرة للجدل</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.filter(c => c.id !== 'All').map((cat) => (
              <Link 
                key={cat.id} 
                to={`/catalog?category=${cat.id}`}
                className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-mystic-accent/10 hover:border-mystic-accent transition-all text-center"
              >
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-gray-400 group-hover:text-mystic-accent transition-colors" />
                <span className="font-medium text-gray-300 group-hover:text-white">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold border-r-4 border-cyan-500 pr-4 mb-8">وصل حديثاً</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;