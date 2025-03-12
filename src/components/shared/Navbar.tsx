"use client";

import { Button } from "../ui/button";
import { Heart, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/assets/svgs/Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/contants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <header className="border-b w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo and Site Name */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <h1 className="text-xl font-bold whitespace-nowrap text-[#FF5E01]">ReCycleMart</h1>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full border border-gray-300 rounded-full py-2 px-5 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className={`font-medium ${pathname === "/" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`font-medium ${pathname === "/products" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
          >
            Products
          </Link>
          <Link
            href="/about"
            className={`font-medium ${pathname === "/about" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-medium ${pathname === "/contact" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
          >
            Contact
          </Link>

          {/* User Menu */}
          {user ? (
            <>
              <Link href="/cart">
                <Button variant="outline" className="rounded-full border-[#FF5E01] p-0 size-10 text-[#FF5E01]">
                  <Heart />
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="">
                    <AvatarImage className="h-8 w-8 " src="https://res.cloudinary.com/daxjf1buu/image/upload/v1741228886/users_jauzzl.jpg" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/dashboard/profile">
                    <DropdownMenuItem className={pathname === "/dashboard/profile" ? "bg-[#FF5E01] text-white" : ""}>
                      Profile
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard">
                    <DropdownMenuItem className={pathname === "/dashboard" ? "bg-[#FF5E01] text-white" : ""}>
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 hover:bg-red-600 text-white cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200"
                    onClick={handleLogOut}
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-lg bg-[#FF5E01] hover:bg-[#D94F01] text-white" variant="outline">
                Login
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="p-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 rounded-full py-2 px-4"
            />

            <Link
              href="/"
              className={`font-medium ${pathname === "/" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`font-medium ${pathname === "/products" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`font-medium ${pathname === "/about" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${pathname === "/contact" ? "text-[#FF5E01] font-semibold" : "text-gray-700 hover:text-[#FF5E01]"}`}
            >
              Contact
            </Link>
            <div className="flex justify-around mt-3">
              <Button variant="outline" className="rounded-full p-0 size-10 border-[#FF5E01] text-[#FF5E01]">
                <Heart />
              </Button> 
            </div>
            {!user && (
              <Link href="/login" className="w-full">
                <Button className="w-full" variant="outline">
                  Login
                </Button>
              </Link>
            )}

            
          </div>
        </div>
      )}
    </header>
  );
}
