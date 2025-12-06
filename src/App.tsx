import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Purpose } from './components/Purpose';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-white">
      <Header />
      <Hero />
      <Products />
      <Purpose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}