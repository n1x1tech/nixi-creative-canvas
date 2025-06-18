
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Start Your AI Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your educational institution or enterprise with AI? Let's discuss your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you need AI learning assessment tools like we've built with Radford University, 
                or enterprise workflow solutions for your business, we're here to turn your vision into reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">Educational Institutions</h4>
                <p className="text-muted-foreground text-sm">
                  AI learning tools, assessment systems, and educational technology partnerships
                </p>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">Enterprise Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Workflow automation, AI integration, and process optimization consulting
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">ncorrigan@nixitechnology.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <div>
               <h4 className="font-semibold text-foreground">Response Time</h4>
                  <p className="text-muted-foreground">Within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Consultation</h4>
                  <p className="text-muted-foreground">Free initial project assessment</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Company/Institution
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border focus:border-primary"
                      placeholder="Organization name"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                    placeholder="Tell us about your AI project needs, timeline, and goals..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 interactive hover-scale"
                >
                  Start Your Project
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
