/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ChevronsUpDown, LogOut } from "lucide-react";
import {
  Home,
  User,
  ShoppingCart,
  BarChart,
  PlusSquare,
  Mail,
  Package,
  Newspaper,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import { logout, getCurrentUser } from "@/services/AuthService";
import { cn } from "@/lib/utils";
import Link from "next/link";
import RLogo from "../../../../assets/svgs/RLogo.svg";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  matchExact?: boolean;
  matchPartial?: boolean;
  adminOnly?: boolean;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    matchExact: true,
  },
  //   {
  //     title: "Profile",
  //     url: "/dashboard/profile",
  //     icon: User,
  //   },
  {
    title: "Track Purchases",
    url: "/dashboard/purchase-history",
    icon: ShoppingCart,
  },
  {
    title: "Track Sales",
    url: "/dashboard/sales-history",
    icon: BarChart,
  },
  {
    title: "Add Listing",
    url: "/dashboard/listing/add-listing",
    icon: PlusSquare,
  },
  {
    title: "Manage Listings",
    url: "/dashboard/listing",
    icon: Package,
    matchPartial: true,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: Mail,
    adminOnly: true,
  },
  {
    title: "Newsletters",
    url: "/dashboard/newsletters",
    icon: Newspaper,
    adminOnly: true,
  },
];

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (!confirmed) return;

    try {
      setIsLoading(true);
      await logout();

      if (protectedRoutes.some((route) => pathname.match(route))) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="focus:outline-none rounded-lg"
          >
            <SidebarMenuButton
              size="lg"
              className="px-3 py-2 rounded-lg hover:bg-gray-50 data-[state=open]:bg-gray-100 transition-colors duration-200"
              aria-label="User menu"
            >
              <Avatar className="h-8 w-8 rounded-lg border border-gray-200">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="rounded-lg bg-primary text-white font-medium">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-gray-800">
                  {user?.name}
                </span>
                <span className="truncate text-xs text-gray-500">
                  {user?.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-gray-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border border-gray-200 bg-white shadow-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 p-3 text-left">
                <Avatar className="h-10 w-10 rounded-lg border border-gray-200">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="rounded-lg bg-primary text-white font-medium ">
                    {user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left leading-tight ">
                  <span className="truncate font-medium text-gray-900">
                    {user?.name}
                  </span>
                  <span className="truncate text-sm text-gray-500">
                    {user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="my-1 bg-gray-200" />

            <DropdownMenuItem
              onClick={() => router.push("/dashboard/profile")}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer focus:outline-none"
            >
              <User className="mr-2 size-4 text-5xl" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 focus:bg-red-50 cursor-pointer focus:outline-none"
            >
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const checkIfActive = (item: NavItem, currentPath: string): boolean => {
    if (item.matchExact) return currentPath === item.url;
    if (item.matchPartial) return currentPath.startsWith(item.url);
    return (
      currentPath.startsWith(item.url) &&
      (currentPath === item.url ||
        currentPath === `${item.url}/` ||
        !currentPath.slice(item.url.length + 1).includes("/"))
    );
  };

  const filteredNavItems = NAV_ITEMS.filter(
    (item) => !item.adminOnly || user?.role === "admin"
  ).map((item) => ({
    ...item,
    isActive: checkIfActive(item, pathname),
  }));

  if (loading) {
    return (
      <Sidebar
        {...props}
        className="bg-white border-r border-gray-200 flex flex-col h-full"
      >
        <SidebarHeader className="px-4 py-6 border-b border-gray-200">
          <Skeleton className="h-10 w-full rounded-lg" />
        </SidebarHeader>
        <SidebarContent className="px-2 py-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-full rounded" />
            ))}
          </div>
        </SidebarContent>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-3 w-1/2 rounded" />
            </div>
          </div>
        </div>
      </Sidebar>
    );
  }

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-white border-r border-gray-200 flex flex-col h-full"
    >
      <SidebarHeader className="px-4 py-6 border-b border-gray-200">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-transparent focus:outline-none bg-white"
            >
              <Link
                href="/"
                className="flex items-center gap-3 bg-white"
                aria-label="ReCycleMart Home"
              >
                <div className="flex items-center justify-center bg-primary rounded-lg p-2">
                  <Image
                    src={RLogo}
                    height={30}
                    width={30}
                    alt="r-logo"
                  ></Image>
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <h2 className="font-bold text-lg text-[#FF5E01]">
                    ReCycleMart
                  </h2>
                  <p className="text-xs text-gray-500">
                    Sustainable Marketplace
                  </p>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4 flex-1 overflow-y-auto">
        <nav aria-label="Main navigation">
          <ul className="space-y-1">
            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "w-full justify-start transition-colors duration-200 focus:outline-none",
                        item.isActive
                          ? "bg-primary/10 font-medium text-primary"
                          : "hover:bg-gray-50 text-gray-700"
                      )}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg focus:outline-none"
                        aria-current={item.isActive ? "page" : undefined}
                      >
                        <div
                          className={cn(
                            "p-1.5 rounded-md",
                            item.isActive ? "bg-primary/20" : "bg-gray-100"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-5 w-5 flex-shrink-0",
                              item.isActive ? "text-primary" : "text-gray-600"
                            )}
                            aria-hidden="true"
                          />
                        </div>
                        <span className="truncate">{item.title}</span>
                        {item.badge && (
                          <span
                            className={cn(
                              "ml-auto px-2 py-0.5 rounded-full text-xs font-medium",
                              item.isActive
                                ? "bg-primary/10 text-primary"
                                : "bg-gray-100 text-gray-600"
                            )}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </li>
              );
            })}
          </ul>
        </nav>
      </SidebarContent>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <NavUser />
      </div>
    </Sidebar>
  );
}
