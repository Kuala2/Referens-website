import { useState } from 'react';

export default function BookingSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send the data to an API here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
          alt="Фон" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold tracking-widest text-sm uppercase mb-3 block font-medium">Ваш визит</span>
          <h2 className="text-3xl md:text-5xl text-white mb-6">Откройте для себя <span className="italic text-gold">совершенство</span></h2>
          <p className="text-white/70 font-light text-lg">
            Оставьте свои контакты, и наш администратор свяжется с вами в течение 15 минут 
            для подбора идеального времени визита.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Ваше имя</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="Как к вам обращаться?"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">Номер телефона</label>
              <input 
                type="tel" 
                id="phone" 
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="+7 (999) 000-00-00"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-4 rounded-xl font-medium uppercase tracking-wider text-sm transition-all duration-300 ${
                isSubmitted 
                  ? 'bg-emerald text-white cursor-not-allowed' 
                  : 'bg-gold text-white hover:bg-gold/90 shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {isSubmitted ? 'Заявка отправлена' : 'Записаться онлайн'}
            </button>

            <p className="text-center text-xs text-white/50 mt-2 font-light">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
