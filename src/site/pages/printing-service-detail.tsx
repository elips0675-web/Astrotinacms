import React, { useState, useMemo, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Slider from '../lib/slider';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Printer, FileText, CreditCard, BookOpen, Package, ArrowRight, Check, Plus, Minus, CupSoda, Shirt, GalleryHorizontal, ChevronLeft, ChevronRight, Upload } from 'lucide-react';

export const printingServiceDetails = {
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
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMHNwaW5lfGVufDF8fHx8MTc3NTMwMTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
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

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-full p-2 z-10"
        onClick={onClick}>
          <ChevronRight className="w-6 h-6 text-white" />
      </button>
    );
  }
  
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-800/50 hover:bg-gray-800/80 transition-colors rounded-full p-2 z-10"
        onClick={onClick}>
          <ChevronLeft className="w-6 h-6 text-white" />
      </button>
    );
  }

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
};

export default function PrintingServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = printingServiceDetails[id];
  const fileInputRef = useRef(null);

  const [quantity, setQuantity] = useState(10);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [options, setOptions] = useState(() => {
    const defaultOptions = {};
    if (service && service.calculator) {
      service.calculator.options.forEach(opt => {
        defaultOptions[opt.id] = opt.default;
      });
    }
    return defaultOptions;
  });

  const totalPrice = useMemo(() => {
    if (!service || !service.calculator) return '0.00';

    let basePrice = service.calculator.pricing.base;
    let multiplier = 1;

    for (const [key, value] of Object.entries(options)) {
      const pricingConfig = service.calculator.pricing[key];
      if (pricingConfig && pricingConfig[value]) {
        multiplier *= pricingConfig[value];
      }
    }
    
    const finalPrice = basePrice * multiplier * quantity;
    return finalPrice.toFixed(2);
  }, [quantity, options, service]);
  
  const handleOrder = () => {
    const queryParams = new URLSearchParams({
      serviceTitle: service.title,
      quantity: quantity.toString(),
      totalPrice: totalPrice,
      options: JSON.stringify(options),
    }).toString();

    navigate(`/printing-services/order-confirmation?${queryParams}`);
  };

  if (!service) {
    return <div className="flex items-center justify-center h-screen">Услуга не найдена</div>;
  }

  const handleOptionChange = (optionId, value) => {
    setOptions(prev => ({ ...prev, [optionId]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="pt-40 pb-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Printer className="w-16 h-16 mx-auto mb-6 text-gray-300" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Услуга не найдена</h1>
            <p className="text-lg text-gray-600 mb-10">
              Услуги с идентификатором «{id}» пока нет. Посмотрите весь каталог полиграфии.
            </p>
            <Link
              to="/printing-services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-xl transition-shadow font-semibold"
            >
              Вернуться в каталог
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className={`pt-32 pb-16 relative overflow-hidden bg-gradient-to-br ${service.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-12 h-12"/>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl sm:text-2xl opacity-90">{service.subtitle}</p>
            </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Подробное описание</h2>
            <div className="prose prose-lg text-gray-600 max-w-none mb-12">
              {service.fullDescription.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
             <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative shadow-2xl rounded-2xl">
                <Slider {...sliderSettings}>
                    {service.images.map((img, i) => (
                        <div key={i}>
                            <ImageWithFallback src={img} alt={`${service.title} image ${i+1}`} className="w-full h-80 object-cover rounded-2xl" />
                        </div>
                    ))}
                </Slider>
            </motion.div>
          </div>
          {service.calculator && (
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-28 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Калькулятор стоимости</h3>
                
                {/* Options */}
                <div className="space-y-4 mb-6">
                  {service.calculator.options.map(opt => (
                    <div key={opt.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{opt.name}</label>
                      {opt.type === 'radio' && (
                        <div className="flex flex-wrap gap-2">
                          {opt.values.map(val => (
                            <button key={val} onClick={() => handleOptionChange(opt.id, val)} className={`px-4 py-2 rounded-lg text-sm transition ${options[opt.id] === val ? `bg-gradient-to-r ${service.color} text-white shadow` : 'bg-white border border-gray-300 hover:bg-gray-100'}`}>
                              {val}
                            </button>
                          ))}
                        </div>
                      )}
                      {opt.type === 'select' && (
                        <select onChange={(e) => handleOptionChange(opt.id, e.target.value)} value={options[opt.id]} className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                          {opt.values.map(val => <option key={val}>{val}</option>)}
                        </select>
                      )}
                    </div>
                  ))}
                </div>

                {/* Image Upload */}
                {service.allowImageUpload && (
                  <div className="mb-6">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Ваш дизайн</label>
                     <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
                     <button 
                        onClick={() => fileInputRef.current.click()}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
                         <Upload className="w-5 h-5"/>
                         <span>{uploadedImage ? "Изменить фото" : "Загрузить фото"}</span>
                     </button>
                     {uploadedImage && <img src={uploadedImage} alt="Uploaded design" className="mt-4 rounded-lg shadow-md"/>}
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{service.id === 'large-format' ? 'Площадь (м²)': 'Количество'}</label>
                  <div className="flex items-center">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"><Minus className="w-4 h-4"/></button>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} className="w-20 text-center border-0 bg-transparent text-lg font-semibold focus:ring-0"/>
                    <button onClick={() => setQuantity(q => q + 1)} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"><Plus className="w-4 h-4"/></button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500">Примерная стоимость</p>
                  <p className="text-4xl font-bold text-gray-900">
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{totalPrice}₽</span>
                  </p>
                </div>

                <button onClick={handleOrder} className={`w-full py-3 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2 group`}>
                  Заказать
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
