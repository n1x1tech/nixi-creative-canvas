
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-bold gradient-text font-orbitron interactive"
          >
            NIXI TECHNOLOGY
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors interactive"
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/ai-consulting')}
              className="text-foreground hover:text-primary transition-colors interactive"
            >
              AI Consulting
            </button>
            <button 
              onClick={() => navigate('/ai-learning')}
              className="text-foreground hover:text-primary transition-colors interactive"
            >
              AI Learning
            </button>
            <button 
              onClick={() => navigate('/enterprise-ai')}
              className="text-foreground hover:text-primary transition-colors interactive"
            >
              Enterprise AI
            </button>
            <button 
              onClick={() => navigate('/creative-technology')}
              className="text-foreground hover:text-primary transition-colors interactive"
            >
              Creative Tech
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors interactive"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
