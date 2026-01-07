import React, { useState, useMemo } from 'react';
import { BOOKS, CATEGORIES } from '../constants';
import BookCard from '../components/BookCard';
import { Search, Filter } from 'lucide-react';

const Catalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<number>(50);

  const filteredBooks = useMemo(() => {
    return BOOKS.filter(book => {
      const matchesSearch = book.title.includes(searchTerm) || book.author.includes(searchTerm);
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
      const matchesPrice = book.price <= priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          <div className="bg-mystic-card p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-mystic-accent" /> تصفية
            </h3>
            
            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">الفئات</h4>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="accent-mystic-accent"
                    />
                    <span className={`text-sm group-hover:text-white transition-colors ${selectedCategory === cat.id ? 'text-white font-bold' : 'text-gray-400'}`}>
                      {cat.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Slider */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">الحد الأقصى للسعر</h4>
              <input 
                type="range" 
                min="0" 
                max="50" 
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-mystic-accent"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>$0</span>
                <span className="text-white font-bold">${priceRange}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن كتاب، مؤلف، أو موضوع..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-mystic-card border border-white/10 rounded-xl py-4 pr-12 pl-4 text-white focus:outline-none focus:border-mystic-accent focus:ring-1 focus:ring-mystic-accent transition-all placeholder-gray-500"
            />
          </div>

          {/* Results Grid */}
          <div className="mb-4 text-gray-400">
            تم العثور على <span className="text-white font-bold">{filteredBooks.length}</span> كتاب
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-mystic-card rounded-xl border border-white/5 border-dashed">
              <p className="text-xl text-gray-400">لا توجد نتائج تطابق بحثك.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All'); setPriceRange(50);}}
                className="mt-4 text-mystic-accent hover:text-white underline"
              >
                مسح التصفيات
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;