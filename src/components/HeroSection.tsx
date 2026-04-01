import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/Photo Site.png';

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex flex-col justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[40%_32%] md:bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Глубокий градиент с размытием для идеальной читаемости на любом фоне */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/40 backdrop-blur-[2px] md:bg-gradient-to-r md:from-black/95 md:via-black/50 md:to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col items-start text-left animate-fade-in-up">
        <span className="text-gold tracking-[0.2em] text-sm md:text-base uppercase mb-6 block font-semibold drop-shadow-lg">
          Премиальный салон в Нижнем Новгороде
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white max-w-2xl mb-8 leading-[1.15] font-serif [text-shadow:_0_2px_10px_rgb(0_0_0_/_60%)]">
          Безупречный образ <br className="hidden md:block" />
          <span className="italic font-light">за 2 часа</span> в самом центре
        </h1>
        
        <p className="text-white/95 text-xl md:text-2xl max-w-xl mb-12 font-normal leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_60%)]">
          Погрузитесь в атмосферу тихой роскоши. Премиальные материалы, топ-мастера 
          и индивидуальный подход к вашей уникальной красоте.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full sm:w-auto">
          <a 
            href="#booking" 
            className="group px-10 py-5 bg-zinc-900 text-white rounded-full text-lg font-medium transition-all hover:bg-black flex items-center justify-center gap-3 shadow-2xl hover:shadow-zinc-900/40 hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Записаться онлайн
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#services" 
            className="hidden md:inline-block text-white/70 hover:text-white border-b border-transparent hover:border-white/50 pb-1 text-sm tracking-wide transition-all uppercase"
          >
            Смотреть услуги
          </a>
        </div>
      </div>
      
      {/* Scroll indicator - теперь и на мобильных */}
      <div className="absolute bottom-2 md:bottom-12 inset-x-0 flex flex-col items-center animate-bounce z-20 pointer-events-none">
        <span className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 [text-shadow:_0_1px_5px_rgb(0_0_0_/_50%)]">Вниз</span>
        <div className="w-[1px] h-[22px] md:w-[1.5px] md:h-8 bg-white/40 shadow-sm"></div>
      </div>
    </section>
  );
}
