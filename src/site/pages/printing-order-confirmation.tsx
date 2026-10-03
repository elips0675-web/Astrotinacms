
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CheckCircle, Printer } from 'lucide-react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function PrintingOrderConfirmation() {
  const query = useQuery();
  const serviceTitle = query.get('serviceTitle');
  const quantity = query.get('quantity');
  const totalPrice = query.get('totalPrice');
  const options = JSON.parse(query.get('options') || '{}');
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl"
          >
            <div className="text-center">
                <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Спасибо за заказ!</h1>
                <p className="text-lg text-gray-600 mb-2">Ваш заказ <span className="font-semibold text-gray-800">№{orderNumber}</span> успешно оформлен.</p>
                <p className="text-lg text-gray-600 mb-8">Мы свяжемся с вами в ближайшее время для подтверждения деталей.</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 my-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Printer className="w-6 h-6" />
                Детали заказа
              </h2>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center py-2">
                  <p className="text-gray-600">Услуга:</p>
                  <p className="font-semibold text-gray-800">{serviceTitle}</p>
                </div>
                {Object.entries(options).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2">
                    <p className="text-gray-600 capitalize">{key}:</p>
                    <p className="font-semibold text-gray-800">{String(value)}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2">
                  <p className="text-gray-600">Количество:</p>
                  <p className="font-semibold text-gray-800">{quantity}</p>
                </div>
                <div className="flex justify-between items-center py-3 mt-2 border-t-2 border-dashed">
                  <p className="text-lg font-bold text-gray-800">Итого:</p>
                  <p className="text-xl font-bold text-emerald-600">{totalPrice}₽</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link
                to="/printing-services"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all font-semibold text-lg"
              >
                Вернуться в каталог
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
