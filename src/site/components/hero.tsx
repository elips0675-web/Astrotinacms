import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    title: "Мир знаний нового поколения",
    subtitle: "Современная библиотека с более чем 500,000 книг, цифровыми ресурсами и инновационными пространствами.",
    image: "https://images.unsplash.com/photo-1764406807567-a24faaaad034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc0OTcxMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    cta: "Начать исследование"
  },
  {
    title: "Технологии для вашего роста",
    subtitle: "Воспользуйтесь нашими коворкинг-зонами, компьютерными залами и высокоскоростным Wi-Fi для продуктивной работы.",
    image: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NzUxMDY4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    cta: "Наши услуги"
  },
  {
    title: "События, которые вдохновляют",
    subtitle: "Посещайте лекции, мастер-классы и культурные мероприятия, которые мы проводим каждую неделю.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWN0dXJlJTIwaGFsbHxlbnwxfHx8fDE2NzQwMDUxNTE&ixlib=rb-1.2.1&q=80&w=1080",
    cta: "Календарь событий"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: '0px 2px 10px rgba(0,0,0,0.5)' }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{ textShadow: '0px 2px 5px rgba(0,0,0,0.5)' }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.button className="px-8 py-4 bg-gradient-to-r from-green-500 to-red-500 text-white rounded-full hover:shadow-xl transition-shadow flex items-center justify-center gap-2 group mx-auto">
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Arrow Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
