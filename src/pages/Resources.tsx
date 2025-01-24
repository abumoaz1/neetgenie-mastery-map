import { Header } from "@/components/Header";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">NCERT Solutions</h2>
            <p>Access comprehensive NCERT solutions...</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Mock Tests</h2>
            <p>Practice with our extensive mock test series...</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Previous Year Papers</h2>
            <p>Analyze and practice with past year questions...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;