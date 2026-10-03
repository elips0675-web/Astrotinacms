import { motion } from 'motion/react';
import { Eye, Droplet, Dumbbell, Wifi, Clock, Users, ArrowRight, Check, Printer, FileText, CreditCard, BookOpen, Package, ScanLine, Coffee, Gamepad2, Mic, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PushNotificationBanner } from '../components/PushNotificationBanner';
import Slider from '../lib/slider';

const services = [
  {
    id: 'observation-deck',
    icon: Eye,
    title: 'Обзорная площадка',
    subtitle: 'Панорамный вид на город',
    description: 'Посетите нашу обзорную площадку на 10-м этаже с потрясающим видом на город. Идеальное место для вдохновения и отдыха.',
    price: 'Бесплатно для читателей',
    features: [
      'Высота 40 метров',
      'Панорамное остекление 360°',
      'Зона для фотосессий',
      'Бесплатный Wi-Fi',
      'Кафе с террасой',
    ],
    image: 'https://images.unsplash.com/photo-1542725752-e9f7259b3881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHJlYWRpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzc1MDU2MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'sauna',
    icon: Droplet,
    title: 'Сауна',
    subtitle: 'Релаксация и восстановление',
    description: 'Современный спа-комплекс с финской сауной, хаммамом и зоной отдыха. Идеально после долгого рабочего дня. Бронируйте онлайн или по телефону.',
    price: 'От 500₽/час',
    features: [
      'Финская сауна',
      'Турецкий хаммам',
      'Зона отдыха с шезлонгами',
      'Душевые кабины',
      'Онлайн-бронирование 24/7',
    ],
    image: 'https://images.unsplash.com/photo-1680534240478-08c865dc608f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzc1MDU2MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
   {
    id: 'cafe',
    icon: Coffee,
    title: 'Кафе',
    subtitle: 'Кофе и десерты',
    description: 'Наше уютное кафе предлагает широкий выбор свежесваренного кофе, чая, десертов и закусок. Идеальное место для встречи с друзьями или перерыва между чтением.',
    price: 'Средний чек 300₽',
    features: [
      'Специализированный кофе',
      'Свежая выпечка',
      'Сезонное меню',
      'Веганские опции',
      'Бесплатный Wi-Fi',
    ],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNjc0MDA1MDIyfDA&ixlib=rb-1.2.1&q=80&w=1080',
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 'lecture-hall',
    icon: Presentation,
    title: 'Лекторий',
    subtitle: 'Знания и дискуссии',
    description: 'Пространство для проведения лекций, мастер-классов и презентаций. Зал, вмещающий до 500 человек, оснащён всем необходимым оборудованием.',
    price: 'Аренда от 5000₽/час',
    features: [
      'Вместимость до 500 человек',
      'Проектор и большой экран',
      'Профессиональное звуковое оборудование',
      'Возможность онлайн-трансляций',
      'Комфортные кресла',
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWN0dXJlJTIwaGFsbHxlbnwxfHx8fDE2NzQwMDUxNTE&ixlib=rb-1.2.1&q=80&w=1080',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'concert-hall',
    icon: Mic,
    title: 'Концертный зал',
    subtitle: 'Музыка и представления',
    description: 'Многофункциональный зал на 500 мест, идеально подходящий для проведения концертов, театральных постановок и крупных мероприятий.',
    price: 'Аренда от 10000₽/час',
    features: [
      'Вместимость 500 мест',
      'Профессиональная сцена',
      'Световое и звуковое оборудование',
      'Гримёрные комнаты',
      'Отличная акустика',
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbHxlbnwxfHx8fDE2NzQwMDUyMjk&ixlib=rb-1.2.1&q=80&w=1080',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
  },
  {
    id: 'kids-zone',
    icon: Gamepad2,
    title: 'Детская комната',
    subtitle: 'Игры и развитие',
    description: 'Оставьте ваших детей в нашей игровой комнате под присмотром опытных аниматоров. Здесь есть всё для веселья и развития: от настольных игр до игровых приставок.',
    price: 'От 250₽/час',
    features: [
      'Зона для самых маленьких',
      'Развивающие игры',
      'Игровые приставки',
      'Мастер-классы по выходным',
      'Аниматоры и присмотр',
    ],
    image: 'https://images.unsplash.com/photo-1556388250-b4c74c57376c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2x1YnxlbnwxfHx8fDE2NzQwMDUyOTV8MA&ixlib=rb-1.2.1&q=80&w=1080',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    id: 'gym',
    icon: Dumbbell,
    title: 'Спортзал',
    subtitle: 'Фитнес и здоровье',
    description: 'Полностью оборудованный тренажёрный зал с современным оборудованием и профессиональными тренерами.',
    price: 'От 1000₽/месяц',
    features: [
      'Кардио-зона',
      'Силовые тренажёры',
      'Зона для йоги',
      'Персональные тренировки',
      'Раздевалки с душем',
    ],
    image: 'https://images.unsplash.com/photo-1728450136822-f0a58df17825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGlicmFyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1MDMxMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'coworking',
    icon: Wifi,
    title: 'Коворкинг',
    subtitle: 'Пространство для работы',
    description: 'Современное коворкинг-пространство для продуктивной работы и сотрудничества с единомышленниками.',
    price: 'От 200₽/час',
    features: [
      'Рабочие места с розетками',
      'Скоростной интернет 1 Гбит/с',
      'Переговорные комнаты',
      'Принтер и сканер',
      'Кофе и чай',
    ],
    image: 'https://images.unsplash.com/photo-1773352517110-ec61a8ade9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29sbGVjdGlvbiUyMHNoZWx2ZXN8ZW58MXx8fHwxNzc1MDU2MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
];

const printingServices = [
  { 
    id: 'document-printing',
    icon: Printer,
    title: 'Печать и копирование',
    description: 'Ч/б и цветная печать, копирование. Печать с USB и e-mail.',
    image: 'https://images.unsplash.com/photo-1771173479042-810085465e49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudHMlMjBwcmludGluZ3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prices: [
      { name: 'А4 ч/б (печать/копир.)', price: '5₽' },
      { name: 'А4 цвет (печать/копир.)', price: '15₽' },
      { name: 'А3 ч/б (печать/копир.)', price: '10₽' },
      { name: 'А3 цвет (печать/копир.)', price: '30₽' },
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'scanning',
    icon: ScanLine,
    title: 'Сканирование',
    description: 'Профессиональное сканирование документов и фотографий.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8592a1881d8?ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FubmVyJTIwZG9jdW1lbnR8ZW58MHx8fHwxNzE0NTg0NTI5fDA&ixlib=rb-4.0.3&w=1080',
    prices: [
      { name: 'Сканирование А4', price: '10₽' },
      { name: 'Сканирование А3', price: '20₽' },
      { name: 'Сохранение на USB', price: 'бесплатно' },
      { name: 'Отправка на e-mail', price: '50₽' },
    ],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    id: 'bookbinding',
    icon: BookOpen,
    title: 'Переплёт и ламинирование',
    description: 'Различные виды переплёта и защитное ламинирование.',
    image: 'https://images.unsplash.com/photo-1762113246719-1a6adc837209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rYmluZGluZyUyMGhhcmRjb3ZlciUyMGJvb2tzfGVufDF8fHx8MTc3NTA1NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    prices: [
      { name: 'Скрепка (до 40 л.)', price: '30₽' },
      { name: 'Пружина (до 150 л.)', price: '100₽' },
      { name: 'Термоклей (до 300 л.)', price: '150₽' },
      { name: 'Ламинирование А4', price: '50₽' },
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'business-cards',
    icon: CreditCard,
    title: 'Визитки',
    description: 'Профессиональная печать визитных карточек',
    image: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYnVzaW5lc3MlMjBjYXJkc3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prices: [
      { name: 'Односторонние (100 шт.)', price: '400₽' },
      { name: 'Двухсторонние (100 шт.)', price: '600₽' },
      { name: 'Дизайнерская бумага', price: '+200₽' },
      { name: 'Срочная печать (1 час)', price: '+300₽' },
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'brochures',
    icon: FileText,
    title: 'Брошюры и буклеты',
    description: 'Печать рекламных материалов и каталогов',
    image: 'https://images.unsplash.com/photo-1612351217829-9e467539406f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZXMlMjBmbHllcnMlMjBjYXRhbG9nfGVufDF8fHx8MTc3NTA1NzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    prices: [
      { name: 'А4 буклет (2 фальца)', price: '50₽' },
      { name: 'А5 брошюра (8 стр.)', price: '150₽' },
      { name: 'Каталог А4 (20 стр.)', price: '500₽' },
      { name: 'Дизайн-макет', price: 'от 1000₽' },
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'large-format',
    icon: Package,
    title: 'Широкоформатная печать',
    description: 'Баннеры, плакаты и постеры любого размера',
    image: 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBwb3N0ZXIlMjBwcmludGluZ3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    prices: [
      { name: 'Плакат А2 (бумага)', price: '200₽' },
      { name: 'Плакат А1 (холст)', price: '700₽' },
      { name: 'Баннер (1 м²)', price: '500₽' },
      { name: 'Фото на пенокартоне', price: 'от 1200₽' },
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
        
        {/* Animated shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/National_Library_of_Belarus_symbol.svg/1200px-National_Library_of_Belarus_symbol.svg.png" alt="National Library of Belarus" className="w-full h-full object-contain" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm text-sm text-blue-600">
              ✨ Премиальные услуги
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Наши{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Услуги
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Библиотека 2026 — это больше, чем просто книги. Мы создали уникальное пространство для вашего комфорта и развитя.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Floating badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl shadow-2xl flex items-center justify-center`}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 ${service.bgColor} rounded-full mb-4`}>
                      <Icon className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                      <span className="text-sm font-medium text-gray-700">{service.subtitle}</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className={`inline-block px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold mb-8 text-lg shadow-lg`}>
                      {service.price}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-full hover:shadow-xl transition-shadow flex items-center gap-2 group`}>
                        Забронировать
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <Link to={`/services/${service.id}`} className="px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-colors">
                        Узнать подробнее
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Printing Services Section with Slider */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-full text-sm mb-4 shadow-sm">
              📄 Полиграфия
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Печатные услуги
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Профессиональная печать любых форматов и тиражей с использованием современного оборудования
            </p>
            <div className="mt-8">
                <Link to="/printing-services" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:shadow-xl transition-shadow font-semibold">
                    Перейти в каталог
                </Link>
            </div>
          </motion.div>

          <PushNotificationBanner />

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-2 sm:px-8"
          >
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              arrows={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                  }
                }
              ]}
            >
              {printingServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="px-2 sm:px-4">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                        <div className="flex flex-col h-full">
                          {/* Image */}
                          <div className="relative h-48 sm:h-56 overflow-hidden">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            
                            {/* Icon Badge */}
                            <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${service.color} rounded-xl shadow-lg flex items-center justify-center`}>
                              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                            </div>

                            {/* Title on image */}
                            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                                {service.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          {/* Pricing */}
                          <div className="p-4 sm:p-6 flex flex-col flex-grow">
                            <div className="space-y-2 sm:space-y-3 flex-grow">
                              {service.prices.map((item) => (
                                <div key={item.name} className="flex items-center justify-between">
                                  <span className="text-sm sm:text-base text-gray-700">{item.name}</span>
                                  <span className={`font-bold text-base sm:text-lg bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                                    {item.price}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Button */}
                            <Link to={`/printing-services/${service.id}`} className={`mt-4 sm:mt-6 w-full py-2.5 sm:py-3 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-lg transition-all text-sm sm:text-base font-medium flex items-center justify-center gap-2 group`}>
                              Подробнее
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          >
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Быстрое выполнение</h4>
              <p className="text-xs sm:text-sm text-gray-600">Срочные заказы от 30 минут</p>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Высокое качество</h4>
              <p className="text-xs sm:text-sm text-gray-600">Профессиональное оборудование</p>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md text-center sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Скидки постоянным</h4>
              <p className="text-xs sm:text-sm text-gray-600">До 20% для читателей</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">График работы</h3>
              <p className="text-gray-600 mb-4">
                Ежедневно с 8:00 до 22:00<br />
                Без выходных
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Для читателей</h3>
              <p className="text-gray-600 mb-4">
                Специальные цены для держателей читательского билета
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Бронирование</h3>
              <p className="text-gray-600 mb-4">
                Онлайн-бронирование доступно 24/7 через сайт или приложение
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Забронируйте любую услугу онлайн или свяжитесь с нами для получения дополнительной информации
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-2xl transition-shadow font-semibold">
                  Забронировать сейчас
                </button>
                <button className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all font-semibold">
                  Связаться с нами
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
