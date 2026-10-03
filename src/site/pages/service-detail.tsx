import { motion } from 'motion/react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Eye, Droplet, Dumbbell, Wifi, Clock, Users, ArrowRight, Check, Calendar, MapPin, Phone, Mail, Star, Plus, Coffee, Gamepad2, Mic, Presentation, SearchX } from 'lucide-react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { Dialog, DialogContent } from '../components/ui/dialog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const servicesData: Record<string, any> = {
  'observation-deck': {
    id: 'observation-deck',
    icon: Eye,
    title: 'Обзорная площадка',
    subtitle: 'Панорамный вид на город',
    description: 'Посетите нашу обзорную площадку на 10-м этаже с потрясающим видом на город. Идеальное место для вдохновения и отдыха.',
    fullDescription: 'Обзорная площадка Библиотеки 2026 — это не просто смотровая площадка, а настоящее пространство для вдохновения и отдыха. Панорамное остекление позволяет наслаждаться видами города в любую погоду. На территории площадки расположено уютное кафе с террасой, где можно выпить кофе или чай, наслаждаясь захватывающими видами.\n\nПлощадка оборудована удобными зонами отдыха, бесплатным Wi-Fi и специальными местами для фотосессий. Здесь регулярно проводятся мастер-классы по фотографии, встречи поэтов и писателей, а также романтические мероприятия на закате.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    images: [
      'https://images.unsplash.com/photo-1721031711599-44c286fda0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHBhbm9yYW1pYyUyMHZpZXd8ZW58MXx8fHwxNzc1MTA2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764654371856-376dc6c13897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNlcnZhdGlvbiUyMGRlY2slMjB0ZXJyYWNlJTIwdXJiYW58ZW58MXx8fHwxNzc1MTA2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1626279484248-59d4cc4ab19f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJ2FmZSUyMHRlcnJhY2V8ZW58MXx8fHwxNzc1MTA2ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: MapPin, title: 'Высота 40 метров', description: '10-й этаж здания библиотеки' },
      { icon: Eye, title: 'Панорамное остекление 360°', description: 'Обзор всего города без препятствий' },
      { icon: Users, title: 'Зона для фотосессий', description: 'Специально оборудованные места' },
      { icon: Wifi, title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет' },
      { icon: Clock, title: 'Кафе с террасой', description: 'Напитки и лёгкие закуски' },
      { icon: Star, title: 'Мероприятия', description: 'Регулярные культурные события' },
    ],
    pricing: [
      { name: 'Для читателей библиотеки', price: 'Бесплатно', features: ['Свободный доступ', 'Wi-Fi', 'Зона отдыха'] },
      { name: 'Для посетителей', price: '200₽', features: ['1 посещение', 'Wi-Fi', 'Зона отдыха', 'Скидка в кафе 10%'] },
      { name: 'Фотосессия', price: '1500₽/час', features: ['Аренда площадки', 'Доступ ко всем зонам', 'Помощь в организации'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '10:00 - 22:00' },
      { day: 'Суббота - Воскресенье', time: '09:00 - 23:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-67',
      email: 'observation@library2026.ru',
    },
  },
  'sauna': {
    id: 'sauna',
    icon: Droplet,
    title: 'Сауна',
    subtitle: 'Релаксация и восстановление',
    description: 'Современный спа-комплекс с финской сауной, хаммамом и зоной отдыха. Идеально после долгого рабочего дня.',
    fullDescription: 'Наш спа-комплекс оснащён всем необходимым для полноценного отдыха и восстановления. Финская сауна с температурой до 90°C помогает очистить организм и укрепить иммунитет. Турецкий хаммам с влажным паром идеально подходит для глубокого очищения кожи и расслабления мышц.\n\nПросторная зона отдыха с удобными шезлонгами, современные душевые кабины с тропическим душем, ароматерапия и возможность заказа массажа — всё это создаёт атмосферу настоящего спа-курорта в центре города. Мы используем только натуральные масла и ароматы.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    images: [
      'https://images.unsplash.com/photo-1757940113920-69e3686438d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYXVuYSUyMGludGVyaW9yfGVufDF8fHx8MTc3NTEwNjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1723641349153-1e81030ab2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwcG9vbHxlbnwxfHx8fDE3NzUxMDY4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBzdGVhbSUyMHJvb20lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzUxMDY4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: Droplet, title: 'Финская сауна', description: 'Температура до 90°C' },
      { icon: Droplet, title: 'Турецкий хаммам', description: 'Влажный пар и ароматерапия' },
      { icon: Users, title: 'Зона отдыха', description: 'Комфортные шезлонги' },
      { icon: Check, title: 'Душевые кабины', description: 'С тропическим душем' },
      { icon: Clock, title: 'Массаж', description: 'По предварительной записи' },
      { icon: Star, title: 'Ароматерапия', description: 'Натуральные масла' },
    ],
    pricing: [
      { name: '1 час', price: '500₽', features: ['Сауна или хаммам', 'Душевые', 'Зона отдыха', 'Полотенца'] },
      { name: '2 часа', price: '900₽', features: ['Сауна + хаммам', 'Душевые', 'Зона отдыха', 'Полотенца', 'Чай'] },
      { name: 'Абонемент 10 посещений', price: '4000₽', features: ['1 час за посещение', 'Скидка 20%', 'Приоритетная запись', '3 месяца'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '14:00 - 23:00' },
      { day: 'Суббота - Воскресенье', time: '10:00 - 23:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-68',
      email: 'spa@library2026.ru',
    },
  },
  'gym': {
    id: 'gym',
    icon: Dumbbell,
    title: 'Спортзал',
    subtitle: 'Фитнес и здоровье',
    description: 'Полностью оборудованный тренажёрный зал с современным оборудованием и профессиональными тренерами.',
    fullDescription: 'Наш тренажёрный зал оснащён оборудованием ведущих мировых производителей. Просторная кардио-зона с беговыми дорожками, эллипсами и велотренажёрами. Силовая зона с полным набором тренажёров для всех групп мышц и свободными весами.\n\nОтдельная студия для групповых занятий йогой, пилатесом и функциональным тренингом. Опытные персональные тренеры помогут составить индивидуальную программу тренировок и достичь ваших целей. Комфортные раздевалки с душевыми и сейфами.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    images: [
      'https://images.unsplash.com/photo-1771586791190-97ed536c54af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBlcXVpcG1lbnQlMjBmaXRuZXNzfGVufDF8fHx8MTc3NTEwNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761971975651-4fdd4abc200f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwd29ya291dCUyMHNwYWNlfGVufDF8fHx8MTc3NTEwNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3NTEwNjgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: Dumbbell, title: 'Кардио-зона', description: 'Беговые дорожки, эллипсы, велотренажёры' },
      { icon: Dumbbell, title: 'Силовые тренажёры', description: 'Полный набор оборудования' },
      { icon: Users, title: 'Зона для йоги', description: 'Групповые занятия' },
      { icon: Star, title: 'Персональные тренировки', description: 'Индивидуальные программы' },
      { icon: Check, title: 'Раздевалки с душем', description: 'Современные удобства' },
      { icon: Clock, title: 'Гибкий график', description: 'С раннего утра до позднего вечера' },
    ],
    pricing: [
      { name: '1 месяц', price: '1000₽', features: ['Безлимитное посещение', 'Раздевалки и душ', 'Групповые занятия', 'Пробное занятие с тренером'] },
      { name: '3 месяца', price: '2700₽', features: ['Скидка 10%', 'Все преимущества', 'Заморозка до 7 дней', 'Бесплатный фитнес-тест'] },
      { name: 'Персональная тренировка', price: '1500₽', features: ['1 занятие с тренером', 'Индивидуальная программа', 'Контроль техники', '60 минут'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '07:00 - 23:00' },
      { day: 'Суббота - Воскресенье', time: '09:00 - 22:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-69',
      email: 'gym@library2026.ru',
    },
  },
  'coworking': {
    id: 'coworking',
    icon: Wifi,
    title: 'Коворкинг',
    subtitle: 'Пространство для работы',
    description: 'Современное коворкинг-пространство для продуктивной работы и сотрудничества с единомышленниками.',
    fullDescription: 'Наш коворкинг — это не просто рабочее пространство, а настоящее сообщество единомышленников. Ergonomичные рабочие места с регулируемыми столами и креслами, розетками и USB-портами. Интернет со скоростью 1 Гбит/с обеспечит комфортную работу с любыми задачами.\n\nПереговорные комнаты для встреч и презентаций, оборудованные проекторами и досками. Тихие зоны для концентрированной работы и зоны для неформального общения. Бесплатный кофе, чай и вода. Принтер, сканер и другая офисная техника. Регулярные нетворкинг-мероприятия и профессиональные воркшопы.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    images: [
      'https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzUxMDY4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwcm9vbSUyMGNvbmZlcmVuY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc1MTA2ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1741466071728-cc5691bfb535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2slMjBzZXR1cHxlbnwxfHx8fDE3NzUwNjM0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    features: [
      { icon: Wifi, title: 'Скоростной интернет 1 Гбит/с', description: 'Стабильное соединение' },
      { icon: Users, title: 'Рабочие места', description: 'Ergonomичная мебель' },
      { icon: MapPin, title: 'Переговорные комнаты', description: 'С оборудованием' },
      { icon: Check, title: 'Принтер и сканер', description: 'Бесплатное использование' },
      { icon: Clock, title: 'Кофе и чай', description: 'Бесплатные напитки' },
      { icon: Star, title: 'Нетворкинг', description: 'Регулярные мероприятия' },
    ],
    pricing: [
      { name: '1 час', price: '200₽', features: ['Рабочее место', 'Wi-Fi', 'Кофе/чай', 'Офисная техника'] },
      { name: '1 день', price: '800₽', features: ['Весь день', 'Все преимущества', 'Переговорная 1 час', 'Шкафчик'] },
      { name: 'Месячный абонемент', price: '5000₽', features: ['Безлимитный доступ', 'Фиксированное место', 'Переговорная 10 часов', 'Приоритетная поддержка'] },
    ],
    schedule: [
      { day: 'Понедельник - Пятница', time: '08:00 - 22:00' },
      { day: 'Суббота - Воскресенье', time: '10:00 - 20:00' },
    ],
    contacts: {
      phone: '+7 (495) 123-45-70',
      email: 'coworking@library2026.ru',
    },
  },
  'cafe': {
    id: 'cafe',
    icon: Coffee,
    title: 'Кафе',
    subtitle: 'Кофе и десерты',
    description: 'Наше уютное кафе предлагает широкий выбор свежесваренного кофе, чая, десертов и закусок.',
    fullDescription: 'Наше кафе — это идеальное место для отдыха, встреч с друзьями или работы в уютной атмосфере. Мы предлагаем широкий ассортимент свежесваренного кофе от лучших обжарщиков, а также большой выбор чая, свежей выпечки, десертов и лёгких закусок. В нашем меню есть веганские и безглютеновые опции.\n\nСветлый и просторный интерьер, удобная мебель и быстрый Wi-Fi создают все условия для комфортного времяпрепровождения. В тёплое время года открыта летняя терраса.',
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-50',
    images: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNjc0MDA1MDIyfDA&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1559925393-9be58cc5a28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZlZSUyMHNob3AlMjBpbnRlcmlvcnxlbnwxfHx8fDE2NzQwMDQ0ODE&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNjQ3ODk2MjM3&ixlib=rb-1.2.1&q=80&w=1080',
    ],
    features: [
        { icon: Coffee, title: 'Специализированный кофе', description: 'От лучших обжарщиков' },
        { icon: Star, title: 'Свежая выпечка', description: 'Десерты и закуски' },
        { icon: Check, title: 'Сезонное меню', description: 'Новые блюда каждый сезон' },
        { icon: Users, title: 'Веганские опции', description: 'Для всех наших гостей' },
        { icon: Wifi, title: 'Бесплатный Wi-Fi', description: 'Высокоскоростной интернет' },
        { icon: MapPin, title: 'Летняя терраса', description: 'В тёплое время года' },
    ],
    pricing: [
        { name: 'Кофе и десерт', price: 'от 350₽', features: ['Любой кофе', 'Десерт на выбор', 'Скидка 15%'] },
        { name: 'Бизнес-ланч', price: '500₽', features: ['Суп + салат + напиток', 'Действует по будням', 'С 12:00 до 16:00'] },
        { name: 'Аренда для мероприятия', price: 'от 3000₽/час', features: ['Всё кафе в вашем распоряжении', 'Помощь в организации', 'Специальное меню'] },
    ],
    schedule: [
        { day: 'Понедельник - Воскресенье', time: '09:00 - 22:00' },
    ],
    contacts: {
        phone: '+7 (495) 123-45-71',
        email: 'cafe@library2026.ru',
    },
  },
  'kids-zone': {
    id: 'kids-zone',
    icon: Gamepad2,
    title: 'Детская комната',
    subtitle: 'Игры и развитие',
    description: 'Оставьте ваших детей в нашей игровой комнате под присмотром опытных аниматоров.',
    fullDescription: 'Наша детская комната — это безопасное и увлекательное пространство, где дети могут играть, учиться и общаться под присмотром опытных аниматоров. Мы создали несколько зон для детей разного возраста: от уголка для самых маленьких с развивающими игрушками до зоны с игровыми приставками для детей постарше.\n\nКаждые выходные мы проводим творческие мастер-классы, научные шоу и интерактивные игры. Вы можете спокойно оставить у нас ребёнка на несколько часов и быть уверены в его безопасности и хорошем настроении.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    images: [
        'https://images.unsplash.com/photo-1556388250-b4c74c57376c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2x1YnxlbnwxfHx8fDE2NzQwMDUyOTV8MA&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1636531182993-4e3d6e537a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwcGxheXJvb218ZW58MXx8fHwxNjc0MDQ1NTE&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1576673424163-0026a2a06e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwY2xhc3MlMjBmb3IlMjBraWRzfGVufDF8fHx8MTY3NDAwNTQzMw&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1578884213529-7a54399b0542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBpbGF0ZXMlMjBwbGF5fGVufDF8fHx8MTY3NDAwNTU5OXww&ixlib=rb-1.2.1&q=80&w=1080'
    ],
    features: [
        { icon: Gamepad2, title: 'Зона для самых маленьких', description: 'Безопасные и развивающие игрушки' },
        { icon: Star, title: 'Развивающие игры', description: 'Настольные игры и головоломки' },
        { icon: Gamepad2, title: 'Игровые приставки', description: 'Популярные игры для всех возрастов' },
        { icon: Check, title: 'Мастер-классы', description: 'Творческие и научные занятия' },
        { icon: Users, title: 'Аниматоры и присмотр', description: 'Профессиональная команда' },
        { icon: Clock, title: 'Гибкое время', description: 'От 1 часа до целого дня' },
    ],
    pricing: [
        { name: '1 час', price: '250₽', features: ['Пребывание в игровой', 'Все игровые зоны', 'Присмотр аниматора'] },
        { name: '3 часа', price: '600₽', features: ['Скидка 20%', 'Все преимущества', 'Сок и печенье'] },
        { name: 'День рождения', price: 'от 10000₽', features: ['Аренда всей комнаты', 'Анимационная программа', 'Праздничный стол'] },
    ],
    schedule: [
        { day: 'Понедельник - Воскресенье', time: '10:00 - 21:00' },
    ],
    contacts: {
        phone: '+7 (495) 123-45-72',
        email: 'kids@library2026.ru',
    },
  },
  'lecture-hall': {
    id: 'lecture-hall',
    icon: Presentation,
    title: 'Лекторий',
    subtitle: 'Знания и дискуссии',
    description: 'Пространство для проведения лекций, мастер-классов и презентаций на 500 мест.',
    fullDescription: 'Наш лекторий — это современное и многофункциональное пространство, идеально подходящее для проведения крупных мероприятий: от лекций и конференций до презентаций и кинопоказов. Зал рассчитан на 500 посадочных мест и оснащён всем необходимым для качественного проведения событий.\n\nБольшой экран, профессиональный проектор, мощная звуковая система и возможность организации онлайн-трансляций делают наш лекторий одной из лучших площадок в городе. Удобные кресла, хорошая вентиляция и продуманное освещение обеспечат комфорт для всех участников.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWN0dXJlJTIwaGFsbHxlbnwxfHx8fDE2NzQwMDUxNTE&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwaGFsbHxlbnwxfHx8fDE2NzQwMDU1MzE&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpZW5jZSUyMGxpc3RlbmluZ3xlbnwxfHx8fDE2NzQwMDU1NTk&ixlib=rb-1.2.1&q=80&w=1080',
    ],
    features: [
        { icon: Users, title: 'Вместимость до 500 человек', description: 'Комфортные кресла' },
        { icon: Presentation, title: 'Проектор и большой экран', description: 'Высокое разрешение' },
        { icon: Mic, title: 'Профессиональный звук', description: 'Микрофоны и акустика' },
        { icon: Wifi, title: 'Онлайн-трансляции', description: 'Высокоскоростной интернет' },
        { icon: Clock, title: 'Кейтеринг', description: 'Организация кофе-брейков' },
        { icon: Check, title: 'Техническая поддержка', description: 'Наши специалисты помогут' },
    ],
    pricing: [
        { name: '1 час', price: '5000₽', features: ['Аренда зала', 'Базовое оборудование', 'Техническая поддержка'] },
        { name: '4 часа (полдня)', price: '18000₽', features: ['Скидка 10%', 'Всё оборудование', 'Помощь в организации'] },
        { name: '8 часов (целый день)', price: '32000₽', features: ['Скидка 20%', 'Всё оборудование', 'Персональный менеджер'] },
    ],
    schedule: [
        { day: 'Понедельник - Воскресенье', time: '09:00 - 23:00 (по брони)' },
    ],
    contacts: {
        phone: '+7 (495) 123-45-73',
        email: 'events@library2026.ru',
    },
  },
  'concert-hall': {
    id: 'concert-hall',
    icon: Mic,
    title: 'Концертный зал',
    subtitle: 'Музыка и представления',
    description: 'Многофункциональный зал на 500 мест для проведения концертов и театральных постановок.',
    fullDescription: 'Наш концертный зал — это профессиональная площадка, созданная для проведения самых разных мероприятий: от акустических концертов и театральных постановок до масштабных шоу и презентаций. Зал на 500 мест обладает великолепной акустикой, продуманной геометрией и современным техническим оснащением.\n\nПрофессиональная сцена, световое и звуковое оборудование от ведущих мировых производителей, гримёрные комнаты и удобный зрительный зал — у нас есть всё, чтобы ваше мероприятие прошло на высшем уровне.',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    images: [
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbHxlbnwxfHx8fDE2NzQwMDUyMjk&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1543699565-003b8adda514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNjc0MDA1NjY5&ixlib=rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1596229377593-018671de38ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGF1ZGl0b3JpdW0lMjBzZWF0c3xlbnwxfHx8fDE2NzQwMDU2OTg&ixlib=rb-1.2.1&q=80&w=1080',
    ],
    features: [
        { icon: Users, title: 'Вместимость 500 мест', description: 'Удобные зрительские кресла' },
        { icon: Mic, title: 'Профессиональная сцена', description: 'С возможностью трансформации' },
        { icon: Star, title: 'Световое и звуковое оборудование', description: 'От ведущих брендов' },
        { icon: Check, title: 'Гримёрные комнаты', description: 'Комфортные и оборудованные' },
        { icon: Wifi, title: 'Отличная акустика', description: 'Проектировалась специалистами' },
        { icon: MapPin, title: 'Билетная система', description: 'Интеграция с сервисами продаж' },
    ],
    pricing: [
        { name: 'Базовая аренда', price: 'от 10000₽/час', features: ['Аренда зала и сцены', 'Базовый свет и звук', 'Гримёрные'] },
        { name: 'Полный пакет', price: 'от 70000₽/день', features: ['Весь день', 'Полный комплект оборудования', 'Технический персонал'] },
        { name: 'Индивидуальные условия', price: 'По запросу', features: ['Гибкие условия', 'Дополнительные услуги', 'Долгосрочное партнёрство'] },
    ],
    schedule: [
        { day: 'Понедельник - Воскресенье', time: '10:00 - 23:00 (по брони)' },
    ],
    contacts: {
        phone: '+7 (495) 123-45-74',
        email: 'concerthall@library2026.ru',
    },
  },

};

export default function ServiceDetailPage({ id: propId }: { id?: string }) {
  const { id: paramId } = useParams();
  const navigate = useNavigate();

  const id = propId || paramId;

  const [currentService, setCurrentService] = useState(id ? servicesData[id] : null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [isAddPhotoOpen, setAddPhotoOpen] = useState(false);

  const service = currentService;

  const popularServices = [
    servicesData['observation-deck'],
    servicesData['coworking'],
    servicesData['gym'],
  ].filter(Boolean);

  const handleAddPhoto = () => {
    setAddPhotoOpen(true);
  };

  const handleConfirmAddPhoto = () => {
    if (!service) return;
    const newImage = `https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
    const updatedService = {
        ...service,
        images: [...service.images, newImage]
    };
    setCurrentService(updatedService);
    toast.success('Фотография успешно добавлена!');
    setAddPhotoOpen(false);
  };

  if (!service) {
    return (
        <div className="min-h-screen bg-white">
        <Header />
        <main className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
            >
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mb-6">
                <SearchX className="w-12 h-12 text-red-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Услуга не найдена</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                К сожалению, мы не смогли найти страницу, которую вы ищете. Возможно, она была перемещена, удалена или вы просто ошиблись в адресе.
              </p>
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all font-semibold text-lg"
              >
                Вернуться ко всем услугам
              </button>
            </motion.div>

            {popularServices.length > 0 && (
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Возможно, вас заинтересует</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularServices.map((popularService, index) => {
                            const Icon = popularService.icon;
                            return (
                                <motion.a
                                    key={popularService.id}
                                    href={`/services/${popularService.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 text-left block cursor-pointer"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${popularService.color} rounded-lg flex items-center justify-center mb-4`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{popularService.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{popularService.description}</p>
                                    <div className="flex items-center text-blue-600 font-medium">
                                        <span>Узнать больше</span>
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
        toast.error('Пожалуйста, заполните все обязательные поля.');
        return;
    }
    if (!service) return;

    const storedServices = localStorage.getItem('bookedServices');
    const bookedServices = storedServices ? JSON.parse(storedServices) : [];

    const newBooking = {
        id: `${service.id}-${formData.date}-${formData.time}`,
        serviceId: service.id,
        title: service.title,
        image: service.images[0],
        color: service.color,
        date: formData.date,
        time: formData.time,
    };

    if (bookedServices.find((b: any) => b.id === newBooking.id)) {
        toast.info('Эта услуга на это время уже забронирована.');
        return;
    }

    bookedServices.push(newBooking);
    localStorage.setItem('bookedServices', JSON.stringify(bookedServices));

    toast.success('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/services')}
            className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Назад к услугам</span>
          </motion.button>

          <div className="grid gap-12 items-start">
            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Режим работы</h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    {service.schedule.map((item: any, index: number) => (
                      <div key={index}>
                        <span className="font-medium">{item.day}:</span> {item.time}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Контакты</h4>
                  </div>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>{service.contacts.phone}</div>
                    <div>{service.contacts.email}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
                >
                    Галерея
                </motion.h2>
                <motion.button
                    onClick={handleAddPhoto}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                    <Plus className="w-5 h-5" />
                    <span>Добавить фото</span>
                </motion.button>
            </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {service.images.map((image: string, index: number) => (
                <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow-lg group"
                >
                    <ImageWithFallback
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Что входит в услугу
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: any, index: number) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <FeatureIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Цены и тарифы
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                  index === 1 ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full mb-4">
                    Популярный
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-lg transition-all font-medium`}>
                  Выбрать тариф
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
          >
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Забронировать
              </h2>
              <p className="text-lg text-gray-600">
                Заполните форму, и мы свяжемся с вами для подтверждения брони
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Дата *
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Время *
                  </label>
                  <input
                    type="time"
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Дополнительная информация или пожелания..."
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-2xl transition-all text-lg font-semibold flex items-center justify-center gap-2`}
              >
                Отправить заявку
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Обязательные поля. Мы свяжемся с вами в течение 1 часа для подтверждения брони.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />

      <Dialog open={isAddPhotoOpen} onOpenChange={setAddPhotoOpen}>
        <DialogContent className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Добавить новую фотографию</h3>
            <div className="flex flex-col items-center justify-center w-full h-48 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl mb-6">
                <p className="text-gray-500">Перетащите фото сюда или нажмите для выбора</p>
            </div>
            <div className="flex justify-end gap-4">
                <button
                    onClick={() => setAddPhotoOpen(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                    Отмена
                </button>
                <button
                    onClick={handleConfirmAddPhoto}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Добавить
                </button>
            </div>
        </DialogContent>
    </Dialog>

    </div>
  );
}
