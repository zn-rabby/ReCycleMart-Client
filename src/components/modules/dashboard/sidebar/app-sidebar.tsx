"use client";

import * as React from "react";
import {
  Frame,
  Map,
  PieChart,
  Home,
  User,
  ShoppingCart,
  BarChart,
  List,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/assets/svgs/Logo";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
      isActive: false,
    },
    {
      title: "Track Purchases",
      url: "/dashboard/purchase-history",
      icon: ShoppingCart,
      isActive: false,
    },
    {
      title: "Track Sales",
      url: "/dashboard/sales-history",
      icon: BarChart,
      isActive: false,
    },
    {
      title: "Listing",
      url: "/dashboard/listing",
      icon: List,
      items: [
        {
          title: "Manage Listing",
          url: "/dashboard/listing",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageCircle,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="bg-gray-50 border-r border-gray-200"
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
      <SidebarContent className="px-2 py-4">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="px-2 py-4 border-t border-gray-200">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
