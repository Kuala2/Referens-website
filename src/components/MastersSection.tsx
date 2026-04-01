const masters = [
  {
    id: 1,
    name: 'Елена Воронцова',
    role: 'Арт-директор, Топ-стилист',
    experience: 'Опыт 12 лет',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Мария Данилова',
    role: 'Врач-косметолог',
    experience: 'Опыт 8 лет',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'Анна Строева',
    role: 'Стилист-колорист',
    experience: 'Опыт 6 лет',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Виктория Соболева',
    role: 'Топ-мастер Nail-сервиса',
    experience: 'Опыт 9 лет',
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function MastersSection() {
  return (
    <section id="masters" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald tracking-widest text-sm uppercase mb-3 block font-medium">Команда</span>
          <h2 className="text-3xl md:text-5xl mb-6">Наши <span className="italic text-gold">творцы</span></h2>
          <p className="text-dark-muted font-light leading-relaxed">
            Доверьтесь рукам настоящих профессионалов. Наши мастера регулярно проходят 
            обучение в лучших международных школах и владеют передовыми техниками.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {masters.map((master) => (
            <div key={master.id} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[3/4]">
                <img 
                  src={master.image} 
                  alt={master.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                  <a href="#booking" className="text-sm border-b border-white pb-1 font-medium hover:text-gold hover:border-gold transition-colors">
                    Записаться к мастеру
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-serif mb-1 group-hover:text-emerald transition-colors">{master.name}</h3>
              <p className="text-sm text-gold font-medium tracking-wide mb-2 uppercase">{master.role}</p>
              <span className="text-dark/80 text-sm font-medium">{master.experience}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
