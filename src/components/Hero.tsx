
import { ArrowDownCircle, FileInput } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="overview" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-primary mb-6">
          Technopolis Overarching<br />
          Innovation Framework
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-10 text-muted-foreground">
          A comprehensive approach to creating multi-generational, 
          multi-platform educational experiences that engage audiences of all ages.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={() => document.getElementById('framework')?.scrollIntoView()}>
            Explore Framework
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/interactive" className="flex items-center gap-2">
              <FileInput size={18} />
              Interactive Worksheet
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <a href="#framework" aria-label="Scroll to framework">
            <ArrowDownCircle size={36} className="text-primary/60 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
