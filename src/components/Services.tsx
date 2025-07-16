
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "AI Consulting & Learning",
      description: "Strategic AI implementation for educational institutions with proven results in learning assessment and WCAG 2.2 compliance",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      features: ["AI Learning Assessment", "Educational Technology", "Audio Description Generation", "WCAG 2.2 Compliance", "Custom AI Solutions"],
      caseStudy: "Partnered with Radford University's IMPACT Lab to develop cutting-edge AI learning and assessment tools with accessibility features"
    },
    {
      title: "Enterprise AI Solutions",
      description: "Comprehensive AI-powered business solutions including workflow design and operational efficiency optimization",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: ["AI Workflow Design", "Process Automation", "System Integration", "Predictive Analytics", "Performance Optimization"],
      caseStudy: "Currently developing AI-powered workflow solutions for 2 enterprise clients, transforming their operational efficiency with custom automation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI solutions for education and enterprise, with proven results in learning assessment, workflow optimization, and accessibility compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover-scale group">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-foreground font-medium">
                    <span className="text-primary">Case Study:</span> {service.caseStudy}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
