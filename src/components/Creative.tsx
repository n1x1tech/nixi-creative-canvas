
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Creative = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInSection, setIsInSection] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isInSection) {
        const section = document.getElementById('creative');
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

  const creativeProjects = [
    {
      title: "Live Event & Interactive Media Technology",
      description: "Cutting-edge audiovisual solutions, immersive projection mapping, and interactive installations for conferences, concerts, corporate events, and artistic experiences",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      services: ["Audio Engineering", "Visual Systems", "3D Projection Mapping", "Interactive Installations", "Live Streaming", "Event Automation"],
      highlight: "Immersive Event Solutions"
    },
    {
      title: "Digital Solutions & Creative Technology Integration",
      description: "Custom web development with modern technologies, AI-powered features, and innovative technology solutions that bridge creativity and functionality",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      services: ["Custom Web Development", "AI Integration", "IoT Solutions", "Smart Installations", "Creative Coding", "Technology Consulting"],
      highlight: "Modern Digital Innovation"
    }
  ];

  return (
    <section 
      id="creative" 
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
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Creative Technology Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where innovation meets creativity - showcasing our diverse portfolio of technology-driven creative projects
          </p>
          <p className="text-sm text-primary mt-4">
            Move your mouse around this section to see the interactive effect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {creativeProjects.map((project, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-scale group interactive">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs inline-block mb-4">
                  {project.highlight}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {project.services.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-secondary/50 rounded-lg p-3 text-center text-sm text-foreground hover:bg-primary/20 transition-colors interactive">
                      {item}
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
};

export default Creative;
