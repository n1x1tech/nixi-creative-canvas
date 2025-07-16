
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const AIConsulting = () => {
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
              AI CONSULTING &<br />LEARNING
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Strategic AI implementation for educational institutions with proven results in learning assessment, accessibility compliance, and educational technology partnerships.
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
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop" 
                    alt="AI Learning Assessment"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-primary mb-2">Radford University IMPACT Lab Partnership</h3>
                  <p className="text-sm text-foreground">
                    Pioneering AI learning and assessment tools in collaboration with Radford University's IMPACT Lab, developing cutting-edge educational technology solutions with accessibility features.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">Educational AI Assessment & Learning</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced AI-powered tools for evaluating student learning outcomes, generating accessible content, and ensuring WCAG 2.2 compliance in educational technology.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Learning Outcome Assessment
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Audio Description Generation
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    WCAG 2.2 Compliance Solutions
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Educational Data Analytics
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Student Progress Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                    alt="Educational Technology Consulting"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-primary mb-2">Strategic AI Implementation</h3>
                  <p className="text-sm text-foreground">
                    Comprehensive consulting services for educational institutions looking to integrate AI into their learning systems with full accessibility support and compliance.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">Educational Technology Consulting</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic guidance for implementing AI solutions in educational environments with measurable outcomes and accessibility at the forefront.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    AI Strategy Development
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Accessibility Integration
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Technology Integration Planning
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Faculty Training & Support
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Performance Measurement
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

export default AIConsulting;
