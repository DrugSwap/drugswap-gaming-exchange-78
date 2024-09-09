import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from '../nav-items';
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-xl font-bold">
              DrugSwap
            </Link>
            <div className="hidden md:block ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800">
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;