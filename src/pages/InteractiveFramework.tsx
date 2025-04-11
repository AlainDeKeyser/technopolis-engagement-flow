
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FrameworkForm from "@/components/FrameworkForm";
import SavedResponses from "@/components/SavedResponses";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InteractiveFramework = () => {
  const [savedResponses, setSavedResponses] = useState<Record<string, any>>({});
  
  const handleSaveResponses = (responses: Record<string, any>) => {
    setSavedResponses(responses);
    // Scroll to the top to see saved responses
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mb-6 flex items-center">
            <Button variant="ghost" asChild className="mr-2">
              <Link to="/">
                <ArrowLeft size={16} />
                <span className="ml-2">Back to Overview</span>
              </Link>
            </Button>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-primary mb-6">
              Interactive Framework Worksheet
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-muted-foreground">
              Complete each section of the framework to create your own innovation strategy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SavedResponses responses={savedResponses} />
            <FrameworkForm onSave={handleSaveResponses} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InteractiveFramework;
