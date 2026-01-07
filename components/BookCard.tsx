import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-mystic-card rounded-xl overflow-hidden border border-white/5 hover:border-mystic-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] flex flex-col h-full">
      {/* Badge */}
      {book.isNew && (
        <div className="absolute top-2 right-2 z-10 bg-mystic-accent text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
          جديد
        </div>
      )}

      {/* Image */}
      <Link to={`/book/${book.id}`} className="block relative overflow-hidden aspect-[2/3]">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">
            {book.category}
          </span>
          <div className="flex items-center text-yellow-500 text-xs">
            <Star className="w-3 h-3 fill-current mr-1" />
            <span>{book.rating}</span>
          </div>
        </div>

        <Link to={`/book/${book.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-100 leading-tight mb-1 group-hover:text-mystic-accent transition-colors line-clamp-1">
            {book.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4">{book.author}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-white">${book.price}</span>
          <button
            onClick={() => addToCart(book)}
            className="flex items-center justify-center p-2 rounded-lg bg-white/5 hover:bg-mystic-accent text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            title="أضف إلى السلة"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;