export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  category: string;
  description: string;
  rating: number;
  publishDate: string;
  isNew?: boolean;
}

export interface CartItem extends Book {
  quantity: number;
}

export type Category = 'All' | 'Politics' | 'UFO' | 'History' | 'Psychology' | 'Science';
