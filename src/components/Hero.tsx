import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content with staggered animations */}
          <div>
            {/* Badge with bounce animation */}
            <div 
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6 hero-text-reveal"
              style={{ animationDelay: '0.1s' }}
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium">Olá! Eu sou a <span className="text-primary font-bold">Kora</span> da Koraflow</span>
            </div>
            
            {/* Title with reveal animation */}
            <h1 
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent hero-text-reveal"
              style={{ animationDelay: '0.3s' }}
            >
              As <span className="text-primary">Melhores Soluções</span> de IA para o Atendimento do Seu Negócio
            </h1>
            
            {/* Description with reveal animation */}
            <p 
              className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto hero-text-reveal"
              style={{ animationDelay: '0.5s' }}
            >
              Transforme a experiência dos seus clientes com atendimento personalizado, 
              inteligente e disponível 24/7. Nossa tecnologia de IA aprende e se adapta 
              para oferecer soluções precisas.
            </p>
            
            {/* Buttons with reveal animation */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 hero-text-reveal"
              style={{ animationDelay: '0.7s' }}
            >
              <Button 
                size="lg" 
                className="shadow-glow group shimmer-effect"
                onClick={() => {
                  const chatButton = document.getElementById('chat-button');
                  chatButton?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  setTimeout(() => chatButton?.click(), 300);
                }}
              >
                Começar Agora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
