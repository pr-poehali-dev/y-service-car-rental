import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const pricingPlans = [
  {
    name: 'Škoda Rapid',
    price: '2 000',
    period: 'сутки',
    features: [
      'Механика или автомат',
      'Кондиционер',
      'Bluetooth аудиосистема',
      'ОСАГО включено',
      'Техподдержка 24/7'
    ]
  },
  {
    name: 'Škoda Octavia',
    price: '2 300',
    period: 'сутки',
    features: [
      'Автоматическая КПП',
      'Климат-контроль',
      'Круиз-контроль',
      'Парктроник',
      'ОСАГО + КАСКО'
    ],
    popular: true
  },
  {
    name: 'Haval Jolion',
    price: '2 500',
    period: 'сутки',
    features: [
      'Автоматическая КПП',
      'Панорамная крыша',
      'Подогрев сидений',
      'Камера заднего вида',
      'Полная страховка'
    ]
  },
  {
    name: 'Evolute i-Pro',
    price: '2 300',
    period: 'сутки',
    features: [
      'Автоматическая КПП',
      'Электропривод',
      'Мультимедиа система',
      'Быстрая зарядка',
      'Запас хода 405 км'
    ]
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Тарифы и цены
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingPlans.map((plan, idx) => (
            <Card 
              key={idx} 
              className={`relative overflow-hidden animate-scale-in ${plan.popular ? 'border-primary shadow-xl scale-105' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold">
                  Популярное
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price} ₽</span>
                  <span className="text-muted-foreground"> / {plan.period}</span>
                </div>
                <CardDescription className="text-sm mt-2">При аренде от 30 дней</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full mt-6" 
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={scrollToContact}
                >
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Icon name="Info" size={24} className="text-accent" />
              Дополнительная информация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-0.5" />
                <span>Скидки при аренде от 3 месяцев — до 15%</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-0.5" />
                <span>Возможность выкупа после 6 месяцев аренды</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-0.5" />
                <span>Бесплатная подмена авто на время ремонта</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="CheckCircle" size={16} className="text-primary mt-0.5" />
                <span>Помощь в подключении к агрегаторам такси</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}