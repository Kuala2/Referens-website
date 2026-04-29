import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    name: 'ВКонтакте',
    href: 'https://vk.com/',
    color: 'hover:bg-[#0077FF] hover:border-[#0077FF]',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M21.547 7.104c.153-.5.051-.869-.613-.869h-2.134c-.561 0-.818.291-.972.614 0 0-1.077 2.614-2.612 4.316-.484.484-.713.637-1.018.637-.153 0-.383-.153-.383-.585V7.104c0-.56-.153-.815-.612-.815H10.45c-.357 0-.585.255-.585.508 0 .524.791.637.868 2.086v3.13c0 .713-.128.841-.433.841-.818 0-2.822-2.639-4.01-5.638-.215-.595-.436-.824-1.002-.824H3.155c-.636 0-.766.291-.766.614 0 .586.764 3.538 3.58 7.466C7.8 17.151 10.435 18 12.825 18c1.428 0 1.606-.318 1.606-.865v-2.01c0-.637.135-.765.586-.765.33 0 .916.152 2.266 1.45 1.53 1.529 1.782 2.19 2.622 2.19h2.134c.637 0 .956-.319.778-.943-.205-.688-.957-1.554-1.954-2.673-.535-.61-1.35-1.272-1.605-1.602-.357-.407-.255-.586 0-1.018 0 0 2.828-3.974 3.289-4.66z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/',
    color: 'hover:bg-[#2AABEE] hover:border-[#2AABEE]',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.968 11.968 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://whatsapp.com/',
    color: 'hover:bg-[#25D366] hover:border-[#25D366]',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12.031 0C5.395 0 0 5.393 0 12.028c0 2.126.554 4.2 1.606 6.02L0 24l6.115-1.604A12.016 12.016 0 0 0 12.031 24c6.634 0 12.028-5.394 12.028-12.028C24.06 5.393 18.665 0 12.031 0zm3.899 17.5c-.184.52-1.077 1.006-1.503 1.066-.395.056-.913.109-2.923-.715-2.427-.992-3.979-3.468-4.099-3.626-.119-.158-.977-1.306-.977-2.493 0-1.186.618-1.765.838-2.001.218-.236.475-.295.633-.295.16 0 .317.005.457.012.152.007.354-.058.554.423.238.572.673 1.649.733 1.768.058.12.099.255.02.413-.081.157-.121.256-.239.395-.119.139-.251.298-.354.396-.12.112-.244.236-.109.472.138.232.614 1.009 1.314 1.635.903.805 1.671 1.05 1.888 1.168.218.118.348.098.477-.04.131-.138.555-.648.705-.87.147-.223.295-.187.514-.105.218.081 1.383.652 1.621.77.238.119.396.177.454.275.058.099.058.571-.125 1.09z" />
      </svg>
    ),
  },
];

export default function BookingSection() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);

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
            Выберите удобную соцсеть, напишите нам, и администратор подберет для вас
            идеальное время визита.
          </p>
        </div>

        <div
          className="w-full max-w-xl bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <MessageCircle className="mx-auto mb-4 text-gold" size={36} />
              <h3 className="font-serif text-2xl text-white mb-3">Записаться онлайн</h3>
              <p className="text-white/60 font-light">
                Нажмите на кнопку и выберите, где вам удобнее продолжить общение.
              </p>
            </div>

            <button 
              type="button"
              onClick={() => setIsSocialOpen((current) => !current)}
              aria-expanded={isSocialOpen}
              className="w-full py-4 rounded-xl font-medium uppercase tracking-wider text-sm transition-all duration-300 bg-gold text-white hover:bg-gold/90 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Записаться
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isSocialOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isSocialOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`min-h-14 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:-translate-y-0.5 ${social.color}`}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
