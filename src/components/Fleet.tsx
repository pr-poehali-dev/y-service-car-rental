import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const cars = [
  {
    id: 1,
    name: 'Škoda Rapid',
    description: 'Надежный и экономичный седан для работы в такси',
    features: ['Механика/Автомат', 'Кондиционер', 'ABS/ESP', 'Bluetooth'],
    specs: ['1.6 л', '110 л.с.', 'Бензин', '5 мест'],
    image: 'https://cdn.poehali.dev/projects/5d53ac55-57ab-4892-ad65-6728b2e37826/files/8efff2e0-0e61-40c4-b2c6-0f31eebeaaec.jpg',
    popular: true
  },
  {
    id: 2,
    name: 'Škoda Octavia',
    description: 'Комфортный седан бизнес-класса',
    features: ['Автомат', 'Климат-контроль', 'Круиз-контроль', 'Парктроник'],
    specs: ['1.8 л', '150 л.с.', 'Бензин', '5 мест'],
    image: 'https://cdn.poehali.dev/projects/5d53ac55-57ab-4892-ad65-6728b2e37826/files/39bcfb03-c089-49d2-a633-76e3cfb599e9.jpg',
    popular: false
  },
  {
    id: 3,
    name: 'Haval Jolion',
    description: 'Современный кроссовер с отличной комплектацией',
    features: ['Автомат', 'Панорамная крыша', 'Подогрев сидений', 'Камера заднего вида'],
    specs: ['1.5 л', '143 л.с.', 'Бензин', '5 мест'],
    image: 'https://cdn.poehali.dev/projects/5d53ac55-57ab-4892-ad65-6728b2e37826/files/de7284f5-642a-4691-9674-dd6e16bac18c.jpg',
    popular: false
  }
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Наш автопарк
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий автомобиль для работы в такси
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
              <div className="relative h-56 bg-muted overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {car.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent">Популярное</Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{car.name}</CardTitle>
                <CardDescription className="text-base">{car.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {car.specs.map((spec, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                      {spec}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}