import { Button } from "@/components/ui/button";
import { BookOpen, Book, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-2xl font-bold text-primary">
              NEETGenie
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            <Link to="/resources" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Book className="h-4 w-4" />
              <span>Resources</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button>Register</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};