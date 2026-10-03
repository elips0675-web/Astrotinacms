import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { Events } from '../components/events';
import { News } from '../components/news';
import { Footer } from '../components/footer';
import FabWidget from '../components/ui/FabWidget';
import '../../styles/fab.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Events />
      <News />
      <Footer />
      <FabWidget />
    </div>
  );
}
