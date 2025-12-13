import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Conditions() {
  return (
    <section id="conditions" className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Условия работы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный формат сотрудничества
          </p>
        </div>

        <Tabs defaultValue="rent" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="rent" className="text-lg">Аренда</TabsTrigger>
            <TabsTrigger value="buyout" className="text-lg">Выкуп</TabsTrigger>
          </TabsList>

          <TabsContent value="rent" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Аренда автомобиля</CardTitle>
                <CardDescription className="text-base">Гибкие условия для работы в такси</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="FileCheck" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Документы</h4>
                        <p className="text-sm text-muted-foreground">Паспорт и водительское удостоверение</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Calendar" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Срок аренды</h4>
                        <p className="text-sm text-muted-foreground">От 1 месяца, возможно продление</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Shield" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Страхование</h4>
                        <p className="text-sm text-muted-foreground">ОСАГО и КАСКО включены</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Wrench" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Обслуживание</h4>
                        <p className="text-sm text-muted-foreground">Техподдержка и плановое ТО</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Fuel" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Топливо</h4>
                        <p className="text-sm text-muted-foreground">Заправка за счет арендатора</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">График</h4>
                        <p className="text-sm text-muted-foreground">Работайте в удобное время</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buyout" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Выкуп автомобиля</CardTitle>
                <CardDescription className="text-base">Станьте владельцем авто с выгодой</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Percent" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Первый взнос</h4>
                        <p className="text-sm text-muted-foreground">От 20% стоимости автомобиля</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="CalendarCheck" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Срок выкупа</h4>
                        <p className="text-sm text-muted-foreground">12-36 месяцев на выбор</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Wallet" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Платежи</h4>
                        <p className="text-sm text-muted-foreground">Фиксированный ежемесячный платеж</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="FileText" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Оформление</h4>
                        <p className="text-sm text-muted-foreground">Договор купли-продажи с рассрочкой</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Key" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Собственность</h4>
                        <p className="text-sm text-muted-foreground">Авто ваше после последнего платежа</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="BadgeCheck" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Гарантия</h4>
                        <p className="text-sm text-muted-foreground">Поддержка на весь период выкупа</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
