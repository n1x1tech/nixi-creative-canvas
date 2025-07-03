
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const EnterpriseAI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-red-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-orbitron">
              ENTERPRISE<br />AI SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Streamlined business processes and AI-powered operational efficiency solutions that transform enterprise workflows and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                    alt="Enterprise Workflow Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-primary mb-2">Active Enterprise Projects</h3>
                  <p className="text-sm text-foreground">
                    Currently developing AI-powered workflow solutions for 2 enterprise clients, transforming their operational efficiency and business processes.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">Workflow Automation & Design</h3>
                <p className="text-muted-foreground mb-4">
                  Custom AI implementations that streamline business processes and eliminate operational bottlenecks.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Process Automation
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Workflow Optimization
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    System Integration
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Performance Analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                    alt="AI Integration Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-primary mb-2">AI Strategy & Implementation</h3>
                  <p className="text-sm text-foreground">
                    Comprehensive AI strategy consulting and implementation services that drive business transformation and competitive advantage.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">AI Integration & Consulting</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic AI implementations that enhance decision-making, automate complex tasks, and unlock new business opportunities.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    AI Strategy Development
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Predictive Analytics
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Custom AI Solutions
                  </li>
                </ul>
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

export default EnterpriseAI;
