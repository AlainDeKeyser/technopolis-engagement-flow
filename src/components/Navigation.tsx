
import { Menu, X, FileInput } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-primary">Technopolis</Link>
          <span className="hidden md:inline-block text-sm text-muted-foreground">Innovation Framework</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#overview" className="text-sm font-medium hover:text-primary transition-colors">
            Overview
          </a>
          <a href="#framework" className="text-sm font-medium hover:text-primary transition-colors">
            Framework
          </a>
          <a href="#summary" className="text-sm font-medium hover:text-primary transition-colors">
            Summary
          </a>
          <Button variant="outline" asChild>
            <Link to="/interactive">
              <FileInput size={16} className="mr-2" />
              Interactive Worksheet
            </Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 flex flex-col gap-4 border-t">
          <a 
            href="#overview" 
            className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Overview
          </a>
          <a 
            href="#framework" 
            className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Framework
          </a>
          <a 
            href="#summary" 
            className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Summary
          </a>
          <Button className="mt-2" asChild>
            <Link to="/interactive" onClick={() => setIsMenuOpen(false)}>
              <FileInput size={16} className="mr-2" />
              Interactive Worksheet
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
