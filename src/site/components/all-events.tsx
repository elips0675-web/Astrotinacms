import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from './ui/pagination';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const events = [
  {
    id: 'author-meeting',
    date: '15 Апр',
    time: '18:00',
    title: 'Встреча с автором',
    description: 'Лекция и автограф-сессия с современным писателем',
    location: 'Конференц-зал',
    attendees: 45,
    category: 'Литература',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYXV0aG9yJTIwbWVldGluZ3xlbnwxfHx8fDE3NzUyNTkxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'kids-reading-club',
    date: '22 Апр',
    time: '15:00',
    title: 'Детский читательский клуб',
    description: 'Интерактивное чтение и творческие мастер-классы',
    location: 'Детская зона',
    attendees: 30,
    category: 'Для детей',
    color: 'from-pink-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBjbHVifGVufDF8fHx8MTc3NTI1OTEyNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'digital-education-workshop',
    date: '28 Апр',
    time: '19:00',
    title: 'Цифровые технологии в образовании',
    description: 'Практический семинар по использованию AI в обучении',
    location: 'Медиа-зал',
    attendees: 60,
    category: 'Технологии',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWR1Y2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc1MjU5MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'speed-reading-course',
    date: '05 Мая',
    time: '17:00',
    title: 'Курс по скорочтению',
    description: 'Научитесь читать быстрее и запоминать больше информации',
    location: 'Читальный зал №2',
    attendees: 25,
    category: 'Образование',
    color: 'from-yellow-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1558901357-ca41e02f02d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMHJlYWRpbmclMjBjb3Vyc2V8ZW58MXx8fHwxNzc1MjU5MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'rare-book-exhibition',
    date: '12 Мая',
    time: '14:00',
    title: 'Выставка редких книг',
    description: 'Экспозиция уникальных изданий из архивов библиотеки',
    location: 'Выставочный зал',
    attendees: 100,
    category: 'Выставки',
    color: 'from-indigo-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXJlJTIwYm9vayUyMGV4aGliaXRpb258ZW58MXx8fHwxNzc1MjU5MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'calligraphy-workshop',
    date: '19 Мая',
    time: '16:00',
    title: 'Мастер-класс по каллиграфии',
    description: 'Изучите основы красивого письма с профессиональным каллиграфом',
    location: 'Творческая мастерская',
    attendees: 20,
    category: 'Искусство',
    color: 'from-red-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1517392292323-a87754f91334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsaWdyYXBoeSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NTI1OTE1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'modern-poetry-roundtable',
    date: '25 Мая',
    time: '12:00',
    title: 'Круглый стол по современной поэзии',
    description: 'Обсуждение тенденций и новых имен в русской поэзии.',
    location: 'Малый зал',
    attendees: 35,
    category: 'Литература',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1516900404323-646e22c3b259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0cnklMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3NTI1ODAwNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'board-games-night',
    date: '30 Мая',
    time: '18:30',
    title: 'Вечер настольных игр',
    description: 'Проведите вечер с друзьями за популярными настольными играми.',
    location: 'Игротека',
    attendees: 50,
    category: 'Досуг',
    color: 'from-teal-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1585435425243-a68d8b5c7e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWVzJTIwbmlnaHR8ZW58MXx8fHwxNzc1MjU4MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'family-day-cartoon',
    date: '02 Июня',
    time: '11:00',
    title: 'Семейный день: создаем мультфильм',
    description: 'Мастер-класс для детей и родителей по созданию stop-motion анимации.',
    location: 'Детская зона',
    attendees: 25,
    category: 'Для детей',
    color: 'from-pink-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1620666060481-b5e05c871545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9wJTIwbW90aW9uJTIwYW5pbWF0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc1MjU4MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'french-cinema-classic',
    date: '08 Июня',
    time: '19:00',
    title: 'Кинопоказ: классика французского кино',
    description: 'Просмотр и обсуждение фильма "На последнем дыхании" Жан-Люка Годара.',
    location: 'Кинозал',
    attendees: 70,
    category: 'Кино',
    color: 'from-gray-700 to-gray-900',
    image: 'https://images.unsplash.com/photo-1518932622448-b80c105b6143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjaW5lbWF8ZW58MXx8fHwxNzc1MjU4MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'jazz-history-lecture',
    date: '14 Июня',
    time: '17:00',
    title: 'Лекция: История джаза',
    description: 'Откройте для себя мир джазовой музыки от ее истоков до современности.',
    location: 'Музыкальный салон',
    attendees: 40,
    category: 'Музыка',
    color: 'from-lime-600 to-green-500',
    image: 'https://images.unsplash.com/photo-1511192336575-5a7863792c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXp6JTIwaGlzdG9yeXxlbnwxfHx8fDE3NzUyNTgwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'financial-literacy-seminar',
    date: '20 Июня',
    time: '16:00',
    title: 'Основы финансовой грамотности',
    description: 'Семинар о том, как управлять личными финансами и инвестировать.',
    location: 'Конференц-зал',
    attendees: 55,
    category: 'Образование',
    color: 'from-yellow-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzUyNTgwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'photo-walk',
    date: '25 Июня',
    time: '18:00',
    title: 'Фото-прогулка по городу',
    description: 'Практическое занятие по уличной фотографии с профессиональным фотографом.',
    location: 'Старт от библиотеки',
    attendees: 15,
    category: 'Искусство',
    color: 'from-red-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1502899479313-1b9a1175375e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NTI1ODEwMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'it-department-open-day',
    date: '01 Июля',
    time: '13:00',
    title: 'День открытых дверей в IT-отделе',
    description: 'Узнайте, как технологии меняют библиотеку, и попробуйте себя в роли программиста.',
    location: 'Медиа-зал',
    attendees: 80,
    category: 'Технологии',
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hbCUyMGl0JTIwZGVwYXJ0bWVudHxlbnwxfHx8fDE3NzUyNTgxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'stand-up-comedy-night',
    date: '07 Июля',
    time: '19:00',
    title: 'Вечер стендап комедии',
    description: 'Открытый микрофон для всех желающих попробовать себя в жанре стендап.',
    location: 'Актовый зал',
    attendees: 120,
    category: 'Досуг',
    color: 'from-teal-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1583693231362-f7200a7b458b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZCUyMHVwJTIwY29tZWR5JTIwbWljfGVufDF8fHx8MTc3NTI1ODExOXww&ixlib=rb-4.1.0&q=80&w=1080',
  }
];

export function AllEvents() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSignUp = (event: any) => {
    const storedEvents = localStorage.getItem('signedUpEvents');
    const signedUpEvents = storedEvents ? JSON.parse(storedEvents) : [];
    if (signedUpEvents.find((e: any) => e.id === event.id)) {
        toast.info('Вы уже записаны на это мероприятие');
        return;
    }
    signedUpEvents.push(event);
    localStorage.setItem('signedUpEvents', JSON.stringify(signedUpEvents));
    toast.success('Вы успешно записались на мероприятие!');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, currentPage - halfPagesToShow);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(1); }}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        pageNumbers.push(<PaginationItem key="start-ellipsis"><PaginationEllipsis /></PaginationItem>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => { e.preventDefault(); handlePageChange(i); }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<PaginationItem key="end-ellipsis"><PaginationEllipsis /></PaginationItem>);
      }
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(totalPages); }}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };

  return (
    <section id="события" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Все мероприятия
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашим лекциям, мастер-классам и встречам
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
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

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

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

                <button 
                  onClick={() => handleSignUp(event)}
                  className="w-full py-3 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white text-gray-900 rounded-xl transition-all font-medium">
                  Зарегистрироваться
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'pointer-events-none text-gray-400' : ''}
                />
              </PaginationItem>
              {renderPageNumbers()}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? 'pointer-events-none text-gray-400' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </motion.div>

      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
}
