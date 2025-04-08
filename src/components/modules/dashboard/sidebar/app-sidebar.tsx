/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
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
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/assets/svgs/Logo";
import { getCurrentUser } from "@/services/AuthService";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  matchExact?: boolean;
  matchPartial?: boolean;
}

const commonNavItems: NavItem[] = [
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
];

const adminNavItems: NavItem[] = [
  {
    title: "Manage Messages",
    url: "/dashboard/messages",
    icon: Mail,
  },
  {
    title: "Manage Newsletters",
    url: "/dashboard/newsletters",
    icon: Newspaper,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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

  const isAdmin = user?.role === "admin";
  const allNavItems = [...commonNavItems, ...(isAdmin ? adminNavItems : [])];

  const enhancedNavItems = allNavItems.map((item) => ({
    ...item,
    isActive: checkIfActive(item, pathname),
  }));

  function checkIfActive(item: NavItem, currentPath: string): boolean {
    if (item.matchExact) {
      return currentPath === item.url;
    }
    if (item.matchPartial) {
      return currentPath.startsWith(item.url);
    }
    return (
      currentPath.startsWith(item.url) &&
      (currentPath === item.url ||
        currentPath === `${item.url}/` ||
        !currentPath.slice(item.url.length + 1).includes("/"))
    );
  }

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
          {enhancedNavItems.map((item) => {
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
    </Sidebar>
  );
}
