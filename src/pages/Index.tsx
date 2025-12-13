import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Fleet from '@/components/Fleet';
import Conditions from '@/components/Conditions';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Conditions />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
