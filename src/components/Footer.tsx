import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/ЛОГОТИП.png" 
                alt="Ю-Сервис" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">Ю-Сервис</span>
            </div>
            <p className="text-white/80">
              Аренда и выкуп автомобилей для работы в такси в Ялте
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-white/80">
              <p>г. Ялта, переулок Свердлова 6А</p>
              <p>+7 (918) 050-92-41</p>
              <p>info@юсервис.рф</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <p className="text-white/80">
              Ежедневно<br />
              9:00 — 20:00
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; 2024 Ю-Сервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}