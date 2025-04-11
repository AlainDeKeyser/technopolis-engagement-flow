
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FrameworkStep from "@/components/FrameworkStep";
import FrameworkSummary from "@/components/FrameworkSummary";
import Footer from "@/components/Footer";
import { 
  Users, Globe, AtomIcon, Palette, Wrench, Layers, 
  Repeat, Share2, Smartphone, MessageSquare 
} from "lucide-react";

const Index = () => {
  const frameworkSteps = [
    {
      number: 1,
      title: "Audience & Context",
      goal: "Identify and segment your audience not just by demographic (families, schools, teens) but also by developmental stage and where they are.",
      tool: "Enhanced Audience-Context Matrix",
      outcome: "A clear map showing which audiences can be reached where—and how their needs evolve over time.",
      icon: <Users />
    },
    {
      number: 2,
      title: "Substantive Anchor Points",
      goal: "Ground your concepts in scientific or societal themes that have broad appeal and can be appreciated at multiple depths.",
      tool: "Theme Matrix (with Layering Potential)",
      outcome: "A prioritized theme that resonates whether someone is 5, 15, or 50—and can be expanded over time.",
      icon: <AtomIcon />
    },
    {
      number: 3,
      title: "Design Philosophy",
      goal: "Decide on the overarching creative lens—speculative, immersive, co-creative, cinematic—while ensuring it can flex for each platform.",
      tool: "Design Mode Selector",
      outcome: "A unifying creative approach that keeps Technopolis's brand consistent across experiences, while offering age-appropriate depths.",
      icon: <Palette />
    },
    {
      number: 4,
      title: "Creative Constraints",
      goal: "Use constraints (budget, time, format) as innovation drivers—ensuring experiences can be easily deployed off-site, updated over time, and accessed by varied audiences.",
      tool: "Creative Constraints Cards",
      outcome: "Efficient, sustainable concepts that can scale and adapt to different budgets, contexts, and age groups.",
      icon: <Wrench />
    },
    {
      number: 5,
      title: "Translating Message into Layered Experiences",
      goal: "Turn your chosen theme into tangible or virtual experiences with tiered difficulty/complexity.",
      tool: "From Message to Medium",
      outcome: "A multi-layered content suite that reveals deeper layers to returning or older audiences—keeping them engaged as they mature.",
      icon: <Layers />
    },
    {
      number: 6,
      title: "Seriality & Modularity",
      goal: "Build experiences in episodes or modules that can unfold over time, prompting audiences to return or progress to the next level of complexity.",
      tool: "Narrative Ladder",
      outcome: "Audiences feel there's always \"more\" to discover, fueling repeat engagement and long-term loyalty to Technopolis offerings.",
      icon: <Repeat />
    },
    {
      number: 7,
      title: "Diffusion & Partnerships",
      goal: "Extend reach beyond the physical museum via strategic alliances—production studios, streaming platforms, mobile app publishers, schools, libraries, community centers.",
      tool: "Out-of-Venue Playbook",
      outcome: "Access to new audiences, shared resources, and deeper penetration into everyday life—thus reducing dependency on high-season visits.",
      icon: <Share2 />
    },
    {
      number: 8,
      title: "Hybrid & Digital Layers",
      goal: "Combine physical interaction with digital tools to allow audiences to engage wherever and whenever.",
      tool: "Phygital Spectrum Slider",
      outcome: "Experiences that seamlessly operate in-person and online, ensuring resilience against weather or location constraints.",
      icon: <Smartphone />
    },
    {
      number: 9,
      title: "Social Layer & Multi-Generational Feedback",
      goal: "Foster social connections, knowledge sharing, and iterative improvement based on real user data from different age groups.",
      tool: "Engagement Metrics Cards",
      outcome: "Continuous optimization. You can refine concepts as you learn how each generational segment engages, and adapt future releases, expansions, or episodes.",
      icon: <MessageSquare />
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="framework" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="mb-4">The 9-Step Framework</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach for creating engaging, multi-generational educational experiences across various platforms.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {frameworkSteps.map((step) => (
                <FrameworkStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  goal={step.goal}
                  tool={step.tool}
                  outcome={step.outcome}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <FrameworkSummary />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
