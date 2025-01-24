import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Courses</h1>
        <Tabs defaultValue="physics" className="w-full">
          <TabsList>
            <TabsTrigger value="physics">Physics</TabsTrigger>
            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
            <TabsTrigger value="biology">Biology</TabsTrigger>
          </TabsList>
          <TabsContent value="physics">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Physics Courses</h2>
              <p>Physics courses content coming soon...</p>
            </div>
          </TabsContent>
          <TabsContent value="chemistry">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Chemistry Courses</h2>
              <p>Chemistry courses content coming soon...</p>
            </div>
          </TabsContent>
          <TabsContent value="biology">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-4">Biology Courses</h2>
              <p>Biology courses content coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Courses;