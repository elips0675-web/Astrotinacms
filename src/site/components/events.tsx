import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const events = [
  {
    date: '15 Апр',
    time: '18:00',
    title: 'Встреча с автором',
    description: 'Лекция и автограф-сессия с современным писателем',
    location: 'Конференц-зал',
    attendees: 45,
    category: 'Литература',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    date: '22 Апр',
    time: '15:00',
    title: 'Детский читательский клуб',
    description: 'Интерактивное чтение и творческие мастер-классы',
    location: 'Детская зона',
    attendees: 30,
    category: 'Для детей',
    color: 'from-pink-500 to-purple-500',
  },
  {
    date: '28 Апр',
    time: '19:00',
    title: 'Цифровые технологии в образовании',
    description: 'Практический семинар по использованию AI в обучении',
    location: 'Медиа-зал',
    attendees: 60,
    category: 'Технологии',
    color: 'from-green-500 to-emerald-500',
  },
];

export function Events() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert(`Спасибо за подписку, ${email}!`);
      setEmail('');
      // Here you would typically close the modal.
    } else {
      alert('Пожалуйста, введите корректный email.');
    }
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm mb-4">
            События
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Предстоящие мероприятия
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашим лекциям, мастер-классам и встречам
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763462711669-263800467e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwZXZlbnQlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc1MDU2MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-full text-sm font-medium shadow-lg`}>
                  {event.category}
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-xl p-3 text-center shadow-lg">
                  <div className="text-2xl font-bold text-gray-900">{event.date.split(' ')[0]}</div>
                  <div className="text-xs text-gray-600 uppercase">{event.date.split(' ')[1]}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} участников</span>
                  </div>
                </div>

                {/* Button */}
                <button className="w-full py-3 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white text-gray-900 rounded-xl transition-all font-medium">
                  Зарегистрироваться
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Не пропустите наши события
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Подпишитесь на рассылку и получайте уведомления о новых мероприятиях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:shadow-xl transition-shadow whitespace-nowrap">
                    Подписаться
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm bg-white rounded-lg p-6">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900 text-2xl font-bold">Подписка на рассылку</DialogTitle>
                    <DialogDescription className="text-gray-600 mt-2">
                      Введите ваш email, чтобы быть в курсе всех событий.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <label htmlFor="email-modal" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email-modal"
                      type="email"
                      placeholder="Ваш email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <DialogFooter>
                    <button
                      type="button"
                      onClick={handleSubscribe}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-medium"
                    >
                      Подписаться
                    </button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <a href="/all-events" className="px-8 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-shadow whitespace-nowrap">
                Посмотреть все
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
