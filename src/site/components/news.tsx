import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'Летний читальный зал открыт!',
    date: '15 июня 2024',
    description: 'Наслаждайтесь книгами на свежем воздухе в нашем уютном летнем дворике.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwc3VtbWVyfGVufDF8fHx8MTc3NTE2NjYyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Новые поступления: научная фантастика',
    date: '12 июня 2024',
    description: 'Более 50 новых книг в жанре научной фантастики уже на полках.',
    image: 'https://images.unsplash.com/photo-1583463699313-290071c67f56?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Онлайн-встреча с писателем-фантастом',
    date: '10 июня 2024',
    description: 'Обсуждение новой книги и творческих планов с известным автором.',
    image: 'https://images.unsplash.com/photo-1516131206008-dd2c85b3b1dd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Выставка «История книгопечатания»',
    date: '8 июня 2024',
    description: 'Узнайте о развитии технологий печати от Гутенберга до наших дней.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNjc0MDIwMzY4fDA&ixlib=rb-1.2.1&q=80&w=1080',
  },
];

export function News() {
  return (
    <section id="news" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Новости
          </h2>
          <Link to="/all-news" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all font-semibold flex items-center gap-2">
            <span>Все новости</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
