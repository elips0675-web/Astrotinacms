import { useState, useEffect } from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { User, BookOpen, Clock, Star, Edit, KeyRound, X, Save, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SignedUpEvents } from '../components/signed-up-events';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'motion/react';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  category: string;
  year: number;
  color: string;
  icon: React.ElementType;
  dueDate: string;
}

interface BookedService {
    id: string;
    serviceId: string;
    title: string;
    image: string;
    color: string;
    date: string;
    time: string;
}

const initialUser = {
  name: 'Иван Иванов',
  email: 'ivan.ivanov@example.com',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NzUzMDcyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  memberSince: '2023-01-15',
};

export default function ProfilePage() {
  const [orderedBooks, setOrderedBooks] = useState<Book[]>([]);
  const [bookedServices, setBookedServices] = useState<BookedService[]>([]);
  const [user, setUser] = useState(initialUser);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    const storedBooks = localStorage.getItem('orderedBooks');
    if (storedBooks) {
      setOrderedBooks(JSON.parse(storedBooks));
    }

    const storedServices = localStorage.getItem('bookedServices');
    if (storedServices) {
      setBookedServices(JSON.parse(storedServices));
    }
  }, []);

  const handleRemindPassword = () => {
    toast.info(`Пароль отправлен на почту ${user.email}`);
  };

  const openEditModal = () => {
    setEditableUser(user);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setEditableUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setEditableUser(prev => ({ ...prev, avatar: reader.result as string }));
        };
        reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setUser(editableUser);
    toast.success('Профиль успешно обновлен!');
    closeEditModal();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-lg text-center">
              <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-2 mb-6">
                В библиотеке с {new Date(user.memberSince).toLocaleDateString()}
              </p>
              <div className="space-y-3">
                <button 
                    onClick={openEditModal}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Edit className="w-4 h-4 mr-2" />
                    Редактировать
                </button>
                <button 
                    onClick={handleRemindPassword}
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <KeyRound className="w-4 h-4 mr-2" />
                    Напомнить пароль
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Ordered Books */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Заказанные книги</h2>
              {orderedBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {orderedBooks.map(book => (
                    <Link to={`/books/${book.id}`} key={book.id} className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <ImageWithFallback
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${book.color} rounded-xl shadow-lg flex items-center justify-center`}>
                                    <BookOpen className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white text-center text-sm font-semibold flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Сдать до {book.dueDate}</span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{book.title}</h3>
                                <p className="text-gray-700 font-semibold mb-2 text-sm">{book.author}</p>
                                <div className="flex justify-between items-center mt-auto pt-2">
                                    <p className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">{book.category}</p>
                                    <p className="text-xs text-gray-500">{book.year}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Вы еще не заказали ни одной книги</h3>
                    <p className="text-gray-600 mb-6">Перейдите в электронный каталог, чтобы найти что-то интересное.</p>
                    <Link to="/books-catalog" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow">
                        В каталог
                    </Link>
                </div>
              )}
            </div>

            {/* Booked Services */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Забронированные услуги</h2>
              {bookedServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {bookedServices.map(service => (
                    <Link to={`/services/${service.serviceId}`} key={service.id} className="group">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                            <div className="relative h-56 overflow-hidden">
                                <ImageWithFallback
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl shadow-lg flex items-center justify-center`}>
                                    <Star className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white text-center text-sm font-semibold flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{new Date(service.date).toLocaleDateString()} в {service.time}</span>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{service.title}</h3>
                            </div>
                        </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                    <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Вы еще не бронировали ни одной услуги</h3>
                    <p className="text-gray-600 mb-6">Перейдите в раздел услуг, чтобы найти что-то для себя.</p>
                    <Link to="/services" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow">
                        К услугам
                    </Link>
                </div>
              )}
            </div>

            {/* Signed Up Events */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Мои мероприятия</h2>
                <SignedUpEvents />
            </div>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            >
                <motion.div 
                    initial={{ scale: 0.9, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: -20 }}
                    className="bg-white rounded-2xl shadow-xl w-full max-w-md relative"
                >
                    <button onClick={closeEditModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                        <X className="w-6 h-6" />
                    </button>
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-center mb-6">Редактирование профиля</h2>
                        
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <img src={editableUser.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                            <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
                                <Camera className="w-5 h-5" />
                            </label>
                            <input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={editableUser.name}
                                    onChange={handleUserChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={editableUser.email}
                                    onChange={handleUserChange}
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 mt-8">
                            <button 
                                onClick={closeEditModal} 
                                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Отмена
                            </button>
                            <button 
                                onClick={handleSaveChanges} 
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow font-medium flex items-center gap-2"
                            >
                                <Save className="w-4 h-4"/>
                                Сохранить
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
