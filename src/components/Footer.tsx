
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-bold text-primary">Technopolis</span>
              <span className="text-sm text-muted-foreground">Innovation Framework</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A comprehensive approach to creating multi-generational, multi-platform educational experiences.
            </p>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a href="#" className="hover:text-primary">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-primary">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Technopolis. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
