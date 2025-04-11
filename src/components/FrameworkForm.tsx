
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Save } from "lucide-react";
import { toast } from "sonner";

// Define the form schema with Zod
const frameworkSchema = z.object({
  // Step 1: Audience & Context
  primaryAudience: z.string().min(1, "Please identify your primary audience"),
  audienceSegments: z.string().min(1, "Please describe your audience segments"),
  audienceContexts: z.string().min(1, "Please list key contexts where your audience engages"),
  
  // Step 2: Substantive Anchor Points
  theme: z.string().min(1, "Please select a central theme"),
  themeRelevance: z.string().min(1, "Please explain the theme's relevance"),
  themeScalability: z.string().min(1, "Please describe how the theme scales across age groups"),
  
  // Step 3: Design Philosophy
  designApproach: z.string().min(1, "Please select a design approach"),
  platformAdaptations: z.string().min(1, "Please explain how your design adapts across platforms"),
  brandConsistency: z.string().min(1, "Please describe how brand consistency will be maintained"),
  
  // Step 4: Creative Constraints
  budgetConstraints: z.string().min(1, "Please outline budget constraints"),
  timeConstraints: z.string().min(1, "Please outline time constraints"),
  formatConstraints: z.string().min(1, "Please outline format constraints"),
  
  // Step 5: Translating Messages into Experiences
  primaryExperiences: z.string().min(1, "Please describe primary experiences"),
  contentTiers: z.string().min(1, "Please outline content tiers for different audiences"),
  crossPlatformStrategy: z.string().min(1, "Please explain cross-platform strategy"),
  
  // Step 6: Seriality & Modularity
  returnEngagement: z.string().min(1, "Please describe strategy for return engagement"),
  contentProgression: z.string().min(1, "Please outline content progression"),
  modulesOrEpisodes: z.string().min(1, "Please list planned modules or episodes"),
  
  // Step 7: Diffusion & Partnerships
  potentialPartners: z.string().min(1, "Please list potential partners"),
  distributionChannels: z.string().min(1, "Please identify distribution channels"),
  partnershipGoals: z.string().min(1, "Please outline partnership goals"),
  
  // Step 8: Hybrid & Digital Layers
  physicalElements: z.string().min(1, "Please describe physical elements"),
  digitalElements: z.string().min(1, "Please describe digital elements"),
  integrationStrategy: z.string().min(1, "Please explain integration strategy"),
  
  // Step 9: Social Layer & Feedback
  successMetrics: z.string().min(1, "Please define success metrics"),
  feedbackMechanisms: z.string().min(1, "Please outline feedback mechanisms"),
  iterationStrategy: z.string().min(1, "Please describe iteration strategy"),
});

type FrameworkFormValues = z.infer<typeof frameworkSchema>;

interface FrameworkFormProps {
  onSave: (values: FrameworkFormValues) => void;
}

const FrameworkForm = ({ onSave }: FrameworkFormProps) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  
  const form = useForm<FrameworkFormValues>({
    resolver: zodResolver(frameworkSchema),
    defaultValues: {
      primaryAudience: "",
      audienceSegments: "",
      audienceContexts: "",
      theme: "",
      themeRelevance: "",
      themeScalability: "",
      designApproach: "",
      platformAdaptations: "",
      brandConsistency: "",
      budgetConstraints: "",
      timeConstraints: "",
      formatConstraints: "",
      primaryExperiences: "",
      contentTiers: "",
      crossPlatformStrategy: "",
      returnEngagement: "",
      contentProgression: "",
      modulesOrEpisodes: "",
      potentialPartners: "",
      distributionChannels: "",
      partnershipGoals: "",
      physicalElements: "",
      digitalElements: "",
      integrationStrategy: "",
      successMetrics: "",
      feedbackMechanisms: "",
      iterationStrategy: "",
    },
  });

  const toggleSection = (sectionNumber: number) => {
    if (expandedSections.includes(sectionNumber)) {
      setExpandedSections(expandedSections.filter(n => n !== sectionNumber));
    } else {
      setExpandedSections([...expandedSections, sectionNumber]);
    }
  };

  const onSubmit = (values: FrameworkFormValues) => {
    onSave(values);
    toast.success("Your framework responses have been saved!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Step 1: Audience & Context */}
        <Collapsible 
          open={expandedSections.includes(1)} 
          onOpenChange={() => toggleSection(1)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Audience & Context</h3>
            </div>
            {expandedSections.includes(1) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Identify and segment your audience</CardTitle>
                <CardDescription>
                  Consider demographic segments, developmental stages, and engagement contexts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="primaryAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Audience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Families with school-age children" {...field} />
                      </FormControl>
                      <FormDescription>
                        Identify your main target audience
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="audienceSegments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Audience Segments</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Early childhood (3-5), Elementary (6-10), Tweens (11-12), Teens (13-17), Young Adults (18-24), Parents, Educators..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Break down your audience into developmental stages and age ranges
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="audienceContexts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Audience Contexts</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., At home, In classroom, Museum visits, Mobile devices, Streaming platforms..." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        List where and how your audience will engage with content
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 2: Substantive Anchor Points */}
        <Collapsible 
          open={expandedSections.includes(2)} 
          onOpenChange={() => toggleSection(2)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Substantive Anchor Points</h3>
            </div>
            {expandedSections.includes(2) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Ground your concepts in appealing themes</CardTitle>
                <CardDescription>
                  Identify themes with broad appeal and depth potential
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Central Theme</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Climate Science, Space Exploration, Artificial Intelligence" {...field} />
                      </FormControl>
                      <FormDescription>
                        Select a primary theme for your project
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="themeRelevance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Theme Relevance</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Explain why this theme matters to your audience segments" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Describe why this theme has broad appeal and relevance
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="themeScalability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Theme Scalability</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., For children: basic weather concepts; For teens: climate data analysis; For adults: policy implications" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Explain how this theme can be appreciated at different depths across age groups
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 3: Design Philosophy */}
        <Collapsible 
          open={expandedSections.includes(3)} 
          onOpenChange={() => toggleSection(3)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold">Design Philosophy</h3>
            </div>
            {expandedSections.includes(3) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Establish an overarching creative approach</CardTitle>
                <CardDescription>
                  Define a design philosophy that works across platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="designApproach"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Design Approach</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Immersive, Speculative, Cinematic, Game-based, Co-creative" {...field} />
                      </FormControl>
                      <FormDescription>
                        Choose your primary creative lens
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="platformAdaptations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Platform Adaptations</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Physical exhibits: hands-on interactions; Mobile: quick challenges; Documentary: narrative-driven" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Explain how your design approach adapts across platforms
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="brandConsistency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand Consistency</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe how you'll maintain a consistent brand experience" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Outline how brand consistency will be maintained across experiences
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Steps 4-9 follow the same pattern */}
        {/* Step 4: Creative Constraints */}
        <Collapsible 
          open={expandedSections.includes(4)} 
          onOpenChange={() => toggleSection(4)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-semibold">Creative Constraints</h3>
            </div>
            {expandedSections.includes(4) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Use constraints as innovation drivers</CardTitle>
                <CardDescription>
                  Define constraints that ensure sustainability and adaptability
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="budgetConstraints"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Constraints</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Limited production budget requiring creative solutions" 
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeConstraints"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time Constraints</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Seasonal release schedule, development timeline" 
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="formatConstraints"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Format Constraints</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Mobile-first design, limited physical space, transportation requirements" 
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 5: Translating Message into Experiences */}
        <Collapsible 
          open={expandedSections.includes(5)} 
          onOpenChange={() => toggleSection(5)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">5</div>
              <h3 className="text-xl font-semibold">Translating Message into Layered Experiences</h3>
            </div>
            {expandedSections.includes(5) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Create multi-layered content</CardTitle>
                <CardDescription>
                  Design experiences with tiered complexity for different audiences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="primaryExperiences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Experiences</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Interactive exhibit, documentary series, mobile game, educational kit" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        List the main types of experiences you'll create
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contentTiers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content Tiers</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Beginner: simple interactions; Intermediate: guided exploration; Advanced: data analysis" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Describe how content complexity will scale across audience segments
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="crossPlatformStrategy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cross-Platform Strategy</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Core concepts appear across all platforms with format-specific adaptations" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Explain how experiences will connect across platforms
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 6: Seriality & Modularity */}
        <Collapsible 
          open={expandedSections.includes(6)} 
          onOpenChange={() => toggleSection(6)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">6</div>
              <h3 className="text-xl font-semibold">Seriality & Modularity</h3>
            </div>
            {expandedSections.includes(6) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Build for ongoing engagement</CardTitle>
                <CardDescription>
                  Design experiences that unfold over time and encourage return visits
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="returnEngagement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Return Engagement Strategy</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Progressive unlocking of content, seasonal updates, evolving challenges" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Describe how you'll encourage audiences to return
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contentProgression"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content Progression</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Basic concepts lead to advanced applications; narrative arcs span multiple episodes" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Outline how content builds and progresses over time
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="modulesOrEpisodes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Modules or Episodes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Season 1: Foundations; Season 2: Applications; Season 3: Future Directions" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        List planned modules, episodes, or expansion phases
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 7: Diffusion & Partnerships */}
        <Collapsible 
          open={expandedSections.includes(7)} 
          onOpenChange={() => toggleSection(7)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">7</div>
              <h3 className="text-xl font-semibold">Diffusion & Partnerships</h3>
            </div>
            {expandedSections.includes(7) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Extend reach through partnerships</CardTitle>
                <CardDescription>
                  Identify strategic alliances to expand your audience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="potentialPartners"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Potential Partners</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Streaming platforms, schools, libraries, game publishers, community centers" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        List organizations you could partner with
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="distributionChannels"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Distribution Channels</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Educational networks, traveling exhibits circuit, app stores, streaming services" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Identify channels for reaching audiences beyond your venue
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="partnershipGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Partnership Goals</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Audience expansion, resource sharing, content distribution, revenue generation" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Outline what you hope to achieve through partnerships
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 8: Hybrid & Digital Layers */}
        <Collapsible 
          open={expandedSections.includes(8)} 
          onOpenChange={() => toggleSection(8)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">8</div>
              <h3 className="text-xl font-semibold">Hybrid & Digital Layers</h3>
            </div>
            {expandedSections.includes(8) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Create phygital experiences</CardTitle>
                <CardDescription>
                  Combine physical and digital elements for flexible engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="physicalElements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Physical Elements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Hands-on exhibits, physical kits, printed materials, in-person events" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Describe tangible aspects of your experience
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="digitalElements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Digital Elements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Mobile apps, online platforms, AR/VR experiences, streaming content" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Describe digital components of your experience
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="integrationStrategy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Integration Strategy</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., QR codes linking physical to digital, companion apps, online extensions of in-person experiences" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Explain how physical and digital elements will work together
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Step 9: Social Layer & Feedback */}
        <Collapsible 
          open={expandedSections.includes(9)} 
          onOpenChange={() => toggleSection(9)}
          className="border rounded-lg overflow-hidden"
        >
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="flex items-center gap-3">
              <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-white font-bold">9</div>
              <h3 className="text-xl font-semibold">Social Layer & Multi-Generational Feedback</h3>
            </div>
            {expandedSections.includes(9) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-t-0 rounded-t-none">
              <CardHeader>
                <CardTitle>Foster connections and gather feedback</CardTitle>
                <CardDescription>
                  Create mechanisms for social engagement and continuous improvement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="successMetrics"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Success Metrics</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Engagement time, return visits, social shares, learning outcomes, progression through content tiers" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Define how you'll measure the success of your experiences
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="feedbackMechanisms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback Mechanisms</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., User testing, surveys, analytics tracking, social media monitoring, focus groups" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Describe how you'll collect feedback from different audience segments
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="iterationStrategy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Iteration Strategy</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g., Quarterly content updates, annual major revisions, continuous A/B testing" 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Outline your approach to refining experiences based on feedback
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Submit Button */}
        <div className="pt-6 flex justify-center">
          <Button type="submit" className="flex items-center gap-2" size="lg">
            <Save size={18} />
            Save Framework Responses
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FrameworkForm;
