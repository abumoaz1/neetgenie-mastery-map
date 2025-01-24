import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Demo = () => {
  return (
    <section id="demo" className="bg-gray-50 py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Experience NEETGenie's AI
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Ask a question and get instant, accurate answers
          </p>
        </div>
        <Card className="mx-auto max-w-2xl p-6">
          <div className="mb-4 rounded-lg bg-gray-100 p-8 text-center">
            [Interactive Demo Placeholder]
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Powered by DeepSeek-R1, NEETGenie's neural engine with 95% NCERT accuracy
          </p>
        </Card>
      </div>
    </section>
  );
};