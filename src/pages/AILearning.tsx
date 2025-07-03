
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const AILearning = () => {
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
              AI-POWERED<br />LEARNING TECHNOLOGY
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Innovative educational technology solutions that enhance learning outcomes through adaptive AI systems and intelligent analytics.
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
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                    alt="Adaptive Learning Systems"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-primary mb-2">Adaptive Learning Systems</h3>
                  <p className="text-sm text-foreground">
                    AI-driven systems that adapt to individual learning styles and pace, providing personalized educational experiences.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">Personalized Learning Paths</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent systems that create customized learning experiences based on student performance and preferences.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Adaptive Content Delivery
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Learning Style Recognition
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Progress Optimization
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Real-time Adjustments
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                    alt="Educational Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <h3 className="font-bold text-primary mb-2">Educational Analytics Platform</h3>
                  <p className="text-sm text-foreground">
                    Comprehensive analytics tools that provide insights into learning patterns, engagement, and educational effectiveness.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">Learning Analytics & Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics that transform educational data into actionable insights for improved learning outcomes.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Learning Pattern Analysis
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Engagement Metrics
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Predictive Modeling
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Performance Dashboards
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

export default AILearning;
