import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Search, User, BookOpen, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    const checkNotifications = () => {
        const storedNotifications = localStorage.getItem('notifications');
        if (storedNotifications) {
            const notifications = JSON.parse(storedNotifications);
            const unread = notifications.some((n: any) => !n.read);
            setHasUnread(unread);
        } else {
             setHasUnread(true);
        }
    }

    checkNotifications();

    window.addEventListener('focus', checkNotifications);
    const interval = setInterval(checkNotifications, 5000);

    return () => {
        window.removeEventListener('focus', checkNotifications);
        clearInterval(interval);
    };

  }, []);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                <h1 className="font-semibold text-lg sm:text-xl text-gray-900">Библиотека 2026</h1>
                <p className="text-xs text-gray-500">Центр знаний и культуры</p>
                </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Главная', href: '/' },
              { name: 'Новости', href: '/all-news' },
              { name: 'Мероприятия', href: '/all-events' },
              { name: 'Услуги', href: '/services' },
              { name: 'Электронный каталог', href: '/books-catalog' },
              { name: 'Интерактивная карта', href: '/interactive-map' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </motion.button>
            
            <Link to="/notifications">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                {hasUnread && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>
                )}
              </motion.button>
            </Link>
            
            <Link to="/profile">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <User className="w-5 h-5 text-gray-700" />
              </motion.button>
            </Link>

            <Link to="/registration">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow"
              >
                Записаться
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <nav className="flex flex-col gap-4 py-4">
              {[
                { name: 'Главная', href: '/' },
                { name: 'Новости', href: '/all-news' },
                { name: 'Мероприятия', href: '/all-events' },
                { name: 'Услуги', href: '/services' },
                { name: 'Электронный каталог', href: '/books-catalog' },
                { name: 'Интерактивная карта', href: '/interactive-map' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="py-4 border-t border-gray-200 flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Search className="w-5 h-5 text-gray-700" />
                </button>
                <Link to="/notifications" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                    <Bell className="w-5 h-5 text-gray-700" />
                    {hasUnread && (
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></span>
                    )}
                </Link>
                <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <User className="w-5 h-5 text-gray-700" />
                </Link>
                <Link to="/registration" className="flex-1">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                      Записаться
                  </button>
                </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
