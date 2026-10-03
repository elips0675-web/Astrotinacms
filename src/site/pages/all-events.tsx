import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { AllEvents } from '../components/all-events';

export default function AllEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AllEvents />
      <Footer />
    </div>
  );
}
