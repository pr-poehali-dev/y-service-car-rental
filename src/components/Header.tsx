import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Icon name="CarFront" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">Ю-Сервис</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('fleet')} className="text-foreground hover:text-primary transition-colors">
              Автопарк
            </button>
            <button onClick={() => scrollToSection('conditions')} className="text-foreground hover:text-primary transition-colors">
              Условия
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
              Тарифы
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('contact')}>Забронировать</Button>
          </nav>

          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('fleet')} className="text-left text-foreground hover:text-primary transition-colors">
                Автопарк
              </button>
              <button onClick={() => scrollToSection('conditions')} className="text-left text-foreground hover:text-primary transition-colors">
                Условия
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full">Забронировать</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
