import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, BookOpen, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Exercícios', href: '/exercicios' },
    { name: 'Ferramentas', href: '/ferramentas' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">
                  Do Zero ao Primeiro Negócio
                </span>
                <span className="ml-2 text-xl font-bold text-gray-900 sm:hidden">
                  DZPN
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  className={isActive(item.href) ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {item.name}
                </Button>
              </Link>
            ))}

            {/* User Profile Dropdown */}
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-4 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100">
                    <User className="w-4 h-4 mr-2" />
                    Olá, {user.name.split(' ')[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-xs text-gray-500">
                    Cadastrado em: {new Date(user.registrationDate).toLocaleDateString()}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sair do E-book
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user && (
              <div className="px-3 py-2 text-sm text-blue-700 font-medium bg-blue-50 rounded-md mb-2">
                Olá, {user.name}
              </div>
            )}
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            {user && (
              <div
                className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 cursor-pointer mt-2 border-t"
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
              >
                Sair do E-book
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
