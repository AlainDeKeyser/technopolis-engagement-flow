
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface SavedResponsesProps {
  responses: Record<string, any>;
}

const SavedResponses: React.FC<SavedResponsesProps> = ({ responses }) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  
  const toggleSection = (sectionNumber: number) => {
    if (expandedSections.includes(sectionNumber)) {
      setExpandedSections(expandedSections.filter(n => n !== sectionNumber));
    } else {
      setExpandedSections([...expandedSections, sectionNumber]);
    }
  };

  const downloadResponses = () => {
    const fileName = "technopolis-framework-responses.json";
    const json = JSON.stringify(responses, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    
    toast.success("Responses downloaded successfully!");
  };

  const sectionTitles = {
    1: "Audience & Context",
    2: "Substantive Anchor Points",
    3: "Design Philosophy",
    4: "Creative Constraints",
    5: "Translating Message into Layered Experiences",
    6: "Seriality & Modularity",
    7: "Diffusion & Partnerships",
    8: "Hybrid & Digital Layers",
    9: "Social Layer & Multi-Generational Feedback"
  };

  const responseMappings = {
    1: ["primaryAudience", "audienceSegments", "audienceContexts"],
    2: ["theme", "themeRelevance", "themeScalability"],
    3: ["designApproach", "platformAdaptations", "brandConsistency"],
    4: ["budgetConstraints", "timeConstraints", "formatConstraints"],
    5: ["primaryExperiences", "contentTiers", "crossPlatformStrategy"],
    6: ["returnEngagement", "contentProgression", "modulesOrEpisodes"],
    7: ["potentialPartners", "distributionChannels", "partnershipGoals"],
    8: ["physicalElements", "digitalElements", "integrationStrategy"],
    9: ["successMetrics", "feedbackMechanisms", "iterationStrategy"]
  };

  const responseLabels: Record<string, string> = {
    primaryAudience: "Primary Audience",
    audienceSegments: "Audience Segments",
    audienceContexts: "Audience Contexts",
    theme: "Central Theme",
    themeRelevance: "Theme Relevance",
    themeScalability: "Theme Scalability",
    designApproach: "Design Approach",
    platformAdaptations: "Platform Adaptations",
    brandConsistency: "Brand Consistency",
    budgetConstraints: "Budget Constraints",
    timeConstraints: "Time Constraints",
    formatConstraints: "Format Constraints",
    primaryExperiences: "Primary Experiences",
    contentTiers: "Content Tiers",
    crossPlatformStrategy: "Cross-Platform Strategy",
    returnEngagement: "Return Engagement Strategy",
    contentProgression: "Content Progression",
    modulesOrEpisodes: "Modules or Episodes",
    potentialPartners: "Potential Partners",
    distributionChannels: "Distribution Channels",
    partnershipGoals: "Partnership Goals",
    physicalElements: "Physical Elements",
    digitalElements: "Digital Elements",
    integrationStrategy: "Integration Strategy",
    successMetrics: "Success Metrics",
    feedbackMechanisms: "Feedback Mechanisms",
    iterationStrategy: "Iteration Strategy"
  };

  // Check if there are no responses saved
  const hasResponses = Object.keys(responses).length > 0;

  if (!hasResponses) {
    return (
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground">No responses have been saved yet.</p>
            <p className="mt-2">Fill out the form below and click "Save Framework Responses" to save your work.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Saved Responses</h2>
        <Button variant="outline" onClick={downloadResponses} className="flex items-center gap-2">
          <Download size={16} />
          Download Responses
        </Button>
      </div>

      <div className="space-y-4 mb-8">
        {Object.entries(sectionTitles).map(([sectionKey, sectionTitle]) => {
          const sectionNumber = parseInt(sectionKey);
          const fieldKeys = responseMappings[sectionNumber as keyof typeof responseMappings];
          const hasContent = fieldKeys.some(key => responses[key]?.trim().length > 0);

          if (!hasContent) return null;

          return (
            <Collapsible
              key={sectionKey}
              open={expandedSections.includes(sectionNumber)}
              onOpenChange={() => toggleSection(sectionNumber)}
              className="border rounded-lg overflow-hidden"
            >
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">
                    {sectionNumber}
                  </div>
                  <h3 className="text-xl font-semibold">{sectionTitle}</h3>
                </div>
                {expandedSections.includes(sectionNumber) ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <Card className="border-t-0 rounded-t-none">
                  <CardContent className="pt-6 space-y-4">
                    {fieldKeys.map(key => {
                      const value = responses[key];
                      if (!value || value.trim().length === 0) return null;
                      
                      return (
                        <div key={key} className="space-y-1">
                          <h4 className="font-medium text-sm">{responseLabels[key]}</h4>
                          <p className="text-sm bg-secondary/20 p-3 rounded whitespace-pre-wrap">{value}</p>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </>
  );
};

export default SavedResponses;
