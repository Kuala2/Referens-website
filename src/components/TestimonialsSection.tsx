import { useRef, useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Елена Смирнова',
    service: 'Сложное окрашивание',
    text: 'Удивительная атмосфера и идеальный результат. Мастер понял меня с полуслова, и цвет получился именно таким, как я мечтала.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Анна Сидорова',
    service: 'Уход за лицом',
    text: 'Пространство красоты SENSE — это настоящее открытие. Процедура прошла очень расслабляюще, кожа сияет здоровьем.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Мария Коваленко',
    service: 'Маникюр и педикюр',
    text: 'Безупречный сервис. Очень внимательные администраторы, вкусный кофе, а качество услуг просто на высшем уровне.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 4,
    name: 'Ольга Соколова',
    service: 'Авторская стрижка',
    text: 'Давно искала мастера, который сможет подобрать стрижку именно под мою форму лица. Результат превзошел все ожидания!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 5,
    name: 'Виктория Ларина',
    service: 'SPA-ритуал для волос',
    text: 'Потрясающий отдых и восстановление для волос. После процедуры они стали плотными и блестящими. Рекомендую!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - 1);

  const updateMaxIndex = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const el = scrollRef.current;
      const card = el.children[0] as HTMLElement;
      // Сколько целых карточек влезает на экран (добавляем gap)
      const visibleCards = Math.round(el.clientWidth / (card.offsetWidth + 32));
      const newMax = Math.max(0, testimonials.length - visibleCards);
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
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald tracking-widest text-sm uppercase mb-3 block font-medium">Отзывы</span>
          <h2 className="text-3xl md:text-5xl mb-6">Слова наших <span className="italic text-gold">гостей</span></h2>
          <p className="text-dark-muted font-light text-lg">
            Мы гордимся тем, что вы доверяете нам самое ценное — вашу красоту и время.
          </p>
        </div>

        {/* Carousel container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory relative [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1.333rem)] flex-none snap-start bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative flex flex-col border ${activeIndex === idx ? 'border-gold/30' : 'border-transparent'}`}
            >
              <Quote size={40} className="text-gold/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-dark/80 leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-emerald/10 shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="font-serif font-medium text-lg text-dark mb-0.5 truncate">{testimonial.name}</h4>
                  <span className="text-xs text-emerald tracking-wide uppercase font-medium truncate">{testimonial.service}</span>
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
            aria-label="Previous review"
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
            className={`flex w-12 h-12 rounded-full border border-neutral transition-all items-center justify-center bg-white shadow-sm hover:shadow-md ${activeIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-emerald hover:text-emerald cursor-pointer'}`}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
