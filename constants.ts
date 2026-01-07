import { Book } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'خلف الجدار الجليدي',
    author: 'د. ريتشارد بيرد',
    price: 19.99,
    coverUrl: 'https://picsum.photos/300/450?random=1',
    category: 'Science',
    description: 'رحلة استكشافية سرية تكشف ما يقع خلف حدود القارة القطبية الجنوبية. هل الأرض كما نعرفها حقاً؟ هذا الكتاب يسرد وقائع تم إخفاؤها لأكثر من 50 عاماً.',
    rating: 4.8,
    publishDate: '2023-11-01',
    isNew: true
  },
  {
    id: '2',
    title: 'بروتوكولات الظل',
    author: 'مجهول',
    price: 14.50,
    coverUrl: 'https://picsum.photos/300/450?random=2',
    category: 'Politics',
    description: 'تسريبات وثائقية تشرح كيف تدار الحكومات العالمية من قبل نخبة خفية. الكتاب الذي حاولت أجهزة الاستخبارات منعه من النشر.',
    rating: 4.5,
    publishDate: '2022-05-15'
  },
  {
    id: '3',
    title: 'زوار من السماء السابعة',
    author: 'إلينور واي',
    price: 24.00,
    coverUrl: 'https://picsum.photos/300/450?random=3',
    category: 'UFO',
    description: 'تحليل شامل لحوادث الاختطاف وتواصل الحضارات الخارجية مع البشر عبر التاريخ القديم والحديث.',
    rating: 4.9,
    publishDate: '2024-01-10',
    isNew: true
  },
  {
    id: '4',
    title: 'التاريخ المحرم',
    author: 'جوناثان بلاك',
    price: 18.75,
    coverUrl: 'https://picsum.photos/300/450?random=4',
    category: 'History',
    description: 'ماذا لو كان كل ما درسته في كتب التاريخ مزيفاً؟ اكتشف الحضارات المفقودة والتكنولوجيا المتقدمة التي امتلكها القدماء.',
    rating: 4.2,
    publishDate: '2021-08-20'
  },
  {
    id: '5',
    title: 'برمجة العقول',
    author: 'سيغموند ك.',
    price: 12.99,
    coverUrl: 'https://picsum.photos/300/450?random=5',
    category: 'Psychology',
    description: 'كيف تستخدم وسائل الإعلام والشركات الكبرى تقنيات نفسية للسيطرة على وعي الجماهير وتوجيه سلوكهم.',
    rating: 4.6,
    publishDate: '2023-03-30'
  },
  {
    id: '6',
    title: 'مشروع الشعاع الأزرق',
    author: 'سيرج م.',
    price: 21.50,
    coverUrl: 'https://picsum.photos/300/450?random=6',
    category: 'UFO',
    description: 'الخطة المزعومة لخلق تهديد فضائي وهمي لتوحيد العالم تحت حكومة واحدة.',
    rating: 4.7,
    publishDate: '2023-12-05',
    isNew: true
  },
  {
    id: '7',
    title: 'العملة الرقمية والرقابة',
    author: 'ساتوشي ن.',
    price: 15.00,
    coverUrl: 'https://picsum.photos/300/450?random=7',
    category: 'Politics',
    description: 'نهاية النقد المالي وبداية عصر الرقابة الشاملة على المعاملات المالية للأفراد.',
    rating: 4.3,
    publishDate: '2022-11-11'
  },
  {
    id: '8',
    title: 'أسرار الأهرامات',
    author: 'زاهي هـ.',
    price: 30.00,
    coverUrl: 'https://picsum.photos/300/450?random=8',
    category: 'History',
    description: 'هل كانت الأهرامات محطات لتوليد الطاقة؟ نظرة هندسية وفيزيائية تخالف الرواية الرسمية.',
    rating: 4.4,
    publishDate: '2020-02-02'
  }
];

export const CATEGORIES = [
  { id: 'All', label: 'الكل' },
  { id: 'Politics', label: 'سياسة ومؤامرات' },
  { id: 'UFO', label: 'UFO وكائنات فضائية' },
  { id: 'History', label: 'تاريخ سري' },
  { id: 'Psychology', label: 'علم نفس وتحكم' },
  { id: 'Science', label: 'علوم محرمة' },
];
