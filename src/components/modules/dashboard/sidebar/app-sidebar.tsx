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
import { NavMain } from "./nav-main";

const navItems = [
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
    matchPartial: true, // Will match any subroute of /dashboard/listing
  },
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

  const enhancedNavItems = navItems.map((item) => ({
    ...item,
    isActive: checkIfActive(item, pathname),
  }));

  function checkIfActive(
    item: (typeof navItems)[0],
    currentPath: string
  ): boolean {
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
          <NavMain items={enhancedNavItems} />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
