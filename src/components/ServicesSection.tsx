import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Сложное окрашивание',
    description: 'Техники AirTouch, Shatush, Balayage с использованием премиальных уходов.',
    price: 'от 7 500 ₽',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80'
  },
  {
    id: 2,
    title: 'Авторская стрижка',
    description: 'Индивидуальный подбор формы с учетом анатомии лица и структуры волос.',
    price: 'от 3 000 ₽',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Эстетическая косметология',
    description: 'Уходовые программы, пилинги и массаж лица для сияния вашей кожи.',
    price: 'от 4 500 ₽',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 4,
    title: 'Nail-сервис',
    description: 'Безупречный аппаратный маникюр и педикюр с покрытием lux-сегмента.',
    price: 'от 2 500 ₽',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 5,
    title: 'SPA-ритуал для волос',
    description: 'Увлажнение, питание и восстановление структуры волоса на премиальной косметике.',
    price: 'от 5 000 ₽',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'Архитектура бровей',
    description: 'Идеальная форма и подбор цвета, подчеркивающие ваши черты лица.',
    price: 'от 2 000 ₽',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(services.length - 1);

  // Высчитываем реальное количество переключений, зависящее от ширины экрана
  const updateMaxIndex = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const el = scrollRef.current;
      const card = el.children[0] as HTMLElement;
      // Сколько целых карточек влезает на экран (добавляем gap)
      const visibleCards = Math.round(el.clientWidth / (card.offsetWidth + 32));
      const newMax = Math.max(0, services.length - visibleCards);
      setMaxIndex(newMax);
    }
  };

  useEffect(() => {
    updateMaxIndex();
    window.addEventListener('resize', updateMaxIndex);
    return () => window.removeEventListener('resize', updateMaxIndex);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const scrollPos = element.scrollLeft;
      const cards = Array.from(element.children) as HTMLElement[];
      const containerRect = element.getBoundingClientRect();
      
      let closestIdx = 0;
      let minDiff = Infinity;
      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const diff = Math.abs(cardRect.left - containerRect.left);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });

      // Проверка: достигли ли мы физического конца скролла?
      const isAtEnd = scrollPos + element.clientWidth >= element.scrollWidth - 10;
      setActiveIndex(isAtEnd ? maxIndex : Math.min(closestIdx, maxIndex));
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const element = scrollRef.current;
      const cards = Array.from(element.children) as HTMLElement[];
      
      let targetIdx = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
      
      if (targetIdx < 0) targetIdx = 0;
      if (targetIdx > maxIndex) targetIdx = maxIndex;
      if (targetIdx === activeIndex) return; // Уже на нужном месте
      
      const targetElement = cards[targetIdx];
      if (targetElement) {
        let targetScrollLeft = targetElement.offsetLeft;
        const startScrollLeft = element.scrollLeft;

        // Если это последний возможный шаг вправо, скроллим до самого конца контейнера
        if (targetIdx === maxIndex && direction === 'right') {
          targetScrollLeft = element.scrollWidth - element.clientWidth;
        }

        element.style.scrollBehavior = 'auto';
        element.style.scrollSnapType = 'none';

        const duration = 400; // 0.4 секунды по просьбе пользователя
        let startTime: number | null = null;
        
        const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

        const animateScroll = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          element.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeOutQuart(progress);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            element.style.scrollSnapType = 'x mandatory';
            setActiveIndex(targetIdx);
          }
        };
        
        requestAnimationFrame(animateScroll);
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald tracking-widest text-sm uppercase mb-3 block font-medium">Наши услуги</span>
          <h2 className="text-3xl md:text-5xl mb-6">Ритуалы <span className="italic text-gold">красоты</span></h2>
          <p className="text-dark/80 leading-relaxed font-normal">
            Мы предлагаем спектр исключительных услуг, чтобы подчеркнуть вашу индивидуальность. 
            Каждая процедура — это искусство, созданное нашими мастерами.
          </p>
        </div>

        {/* Carousel container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory relative [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`group w-[280px] md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1.333rem)] flex-none snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${activeIndex === idx ? 'border-gold/30' : 'border-transparent'} hover:border-gold/20 flex flex-col`}
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-medium mb-3 group-hover:text-emerald transition-colors truncate">{service.title}</h3>
                <p className="text-dark/80 text-sm leading-relaxed mb-6 flex-grow font-normal overflow-hidden max-h-24">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral gap-2">
                  <span className="font-serif text-lg font-medium text-dark truncate">{service.price}</span>
                  <a 
                    href="#booking" 
                    className="text-sm font-medium text-emerald border border-emerald/30 hover:bg-emerald hover:text-white hover:border-emerald px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap shrink-0"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <button 
            onClick={() => scroll('left')}
            className={`flex w-12 h-12 rounded-full border border-neutral transition-all items-center justify-center bg-white shadow-sm hover:shadow-md ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-emerald hover:text-emerald cursor-pointer'}`}
            disabled={activeIndex === 0}
            aria-label="Previous services"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex justify-center gap-3">
             {[...Array(maxIndex + 1)].map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-6 bg-emerald' : 'w-2.5 bg-neutral-300'}`}
                ></div>
             ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className={`flex w-12 h-12 rounded-full border border-neutral transition-all items-center justify-center bg-white shadow-sm hover:shadow-md ${activeIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:border-emerald hover:text-emerald cursor-pointer'}`}
            disabled={activeIndex === maxIndex}
            aria-label="Next services"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
