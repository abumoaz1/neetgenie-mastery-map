import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
              <p className="text-gray-500">Enter your credentials to access your account</p>
            </div>
            
            <div className="grid gap-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    className="h-11"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="h-11"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-500">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              
              <Button className="h-11 font-medium">
                Sign In
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-11 font-medium"
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="h-11 font-medium"
                >
                  <BsWhatsapp className="mr-2 h-5 w-5 text-green-600" />
                  WhatsApp
                </Button>
              </div>

              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;