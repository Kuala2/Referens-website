import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-white pt-24 pb-8 border-t border-neutral">
      {/* Full-width Yandex Map */}
      <div className="w-full h-[450px] overflow-hidden shadow-sm relative group bg-neutral">
        <div className="absolute inset-0 bg-neutral/10 pointer-events-none z-10 transition-colors group-hover:bg-transparent"></div>
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=44.006516%2C56.326887&z=16&pt=44.006516,56.326887,pm2gnm" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          title="SENSE | Яндекс.Карты"
          className="grayscale contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-700"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16 border-b border-neutral pb-16 pt-16">
          
          {/* Brand & Abstract */}
          <div className="flex flex-col">
            <a href="#" className="flex flex-col mb-6">
              <span className="font-serif text-2xl tracking-widest text-dark leading-none mb-1 uppercase">SENSE</span>
              <span className="text-emerald text-[0.65rem] tracking-[0.3em] font-medium uppercase">aesthetic space</span>
            </a>
            <p className="text-dark-muted font-light text-sm mb-8 max-w-xs leading-relaxed">
              Пространство, где красота встречается с искусством, а забота о 
              себе становится ежедневным ритуалом.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://vk.com/" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral flex items-center justify-center text-dark/70 hover:bg-[#0077FF] hover:text-white hover:border-[#0077FF] transition-all duration-300"
                aria-label="VKontakte"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M21.547 7.104c.153-.5.051-.869-.613-.869h-2.134c-.561 0-.818.291-.972.614 0 0-1.077 2.614-2.612 4.316-.484.484-.713.637-1.018.637-.153 0-.383-.153-.383-.585V7.104c0-.56-.153-.815-.612-.815H10.45c-.357 0-.585.255-.585.508 0 .524.791.637.868 2.086v3.13c0 .713-.128.841-.433.841-.818 0-2.822-2.639-4.01-5.638-.215-.595-.436-.824-1.002-.824H3.155c-.636 0-.766.291-.766.614 0 .586.764 3.538 3.58 7.466C7.8 17.151 10.435 18 12.825 18c1.428 0 1.606-.318 1.606-.865v-2.01c0-.637.135-.765.586-.765.33 0 .916.152 2.266 1.45 1.53 1.529 1.782 2.19 2.622 2.19h2.134c.637 0 .956-.319.778-.943-.205-.688-.957-1.554-1.954-2.673-.535-.61-1.35-1.272-1.605-1.602-.357-.407-.255-.586 0-1.018 0 0 2.828-3.974 3.289-4.66z" />
                </svg>
              </a>
              <a 
                href="https://t.me/" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral flex items-center justify-center text-dark/70 hover:bg-[#2AABEE] hover:text-white hover:border-[#2AABEE] transition-all duration-300"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.968 11.968 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a 
                href="https://whatsapp.com/" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-neutral flex items-center justify-center text-dark/70 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.031 0C5.395 0 0 5.393 0 12.028c0 2.126.554 4.2 1.606 6.02L0 24l6.115-1.604A12.016 12.016 0 0 0 12.031 24c6.634 0 12.028-5.394 12.028-12.028C24.06 5.393 18.665 0 12.031 0zm3.899 17.5c-.184.52-1.077 1.006-1.503 1.066-.395.056-.913.109-2.923-.715-2.427-.992-3.979-3.468-4.099-3.626-.119-.158-.977-1.306-.977-2.493 0-1.186.618-1.765.838-2.001.218-.236.475-.295.633-.295.16 0 .317.005.457.012.152.007.354-.058.554.423.238.572.673 1.649.733 1.768.058.12.099.255.02.413-.081.157-.121.256-.239.395-.119.139-.251.298-.354.396-.12.112-.244.236-.109.472.138.232.614 1.009 1.314 1.635.903.805 1.671 1.05 1.888 1.168.218.118.348.098.477-.04.131-.138.555-.648.705-.87.147-.223.295-.187.514-.105.218.081 1.383.652 1.621.77.238.119.396.177.454.275.058.099.058.571-.125 1.09z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-dark tracking-wide">Навигация</h4>
            <ul className="space-y-4">
              {['О нас', 'Услуги', 'Мастера', 'Прайс-лист', 'Отзывы'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-dark/80 hover:text-emerald text-sm transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-dark tracking-wide">Контакты</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald mt-1 flex-shrink-0" />
                <span className="text-dark-muted text-sm font-light leading-relaxed">
                  г. Нижний Новгород, <br /> пл. Минина и Пожарского
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald flex-shrink-0" />
                <span className="text-dark-muted text-sm font-light">
                  +7 (831) 200-00-00
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-emerald flex-shrink-0" />
                <span className="text-dark-muted text-sm font-light">
                  Ежедневно с 10:00 до 22:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-muted font-light">
            © {new Date().getFullYear()} SENSE Aesthetic Space. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-dark-muted hover:text-dark font-light transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-dark-muted hover:text-dark font-light transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
