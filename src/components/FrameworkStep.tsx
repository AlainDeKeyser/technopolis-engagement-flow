
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FrameworkStepProps {
  number: number;
  title: string;
  goal: string;
  tool: string;
  outcome: string;
  icon: ReactNode;
  className?: string;
}

const FrameworkStep = ({
  number,
  title,
  goal,
  tool,
  outcome,
  icon,
  className,
}: FrameworkStepProps) => {
  return (
    <div className={cn("framework-step", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-primary/80">{icon}</div>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Goal</CardTitle>
          <CardDescription className="text-foreground/90">
            {goal}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-primary mb-1">Tool: {tool}</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {/* We'll leave this area for specific tool details */}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary mb-1">Outcome</h4>
            <p className="text-muted-foreground">{outcome}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrameworkStep;
