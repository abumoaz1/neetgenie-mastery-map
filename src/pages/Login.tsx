import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="w-full">Login</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;