import { useParams } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { books } from './books-catalog'; // Assuming books are exported from here
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BookOpen, Calendar, Tag } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function BookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const book = books.find(b => b.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleOrderBook = () => {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
                <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-lg">
                    <ImageWithFallback src={book.image} alt={book.title} className="w-full h-auto object-cover rounded-lg mb-6" />
                    <button 
                        onClick={handleOrderBook}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow">
                        Заказать книгу
                    </button>
                </div>
            </div>
            <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
                    <p className="text-xl text-gray-700 font-semibold mb-6">{book.author}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{book.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{book.year}</span>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{book.description}</p>
                </div>
            </div>
        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
