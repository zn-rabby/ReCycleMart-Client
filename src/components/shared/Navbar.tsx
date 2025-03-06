"use client";

import { Button } from "../ui/button";
import { Heart, LogOut, Menu, ShoppingBag } from "lucide-react";
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
import {  useRouter } from "next/navigation";
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
          <Logo  />
          <h1 className="text-xl font-bold whitespace-nowrap">Used Sell</h1>
        </Link>

        {/* Desktop Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full border border-gray-300 rounded-full py-2 px-5 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {/* Navigation Links */}
          <Link href="/products" className="text-gray-700 hover:text-primary font-medium">
            <p>Products</p>
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
            <p>About</p>
          </Link>

          {/* Wishlist */}
          {/* <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button> */}

          {/* Cart */}
          

          {/* Create Shop */}
          {/* <Link href="/create-shop">
            <Button className="rounded-full">Create Shop</Button>
          </Link> */}

          {/* User Menu */}
          {user ? (
            <>
              {/* <Link href="/create-shop">
                <Button className="rounded-full">Create Shop</Button>
              </Link> */}
              <Button variant="outline" className="rounded-full p-0 size-10">
          <FaCartArrowDown />
          </Button>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-full" variant="outline">
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

      {/* Mobile Menu (Drawer Style) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="p-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 rounded-full py-2 px-4"
            />

            {/* <Link href="/create-shop" className="w-full">
              <Button className="w-full">Create Shop</Button>
            </Link> */}
             {/* Navigation Links */}
          <Link href="/product" className="text-gray-700 hover:text-primary font-medium">
            <p>Product</p>
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary font-medium">
            <p>About</p>
          </Link>

            <Link href="/login" className="w-full">
              <Button className="w-full" variant="outline">
                Login
              </Button>
            </Link>

            {/* Mobile Menu Icons */}
            <div className="flex justify-around mt-3">
              <Button variant="outline" className="rounded-full p-0 size-10">
                <Heart />
              </Button>
              <Button variant="outline" className="rounded-full p-0 size-10">
              <FaCartArrowDown />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
