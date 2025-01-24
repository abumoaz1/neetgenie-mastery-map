import { GraduationCap, Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float mb-8">
            <GraduationCap size={64} className="text-white" />
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Crack NEET 2025 with NEETGenie's AI-Powered Mastery
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Get personalized NCERT plans, 24/7 AI mentorship, and All India mock rankings
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => window.location.href = "#demo"}
            >
              Start Free Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = "#features"}
            >
              Explore Features
              <Brain className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
};