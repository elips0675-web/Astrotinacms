import { Eye, Droplet, Dumbbell, Wifi, Clock, Users, ArrowRight, Check, Calendar, MapPin, Phone, Mail, Star, Plus, Coffee, Gamepad2, Mic, Presentation, Printer, FileText, CreditCard, BookOpen, Package, CupSoda, Shirt, GalleryHorizontal } from 'lucide-react';

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
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNjQ3ODk2MjM3&ixlib-rb-1.2.1&q=80&w=1080',
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
        'https://images.unsplash.com/photo-1578884213529-7a54399b0542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpbGRyZW4lMjBwbGF5fGVufDF8fHx8MTY3NDAwNTU5OXww&ixlib=rb-1.2.1&q=80&w=1080'
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
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwaGFsbHxlbnwxfHx8fDE2NzQwMDU1MzE&ixlib-rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpZW5jZSUyMGxpc3RlbmluZ3xlbnwxfHx8fDE2NzQwMDU1NTk&ixlib-rb-1.2.1&q=80&w=1080',
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
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwaGFsbHxlbnwxfHx8fDE2NzQwMDUyMjk&ixlib-rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1543699565-003b8adda514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2V8ZW58MXx8fHwxNjc0MDA1NjY5&ixlib-rb-1.2.1&q=80&w=1080',
        'https://images.unsplash.com/photo-1596229377593-018671de38ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMGF1ZGl0b3JpdW0lMjBzZWF0c3xlbnwxfHx8fDE2NzQwMDU2OTg&ixlib-rb-1.2.1&q=80&w=1080',
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
  'paper-printing': {
    id: 'paper-printing',
    icon: Printer,
    title: 'Печать документов',
    subtitle: 'Чёрно-белая и цветная печать любых форматов',
    description: 'Качественная и быстрая печать документов, рефератов, курсовых и дипломных работ на современном оборудовании.',
    fullDescription: 'Мы предлагаем услуги черно-белой и цветной печати на бумаге различной плотности. Идеально подходит для студентов, офисных работников и всех, кому нужна качественная печатная продукция в короткие сроки. Поддерживаемые форматы: А3, А4, А5.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    images: [
      'https://images.unsplash.com/photo-1588868562479-ecf936d4a5c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGRvY3VtZW50cyUyMHByaW50aW5nfGVufDF8fHx8MTc3NTMwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1517436034038-e694b8304595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHByaW50ZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzc1MzAxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1604363239242-491b4299d0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcGFwZXJzJTIwcHJpbnRlZHxlbnwxfHx8fDE3NzUzMDEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    calculator: {
      options: [
        { id: 'format', name: 'Формат', type: 'radio', values: ['А4', 'А3'], default: 'А4' },
        { id: 'color', name: 'Цветность', type: 'radio', values: ['Ч/Б', 'Цветная'], default: 'Ч/Б' },
        { id: 'paper', name: 'Бумага', type: 'select', values: ['80 г/м²', '120 г/м²', '160 г/м² (глянец)'], default: '80 г/м²' },
      ],
      pricing: {
        base: 5,
        format: { 'А3': 2 },
        color: { 'Цветная': 3 },
        paper: { '120 г/м²': 1.5, '160 г/м² (глянец)': 2.5 },
      },
    }
  },
  'business-cards': {
    id: 'business-cards',
    icon: CreditCard,
    title: 'Визитки',
    subtitle: 'Профессиональная печать визитных карточек',
    description: 'Создайте первое впечатление с нашими качественными визитками. Различные материалы и виды отделки.',
    fullDescription: 'Мы предлагаем печать визиток на мелованной бумаге, дизайнерском картоне и пластике. Возможна ламинация, скругление углов и тиснение фольгой. Поможем с разработкой макета.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    images: [
        'https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYnVzaW5lc3MlMjBjYXJkc3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1550931932-52e5a4a58b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwbW9ja3VwfGVufDF8fHx8MTc3NTMwMTQyNnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1619921472535-951e06b3f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBkZXNpZ258ZW58MXx8fHwxNzc1MzAxNDI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    calculator: {
        options: [
            { id: 'paper', name: 'Бумага', type: 'radio', values: ['Мелованная 300г', 'Дизайнерская'], default: 'Мелованная 300г' },
            { id: 'sides', name: 'Стороны', type: 'radio', values: ['Односторонние', 'Двусторонние'], default: 'Односторонние' },
            { id: 'lamination', name: 'Ламинация', type: 'select', values: ['Нет', 'Матовая', 'Глянцевая'], default: 'Нет' },
        ],
        pricing: {
            base: 5, 
            paper: { 'Дизайнерская': 2 },
            sides: { 'Двусторонние': 1.5 },
            lamination: { 'Матовая': 1.3, 'Глянцевая': 1.2 },
        },
    }
},
'brochures': {
    id: 'brochures',
    icon: FileText,
    title: 'Брошюры и буклеты',
    subtitle: 'Печать рекламных материалов и каталогов',
    description: 'Яркие и информативные брошюры для вашего бизнеса. Любые тиражи и способы скрепления.',
    fullDescription: 'Изготавливаем рекламные брошюры, каталоги продукции, меню для ресторанов. Возможна сшивка на скобу, пружину или термоклей. Разработка дизайна и верстка.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    images: [
        'https://images.unsplash.com/photo-1612351217829-9e467539406f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZXMlMjBmbHllcnMlMjBjYXRhbG9nfGVufDF8fHx8MTc3NTA1NzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1508704253597-d8975a6c6270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwY2F0YWxvZyUyMG1hZ2F6aW5lfGVufDF8fHx8MTc3NTMwMTQ3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1582298622956-1a7428f28829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwbWVudSUyMGRlc2lnbnxlbnwxfHx8fDE3NzUzMDE0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    calculator: {
        options: [
            { id: 'format', name: 'Формат', type: 'radio', values: ['А5', 'А4', 'Евробуклет'], default: 'А4' },
            { id: 'pages', name: 'Кол-во страниц', type: 'select', values: ['8', '12', '16', '24'], default: '8' },
            { id: 'binding', name: 'Скрепление', type: 'radio', values: ['Скоба', 'Пружина'], default: 'Скоба' },
        ],
        pricing: {
            base: 20, 
            format: { 'А5': 0.7, 'Евробуклет': 1.2 },
            pages: { '12': 1.4, '16': 1.8, '24': 2.5 },
            binding: { 'Пружина': 1.5 },
        },
    }
},
'large-format': {
    id: 'large-format',
    icon: Package,
    title: 'Широкоформатная печать',
    subtitle: 'Баннеры, плакаты и постеры большого размера',
    description: 'Печать на баннерной ткани, самоклеящейся пленке, фотобумаге. Для наружной и интерьерной рекламы.',
    fullDescription: 'Осуществляем широкоформатную печать для рекламных щитов, вывесок, оформления витрин и интерьеров. Используем только качественные, стойкие к выцветанию чернила. Максимальная ширина печати - 3.2 метра.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    images: [
        'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBwb3N0ZXIlMjBwcmludGluZ3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1531299974639-c56c2c908585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wJTIwd2luZG93JTIwZGVjYWx8ZW58MXx8fHwxNzc1MzAxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1622737133809-d9b0a79366e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHByaW50JTIwcG9zdGVyfGVufDF8fHx8MTc3NTMwMTUzMnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    calculator: {
        options: [
            { id: 'material', name: 'Материал', type: 'radio', values: ['Баннер', 'Пленка'], default: 'Баннер' },
            { id: 'quality', name: 'Качество', type: 'select', values: ['720dpi', '1440dpi (интерьерное)'], default: '720dpi' },
        ],
        pricing: {
            base: 500, 
            material: { 'Пленка': 1.2 },
            quality: { '1440dpi (интерьерное)': 1.4 },
        },
    }
},
'bookbinding': {
    id: 'bookbinding',
    icon: BookOpen,
    title: 'Переплёт и брошюровка',
    subtitle: 'Твёрдый и мягкий переплёт документов',
    description: 'Аккуратный переплет для ваших дипломов, отчетов и других важных документов.',
    fullDescription: 'Мы предлагаем несколько видов переплета: на пластиковую или металлическую пружину, термоклеевой (мягкий) и твердый книжный переплет. Отлично подходит для дипломных работ, диссертаций, отчетов и презентаций.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    images: [
        'https://images.unsplash.com/photo-1762113246719-1a6adc837209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rYmluZGluZyUyMGhhcmRjb3ZlciUyMGJvb2tzfGVufDF8fHx8MTc3NTA1NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHNwaW5lfGVufDF8fHx8MTc3NTMwMTU4Mnww&ixlib-rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1593340555982-32a8a183ab3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXBsb21hJTIwcHJvamVjdCUyMGJpbmRpbmd8ZW58MXx8fHwxNzc1MzAxNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    calculator: {
        options: [
            { id: 'type', name: 'Тип переплёта', type: 'radio', values: ['Пружина', 'Термоклей', 'Твердый'], default: 'Пружина' },
            { id: 'cover', name: 'Обложка', type: 'select', values: ['Прозрачная+картон', 'Картон+картон'], default: 'Прозрачная+картон' },
        ],
        pricing: {
            base: 150, 
            type: { 'Термоклей': 1.8, 'Твердый': 4 },
            cover: { 'Картон+картон': 1.2 },
        },
    }
},
'mugs': {
    id: 'mugs',
    icon: CupSoda,
    title: 'Печать на кружках',
    subtitle: 'Кружки с вашим фото, лого или надписью',
    description: 'Создайте уникальный подарок или корпоративный сувенир с помощью печати на кружках.',
    fullDescription: 'Мы печатаем на качественных керамических кружках методом сублимации. Это обеспечивает яркие, стойкие цвета, которые не боятся мытья в посудомоечной машине. Отличный выбор для подарка близким или брендирования для вашей компании.',
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-red-50',
    images: [
        'https://images.unsplash.com/photo-1516788419857-a41a4c921102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtdWclMjBwcmludGluZ3xlbnwxfHx8fDE3NzUzMDMwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1622039603958-3f8287734947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJsaW1hdGlvbiUyMG11Z3xlbnwxfHx8fDE3NzUzMDMwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    allowImageUpload: true,
    calculator: {
        options: [
            { id: 'type', name: 'Тип кружки', type: 'radio', values: ['Белая', 'Хамелеон'], default: 'Белая' },
            { id: 'volume', name: 'Объем', type: 'select', values: ['330 мл', '420 мл'], default: '330 мл' },
        ],
        pricing: {
            base: 350, 
            type: { 'Хамелеон': 1.8 },
            volume: { '420 мл': 1.2 },
        },
    }
},
't-shirts': {
    id: 't-shirts',
    icon: Shirt,
    title: 'Печать на футболках',
    subtitle: 'Футболки и свитшоты с вашим дизайном',
    description: 'Напечатаем любой принт, логотип или фото на качественной одежде из 100% хлопка.',
    fullDescription: 'Предлагаем прямую цифровую печать (DTG) на футболках, свитшотах и худи. Этот метод позволяет печатать полноцветные изображения высокого качества прямо на ткани. Мы используем футболки из 100% хлопка, доступные в различных цветах и размерах.',
    color: 'from-sky-500 to-fuchsia-500',
    bgColor: 'bg-sky-50',
    images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0JTIwcHJpbnRpbmdfZW58MXx8fHwxNzc1MzAzMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1593414920033-9a3d1d1b3f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB0LXNoaXJ0JTIwZGVzaWdufGVufDF8fHx8MTc3NTMwMzA2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    allowImageUpload: true,
    calculator: {
        options: [
            { id: 'color', name: 'Цвет футболки', type: 'radio', values: ['Белая', 'Черная', 'Цветная'], default: 'Белая' },
            { id: 'print_area', name: 'Область печати', type: 'select', values: ['Грудь (A4)', 'Спина (A4)', 'Грудь+Спина'], default: 'Грудь (A4)' },
        ],
        pricing: {
            base: 800, 
            color: { 'Черная': 1.2, 'Цветная': 1.3 },
            print_area: { 'Спина (A4)': 1.4, 'Грудь+Спина': 1.8 },
        },
    }
},
'posters': {
    id: 'posters',
    icon: GalleryHorizontal,
    title: 'Печать постеров',
    subtitle: 'Интерьерная печать высокого разрешения',
    description: 'Яркие постеры и плакаты для декора стен, выставок или мероприятий. Фотокачество.',
    fullDescription: 'Мы печатаем постеры на профессиональной фотобумаге с использованием пигментных чернил. Это гарантирует фотореалистичное качество, яркие цвета и долговечность. Идеально для фотографий, репродукций картин и дизайнерских плакатов.',
    color: 'from-lime-500 to-teal-500',
    bgColor: 'bg-lime-50',
    images: [
        'https://images.unsplash.com/photo-154184859-5989b3889895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBwcmludGluZyUyMHdhbGx8ZW58MXx8fHwxNzc1MzAzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1506152839139-5135a5a35041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBwb3N0ZXIlMjBtb2NrdXB8ZW58MXx8fHwxNzc1MzAzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    allowImageUpload: true,
    calculator: {
        options: [
            { id: 'size', name: 'Размер', type: 'radio', values: ['A3', 'A2', 'A1'], default: 'A2' },
            { id: 'paper', name: 'Бумага', type: 'select', values: ['Матовая (180г)', 'Глянцевая (200г)'], default: 'Матовая (180г)' },
        ],
        pricing: {
            base: 400, 
            size: { 'A3': 0.6, 'A1': 1.8 },
            paper: { 'Глянцевая (200г)': 1.2 },
        },
    }
}
};