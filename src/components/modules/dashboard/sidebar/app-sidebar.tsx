/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ChevronsUpDown, LogOut, Settings } from "lucide-react";
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
import Logo from "@/assets/svgs/Logo";
import React, { useEffect, useState } from "react";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  matchExact?: boolean;
  matchPartial?: boolean;
  adminOnly?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    matchExact: true,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
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
    title: "Manage Messages",
    url: "/dashboard/messages",
    icon: Mail,
    adminOnly: true,
  },
  {
    title: "Manage Newsletters",
    url: "/dashboard/newsletters",
    icon: Newspaper,
    adminOnly: true,
  },
];

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user, setIsLoading} = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (!confirmed) return;

    try {
      setIsLoading(true);
      await logout();
    //   clearUser();

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
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="px-3 py-2 rounded-lg hover:bg-gray-100 data-[state=open]:bg-gray-100"
            >
              <Avatar className="h-8 w-8 rounded-lg">
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
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg shadow-lg border border-gray-200"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={8}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 p-3 text-left">
                <Avatar className="h-10 w-10 rounded-lg">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="rounded-lg bg-primary text-white font-medium">
                    {user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate font-medium text-gray-900">
                    {user?.name}
                  </span>
                  <span className="truncate text-sm text-gray-500">
                    {user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="my-1" />

            <DropdownMenuItem
              onClick={() => router.push("/dashboard/settings")}
              className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <Settings className="mr-2 size-4" />
              Account Settings
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="px-3 py-2 text-sm text-red-600 hover:bg-red-50"
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
          <div className="animate-pulse h-10 w-full rounded bg-gray-200" />
        </SidebarHeader>
        <SidebarContent className="px-2 py-4 flex-1 overflow-y-auto">
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-8 w-full rounded bg-gray-100"
              />
            ))}
          </div>
        </SidebarContent>
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
              className="hover:bg-transparent"
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-primary rounded-lg p-2">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left leading-tight">
                  <h2 className="font-bold text-lg text-gray-800">
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
        <div className="space-y-1">
          {filteredNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "w-full justify-start",
                    item.isActive && "bg-gray-100 font-medium text-primary"
                  )}
                >
                  <Link href={item.url} className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "h-5 w-5",
                        item.isActive ? "text-primary" : "text-gray-500"
                      )}
                    />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </div>
      </SidebarContent>

      <div className="p-4 border-t border-gray-200">
        <NavUser />
      </div>
    </Sidebar>
  );
}
