import React from 'react';
import { BOOKS } from '../constants';
import { Download, FileText, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock purchased data (just taking first 3 books)
  const purchasedBooks = BOOKS.slice(0, 3);

  return (
    <div className="min-h-screen py-12 px-4 max-w-7xl mx-auto">
      
      {/* User Header */}
      <div className="bg-mystic-card rounded-2xl p-8 mb-8 border border-white/5 flex items-center gap-6">
        <div className="w-20 h-20 bg-mystic-accent/20 rounded-full flex items-center justify-center text-mystic-accent">
          <User className="w-10 h-10" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">أهلاً بك، الباحث عن الحقيقة</h1>
          <p className="text-gray-400">عضو منذ 2024</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FileText className="text-mystic-accent" /> مكتبتي الرقمية
      </h2>

      <div className="grid gap-6">
        {purchasedBooks.map(book => (
          <div key={book.id} className="bg-mystic-card rounded-xl p-6 border border-white/5 flex flex-col md:flex-row items-center gap-6 group hover:border-mystic-accent/30 transition-all">
            <img src={book.coverUrl} alt={book.title} className="w-24 h-36 object-cover rounded shadow-lg" />
            
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
              <p className="text-gray-400 mb-4">{book.author}</p>
              <div className="text-sm text-gray-500">تاريخ الشراء: {new Date().toLocaleDateString('ar-EG')}</div>
            </div>

            <div className="flex flex-col gap-3 min-w-[200px]">
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-mystic-accent hover:text-white text-gray-300 py-3 px-6 rounded-lg transition-all border border-white/10">
                <Download className="w-4 h-4" /> تحميل PDF
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-mystic-accent hover:text-white text-gray-300 py-3 px-6 rounded-lg transition-all border border-white/10">
                <Download className="w-4 h-4" /> تحميل EPUB
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;