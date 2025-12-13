import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Аренда авто для работы в такси
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Škoda Rapid · Octavia · Haval Jolion
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Выгодные условия аренды и выкупа в Ялте. Начните работать в такси уже сегодня!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
              Забронировать авто
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById('fleet');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} className="text-lg px-8">
              Смотреть автопарк
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm animate-scale-in">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Car" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Новые авто</h3>
              <p className="text-muted-foreground text-center">Комфортные автомобили в отличном состоянии</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="BadgeCheck" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Без залога</h3>
              <p className="text-muted-foreground text-center">Гибкие условия аренды и выкупа</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Clock" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрое оформление</h3>
              <p className="text-muted-foreground text-center">Получите авто в день обращения</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
