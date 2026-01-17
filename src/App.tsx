import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { CustomPlan } from './components/CustomPlan';
import { CustomRequirements } from './components/CustomRequirements';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ProductShowcase />
      <Pricing />
      <CustomPlan />
      <CustomRequirements />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
}
