import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Search, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const books = [
  {
    id: 'war-and-peace',
    icon: BookOpen,
    title: 'Война и мир',
    author: 'Лев Толстой',
    description: 'Эпический роман, описывающий русское общество в эпоху наполеоновских войн.',
    image: 'https://images.unsplash.com/photo-1576487147775-50e8de637e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rJTIwcnVzc2lhfGVufDF8fHx8MTc3NTMwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
    category: 'Роман',
    year: 1869,
  },
  {
    id: 'crime-and-punishment',
    icon: BookOpen,
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    description: 'Философский роман о студенте, который решается на убийство.',
    image: 'https://images.unsplash.com/photo-1622324185735-39a40d1a4f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3N0b2V2c2t5fGVufDF8fHx8MTc3NTA1NzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-500',
    category: 'Роман',
    year: 1866,
  },
  {
    id: 'anna-karenina',
    icon: BookOpen,
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    description: 'Трагическая история любви замужней женщины.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxvdmV8ZW58MXx8fHwxNzc1MDU3MTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-emerald-500',
    category: 'Роман',
    year: 1877,
  },
  {
    id: 'eugene-onegin',
    icon: BookOpen,
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    description: 'Роман в стихах о жизни и любви русского дворянина.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXNoa2lufGVufDF8fHx8MTc3NTA1NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-indigo-500 to-purple-500',
    category: 'Поэзия',
    year: 1833,
  },
  {
    id: 'the-master-and-margarita',
    icon: BookOpen,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    description: 'Сатирический роман, в котором переплетаются мистика и реальность.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwc3RvcmV8ZW58MXx8fHwxNzc1MzAzMDExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-red-500 to-amber-500',
    category: 'Роман',
    year: 1967,
  },
  {
    id: 'the-cherry-orchard',
    icon: BookOpen,
    title: 'Вишнёвый сад',
    author: 'Антон Чехов',
    description: 'Пьеса о продаже имения и смене эпох.',
    image: 'https://images.unsplash.com/photo-1543002588-b9b65660ac6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVraG92fGVufDF8fHx8MTc3NTMwMzA2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-sky-500 to-fuchsia-500',
    category: 'Драма',
    year: 1904,
  },
  {
    id: 'capital-in-the-twenty-first-century',
    icon: BookOpen,
    title: 'Капитал в XXI веке',
    author: 'Томас Пикетти',
    description: 'Исследование о концентрации и распределении богатства в Европе и США с XVIII века.',
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pY3MlMjBib29rfGVufDF8fHx8MTc3NTMxMjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-yellow-500 to-amber-500',
    category: 'Экономика',
    year: 2013,
  },
  {
    id: 'elon-musk-tesla-spacex',
    icon: BookOpen,
    title: 'Илон Маск: Tesla, SpaceX и дорога в будущее',
    author: 'Эшли Вэнс',
    description: 'Биография Илона Маска, основателя компаний SpaceX и Tesla.',
    image: 'https://images.unsplash.com/photo-1611095790444-8dfa1400c3c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmlvZ3JhcGh5fGVufDF8fHx8MTc3NTMxMjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-gray-500 to-slate-500',
    category: 'Технологии',
    year: 2015,
  },
  {
    id: 'clean-code',
    icon: BookOpen,
    title: 'Чистый код: создание, анализ и рефакторинг',
    author: 'Роберт Мартин',
    description: 'Настольная книга для программистов о написании чистого и поддерживаемого кода.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBib29rfGVufDF8fHx8MTc3NTMxMjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-teal-500 to-cyan-500',
    category: 'IT',
    year: 2008,
  },
  {
    id: 'a-brief-history-of-time',
    icon: BookOpen,
    title: 'Краткая история времени',
    author: 'Стивен Хокинг',
    description: 'Научно-популярная книга о происхождении и устройстве Вселенной.',
    image: 'https://images.unsplash.com/photo-1582213782139-b0978935b026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwYm9va3xlbnwxfHx8fDE3NzUzMTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-700 to-indigo-700',
    category: 'Наука',
    year: 1988,
  },
  {
    id: 'roadside-picnic',
    icon: BookOpen,
    title: 'Пикник на обочине',
    author: 'Аркадий и Борис Стругацкие',
    description: 'Научно-фантастическая повесть о последствиях посещения Земли инопланетной цивилизацией.',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeS1maSUyMGJvb2t8ZW58MXx8fHwxNzc1MzEyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-lime-500 to-green-500',
    category: 'Фантастика',
    year: 1972,
  },
  {
    id: 'murder-on-the-orient-express',
    icon: BookOpen,
    title: 'Убийство в «Восточном экспрессе»',
    author: 'Агата Кристи',
    description: 'Классический детектив с Эркюлем Пуаро в главной роли.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRlY3RpdmUlMjBib29rfGVufDF8fHx8MTc3NTMxMjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-rose-500 to-red-500',
    category: 'Детектив',
    year: 1934,
  },
  {
    id: 'sapiens-a-brief-history-of-humankind',
    icon: BookOpen,
    title: 'Sapiens: Краткая история человечества',
    author: 'Юваль Ной Харари',
    description: 'Обзор истории человечества от каменного века до наших дней.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwYm9va3xlbnwxfHx8fDE3NzUzMTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-orange-400 to-yellow-400',
    category: 'История',
    year: 2011,
  },
  {
    id: 'thinking-fast-and-slow',
    icon: BookOpen,
    title: 'Думай медленно... решай быстро',
    author: 'Даниел Канеман',
    description: 'Книга о двух системах мышления, которые определяют наши решения.',
    image: 'https://images.unsplash.com/photo-1583321500600-320b9122393a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYnN5Y2hvbG9neSUyMGJvb2t8ZW58MXx8fHwxNzc1MzEyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-fuchsia-500 to-pink-500',
    category: 'Психология',
    year: 2011,
  },
  {
    id: 'good-to-great',
    icon: BookOpen,
    title: 'От хорошего к великому',
    author: 'Джим Коллинз',
    description: 'Исследование о том, как компании совершают прорыв и становятся великими.',
    image: 'https://images.unsplash.com/photo-1549641777-74a0076a5963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJvb2t8ZW58MXx8fHwxNzc1MzEyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-400 to-indigo-400',
    category: 'Бизнес',
    year: 2001,
  },
];

const categories = [
  'Роман',
  'Поэзия',
  'Драма',
  'Фантастика',
  'Детектив',
  'История',
  'Психология',
  'Бизнес',
  'Экономика',
  'Технологии',
  'IT',
  'Наука',
];

const BOOKS_PER_PAGE = 6;

export default function BooksCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page on category change
  };

  const handleOrderBook = (e: React.MouseEvent, book: any) => {
    e.stopPropagation();
    e.preventDefault();
    const storedBooks = localStorage.getItem('orderedBooks');
    const orderedBooks = storedBooks ? JSON.parse(storedBooks) : [];
    if (orderedBooks.find((b: any) => b.id === book.id)) {
        toast.info('Вы уже заказали эту книгу');
        return;
    }
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);
    const bookWithDueDate = { ...book, dueDate: dueDate.toLocaleDateString() };

    orderedBooks.push(bookWithDueDate);
    localStorage.setItem('orderedBooks', JSON.stringify(orderedBooks));
    toast.success('Книга успешно заказана!');
  };

  const filteredBooks = books.filter(book => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearchTerm = 
        book.title.toLowerCase().includes(searchTermLower) ||
        book.author.toLowerCase().includes(searchTermLower) ||
        book.description.toLowerCase().includes(searchTermLower);

    const matchesCategory = 
        selectedCategories.length === 0 || selectedCategories.includes(book.category);

    return matchesSearchTerm && matchesCategory;
  });

  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * BOOKS_PER_PAGE,
    currentPage * BOOKS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Электронный каталог книг</h1>
            <p className="mt-4 text-xl text-gray-600">Найдите интересующую вас литературу</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Фильтры</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Поиск</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Найти книгу..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg"
                      value={searchTerm}
                      onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Жанры</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <span className="ml-3 text-sm text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Books Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {paginatedBooks.map(book => (
                <Link to={`/books/${book.id}`} key={book.id} className="group">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${book.color} rounded-xl shadow-lg flex items-center justify-center`}>
                            <book.icon className="w-7 h-7 text-white" />
                        </div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                          <p className="text-gray-700 font-semibold mb-2">{book.author}</p>
                          <p className="text-gray-600 mb-4 flex-grow text-sm">{book.description}</p>
                          <div className="flex justify-between items-center mt-4">
                            <button 
                                onClick={(e) => handleOrderBook(e, book)}
                                className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow z-10">
                                Заказать
                            </button>
                            <div className="text-right">
                                <p className="text-xs text-gray-500">{book.category}</p>
                                <p className="text-xs text-gray-500">{book.year}</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-gray-700 font-medium">
                Страница {currentPage} из {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
