
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-red-950/20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-orbitron">
            <span className="gradient-text">NIXI</span>
            <br />
            <span className="text-foreground">TECHNOLOGY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Transforming education and enterprise through intelligent AI solutions. 
            From university learning assessment tools to enterprise workflow optimization.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm">
            <button 
              onClick={() => navigate('/ai-consulting')}
              className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/20 transition-colors interactive"
            >
              AI Consulting & Learning Tools
            </button>
            <button 
              onClick={() => navigate('/ai-learning')}
              className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/20 transition-colors interactive"
            >
              AI-Powered Learning Technology
            </button>
            <button 
              onClick={() => navigate('/enterprise-ai')}
              className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/20 transition-colors interactive"
            >
              Enterprise AI Solutions
            </button>
            <button 
              onClick={() => navigate('/creative-technology')}
              className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-primary hover:bg-primary/20 transition-colors interactive"
            >
              Creative Technology
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToServices}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg interactive hover-scale"
            >
              View Our Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg interactive hover-scale"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
