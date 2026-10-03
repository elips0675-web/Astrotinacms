import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import type { PublicNews } from './all-news-page';

export default function NewsDetailPage({ items = [] }: { items?: PublicNews[] }) {
  const { id } = useParams();
  const index = items.findIndex((item) => String(item.id) === String(id));
  const item = index === -1 ? undefined : items[index];
  const newer = index > 0 ? items[index - 1] : undefined;
  const older = index !== -1 && index < items.length - 1 ? items[index + 1] : undefined;

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="pt-40 pb-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Новость не найдена</h1>
            <p className="text-lg text-gray-600 mb-10">Такой публикации нет. Посмотрите все новости библиотеки.</p>
            <Link
              to="/all-news"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-xl transition-shadow font-semibold"
            >
              Все новости
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/all-news"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Все новости
            </Link>

            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{item.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {item.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg mb-10"
          >
            <ImageWithFallback
              src={item.image}
              alt={item.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{item.body || item.description}</p>
          </motion.div>

          <div className="mt-16 pt-8 border-t border-gray-200 grid gap-4 sm:grid-cols-2">
            {older ? (
              <Link
                to={`/news/${older.id}`}
                className="group rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <ArrowLeft className="w-4 h-4" />
                  Предыдущая
                </span>
                <span className="block font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {older.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {newer ? (
              <Link
                to={`/news/${newer.id}`}
                className="group rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all sm:text-right"
              >
                <span className="inline-flex items-center gap-2 text-sm text-gray-500 mb-2 sm:flex-row-reverse">
                  Следующая
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="block font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {newer.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}