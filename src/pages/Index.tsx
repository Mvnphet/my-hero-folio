import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Alex Dubois
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Développeur Full-Stack passionné par l'innovation et les technologies modernes
          </p>
          
          {/* CTA Button */}
          <div className="pt-4 animate-slide-up">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => {
                // Future: scroll to projects section or navigate to projects page
                console.log("Afficher les projets");
              }}
            >
              Afficher mes projets
            </Button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;