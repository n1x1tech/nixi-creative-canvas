
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const CreativeTechnology = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isInSection) {
        const section = document.getElementById('creative-section');
        if (section) {
          const rect = section.getBoundingClientRect();
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isInSection]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-red-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-orbitron">
              CREATIVE<br />TECHNOLOGY
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Where cutting-edge AI meets creative innovation. Interactive solutions and creative AI applications that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Interactive Effect */}
      <section 
        id="creative-section"
        className="py-20 bg-background relative overflow-hidden"
        onMouseEnter={() => setIsInSection(true)}
        onMouseLeave={() => setIsInSection(false)}
      >
        {/* Interactive mouse trail effect */}
        {isInSection && (
          <div 
            className="absolute pointer-events-none z-10 transition-all duration-100 ease-out"
            style={{
              left: mousePosition.x - 25,
              top: mousePosition.y - 25,
              width: '50px',
              height: '50px',
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
        )}

        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center mb-12">
            <p className="text-sm text-primary">
              Move your mouse around this section to see the interactive effect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-scale interactive">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop" 
                    alt="Interactive AI Solutions"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs inline-block mb-4">
                  Interactive Innovation
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                  Interactive AI Solutions
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Creative AI applications that engage users through interactive experiences and innovative interfaces.
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Interactive Interfaces
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Creative AI Models
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    User Experience Design
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Innovation Prototyping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-scale interactive">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                    alt="Creative Technology Implementation"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs inline-block mb-4">
                  Next-Gen Solutions
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                  Creative Technology Implementation
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Innovative technology implementations that blend creativity with functionality to create unique digital experiences.
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Digital Experiences
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Creative Automation
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Artistic AI Applications
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                    Innovation Labs
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg interactive hover-scale mr-4"
            >
              Back to Home
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg interactive hover-scale"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreativeTechnology;
