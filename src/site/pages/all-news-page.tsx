import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { motion } from 'motion/react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '../components/ui/pagination';

export const newsItems = [
  {
    id: 1,
    title: 'Летний читальный зал открыт!',
    date: '15 июня 2024',
    description: 'Наслаждайтесь книгами на свежем воздухе в нашем уютном летнем дворике.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzUyNjQ1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Новые поступления: научная фантастика',
    date: '12 июня 2024',
    description: 'Более 50 новых книг в жанре научной фантастики уже на полках.',
    image: 'https://images.unsplash.com/photo-1593941707882-9a8b1a8f6e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2lmJTIwYm9va3N8ZW58MXx8fHwxNzc1MjY0NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Онлайн-встреча с писателем-фантастом',
    date: '10 июня 2024',
    description: 'Обсуждение новой книги и творческих планов с известным автором.',
    image: 'https://images.unsplash.com/photo-1611078489816-434312675204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjBhdCUyMGElMjBkZXNrfGVufDF8fHx8MTc3NTI2NDUzMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Курсы программирования для детей',
    date: '8 июня 2024',
    description: 'Открыт набор в летние группы по изучению основ программирования на Python и Scratch.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY29kaW5nfGVufDF8fHx8MTc3NTI2NDU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Выставка-ярмарка редких книг',
    date: '5 июня 2024',
    description: 'Уникальная возможность приобрести редкие и антикварные издания от частных коллекционеров.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXJlJTIwYm9va3xlbnwxfHx8fDE3NzUyNjQ1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Неделя классической музыки',
    date: '1 июня 2024',
    description: 'Насладитесь живым исполнением произведений Моцарта, Баха и Бетховена в нашем концертном зале.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpY3xlbnwxfHx8fDE3NzUyNjQ1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 7,
    title: 'Поэтический вечер',
    date: '28 мая 2024',
    description: 'Приглашаем всех любителей поэзии на вечер открытого микрофона.',
    image: 'https://images.unsplash.com/photo-1541624645396-e13dae416283?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0cnl8ZW58MXx8fHwxNzc1MjY0NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    title: 'Мастер-класс по реставрации книг',
    date: '25 мая 2024',
    description: 'Научитесь основам переплетного дела и подарите вторую жизнь вашим любимым книгам.',
    image: 'https://images.unsplash.com/photo-1517392292323-a87754f91334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzc1MjY0NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 9,
    title: 'Книжный клуб: обсуждаем классику',
    date: '22 мая 2024',
    description: 'В этом месяце обсуждаем "Мастера и Маргариту". Присоединяйтесь к дискуссии!',
    image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY2x1YnxlbnwxfHx8fDE3NzUyNjQ2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 10,
    title: 'Выставка детских рисунков',
    date: '20 мая 2024',
    description: 'Экспозиция работ юных художников на тему "Мой любимый сказочный герой".',
    image: 'https://images.unsplash.com/photo-1501418611760-7ac53597a149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRyYXdpbmdzfGVufDF8fHx8MTc3NTI2NDY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 11,
    title: 'Лекция по истории искусств',
    date: '18 мая 2024',
    description: 'Откройте для себя мир импрессионизма с нашим ведущим искусствоведом.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBoaXN0b3J5JTIwbGVjdHVyZXxlbnwxfHx8fDE3NzUyNjQ2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 12,
    title: 'Курс по цифровой грамотности для старшего поколения',
    date: '15 мая 2024',
    description: 'Поможем освоить компьютер, интернет и госуслуги. Запись открыта!',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwdXNpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NzUyNjQ2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 13,
    title: 'Архитектурный конкурс: проект нового крыла библиотеки',
    date: '10 мая 2024',
    description: 'Приглашаем архитекторов и дизайнеров к участию в конкурсе на лучший проект.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb250ZXN0fGVufDF8fHx8MTc3NTI2NDY2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 14,
    title: 'Библионочь 2024: как это было',
    date: '5 мая 2024',
    description: 'Фотоотчет и отзывы о самом масштабном культурном событии весны.',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZXZlbnR8ZW58MXx8fHwxNzc1MjY0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export interface PublicNews {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  /** Полный текст публикации. У сидированных новостей совпадает с description. */
  body?: string;
}

export default function AllNewsPage({ items = newsItems }: { items?: PublicNews[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Все новости</h1>
            <p className="mt-4 text-lg text-gray-600">Будьте в курсе последних событий и анонсов нашей библиотеки.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group h-full"
              >
                <Link to={`/news/${item.id}`} className="block relative h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </Link>
                <div className="p-6 flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 flex-grow">{item.title}</h3>
                  <p className="text-gray-700 text-sm line-clamp-3">{item.description}</p>
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
      </main>
      <Footer />
    </div>
  );
}
