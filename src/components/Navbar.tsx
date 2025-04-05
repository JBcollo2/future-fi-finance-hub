
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  CreditCard, 
  BarChart3, 
  Settings, 
  ChevronDown,
  Menu
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">
            <span className="text-futuristic-cyan">Future</span>
            <span className="text-white">Fi</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Products <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-futuristic-blue border-futuristic-cyan w-56">
              <DropdownMenuItem className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-futuristic-cyan" />
                <span>Security</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <CreditCard size={16} className="text-futuristic-cyan" />
                <span>Smart Cards</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <BarChart3 size={16} className="text-futuristic-cyan" />
                <span>Investments</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Contact</Button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-futuristic-cyan text-futuristic-cyan hover:text-white">
            Log In
          </Button>
          <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 button-glow">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect px-4 pb-4 mt-2 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <Button variant="ghost" className="justify-start">Products</Button>
            <Button variant="ghost" className="justify-start">About</Button>
            <Button variant="ghost" className="justify-start">Features</Button>
            <Button variant="ghost" className="justify-start">Contact</Button>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="border-futuristic-cyan text-futuristic-cyan w-full">
                Log In
              </Button>
              <Button className="bg-futuristic-cyan hover:bg-futuristic-cyan/80 w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
