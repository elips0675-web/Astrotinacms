import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PushNotificationBanner } from '../components/PushNotificationBanner';
import { Printer, FileText, CreditCard, BookOpen, Package, ArrowRight, CupSoda, Shirt, GalleryHorizontal } from 'lucide-react';

const catalogServices = [
  {
    id: 'paper-printing',
    icon: Printer,
    title: 'Печать документов',
    description: 'Чёрно-белая и цветная печать любых форматов. Идеально для рефератов, отчетов и курсовых.',
    image: 'https://images.unsplash.com/photo-1588868562479-ecf936d4a5c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMGRvY3VtZW50cyUyMHByaW50aW5nfGVufDF8fHx8MTc3NTMwMTI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'business-cards',
    icon: CreditCard,
    title: 'Визитки',
    description: 'Профессиональная печать визиток на различных материалах. Создайте первое впечатление.',
    image: 'https://images.unsplash.com/photo-1718670013921-2f144aba173a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwYnVzaW5lc3MlMjBjYXJkc3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'brochures',
    icon: FileText,
    title: 'Брошюры и буклеты',
    description: 'Рекламные материалы, каталоги и меню. Любые тиражи и виды скрепления.',
    image: 'https://images.unsplash.com/photo-1612351217829-9e467539406f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZXMlMjBmbHllcnMlMjBjYXRhbG9nfGVufDF8fHx8MTc3NTA1NzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'large-format',
    icon: Package,
    title: 'Широкоформатная печать',
    description: 'Печать баннеров, плакатов и постеров для наружной и интерьерной рекламы.',
    image: 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBwb3N0ZXIlMjBwcmludGluZ3xlbnwxfHx8fDE3NzUwNTcxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'bookbinding',
    icon: BookOpen,
    title: 'Переплёт и брошюровка',
    description: 'Твёрдый и мягкий переплёт для дипломных работ, отчетов и презентаций.',
    image: 'https://images.unsplash.com/photo-1762113246719-1a6adc837209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rYmluZGluZyUyMGhhcmRjb3ZlciUyMGJvb2tzfGVufDF8fHx8MTc3NTA1NzE0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'mugs',
    icon: CupSoda,
    title: 'Печать на кружках',
    description: 'Уникальный подарок или корпоративный сувенир с вашим фото, лого или надписью.',
    image: 'https://images.unsplash.com/photo-1516788419857-a41a4c921102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBtdWclMjBwcmludGluZ3xlbnwxfHx8fDE3NzUzMDMwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-red-500 to-amber-500',
  },
  {
    id: 't-shirts',
    icon: Shirt,
    title: 'Печать на футболках',
    description: 'Напечатаем любой принт, логотип или фото на качественной одежде из 100% хлопка.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0JTIwcHJpbnRpbmdfZW58MXx8fHwxNzc1MzAzMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-sky-500 to-fuchsia-500',
  },
  {
    id: 'posters',
    icon: GalleryHorizontal,
    title: 'Печать постеров',
    description: 'Яркие постеры и плакаты для декора стен, выставок или мероприятий. Фотокачество.',
    image: 'https://images.unsplash.com/photo-154184859-5989b3889895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBwcmludGluZyUyMHdhbGx8ZW58MXx8fHwxNzc1MzAzMTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-lime-500 to-teal-500',
  },
];

export default function PrintingServicesCatalog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
              Каталог печатных услуг
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              От визиток до широкоформатных баннеров — всё, что нужно для вашего бизнеса и творчества. Качественно, быстро и с душой.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PushNotificationBanner />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl shadow-lg flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                      <Link to={`/printing-services/${service.id}`} className={`mt-4 inline-block py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-xl hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2 group`}>
                        Подробнее
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}