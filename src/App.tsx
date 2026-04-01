import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MastersSection from './components/MastersSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-dark flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MastersSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
