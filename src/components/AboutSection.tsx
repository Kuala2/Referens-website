import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const benefits = [
    'Только премиальные бренды косметики',
    'Мастера международного класса',
    'Стерильные инструменты класса А',
    'Персональный подход к каждому гостю'
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Эстетика нашего салона" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-8 -right-8 bg-neutral p-6 rounded-xl shadow-xl max-w-[240px] hidden md:block border border-gold/20">
              <span className="block text-4xl font-serif text-emerald mb-2">10+</span>
              <p className="text-dark-muted text-sm font-medium leading-relaxed">
                Лет создаем красоту и уверенность в себе
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-emerald tracking-widest text-sm uppercase mb-3 block font-medium">О нашей философии</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Искусство тихой <br/><span className="italic text-gold">роскоши</span></h2>
            
            <p className="text-dark-muted mb-6 leading-relaxed text-lg">
              Мы верим, что истинная красота не требует лишнего шума. В нашем пространстве 
              в центре Нижнего Новгорода каждая деталь продумана для вашего абсолютного комфорта.
            </p>
            <p className="text-dark-muted mb-10 leading-relaxed text-lg">
              Сочетая передовые технологии эстетической медицины, премиальные уходы и 
              безупречный вкус наших стилистов, мы раскрываем вашу естественную привлекательность.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-dark">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#masters" 
              className="group inline-flex items-center gap-2 text-emerald font-medium uppercase tracking-wider text-sm hover:text-dark transition-colors"
            >
              Познакомиться с командой
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
