
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const FrameworkSummary = () => {
  const summaryPoints = [
    "Begin with a clear map of audiences and contexts (Step 1), paying special attention to how people's cognitive and entertainment needs change over time.",
    "Choose a theme that has wide appeal and layering potential (Step 2), then define a design philosophy that works across mediums (Step 3).",
    "Shape the project using creative constraints (Step 4), ensuring longevity and multi-generational scalability.",
    "Translate your core message into cross-platform experiences with tiered complexity (Step 5).",
    "Implement serial or modular release strategies (Step 6) to keep audiences hooked and returning as they age.",
    "Expand reach through partnerships and platforms (Step 7)—from docu-streaming deals to educational game publishers, to traveling exhibits.",
    "Integrate physical and digital elements (Step 8) so that audiences can engage anywhere, anytime, at the level that suits them.",
    "Collect analytics and feedback (Step 9), refining each iteration for multi-generational user flows."
  ];

  return (
    <section id="summary" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container">
        <h2 className="text-center mb-12">Bringing It All Together</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {summaryPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
              <p>{point}</p>
            </div>
          ))}
          
          <div className="pt-6 mt-6 border-t text-center">
            <p className="text-lg mb-8">
              By following this overarching framework, Technopolis can consistently produce multi-layered, 
              cross-platform science engagement that meets audiences where they are and keeps them coming back—no 
              matter their age or the weather.
            </p>
            <Button size="lg">Start Implementing The Framework</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSummary;
