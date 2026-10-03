
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const InteractiveMapPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Карта Сервисов Минска
          </h1>
          <div style={{ width: '100%', height: '80vh', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              src="/minsk_services_map.html"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Карта Сервисов Минска"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InteractiveMapPage;
