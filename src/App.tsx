import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ProductShowcase />
      <Pricing />
      <Footer />
    </div>
  );
}
