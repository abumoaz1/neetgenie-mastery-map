import { Brain, BookOpen, ChartBar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "NEETGenie AI Mentor 24/7",
    description: "Ask questions, get instant answers powered by DeepSeek-R1.",
    icon: Brain,
  },
  {
    title: "Smart Study Planner",
    description: "NEETGenie's adaptive schedules adjust to your school/coaching workload.",
    icon: Clock,
  },
  {
    title: "NCERT Mastery",
    description: "Complete coverage of NCERT syllabus with detailed explanations.",
    icon: BookOpen,
  },
  {
    title: "Full-Length Mock Tests",
    description: "Simulate NEET 2025 with NEETGenie's AIR predictor algorithm.",
    icon: ChartBar,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Why Choose NEETGenie?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};