"use client";

import * as React from "react";
import {
  Frame,
  Map,
  PieChart,
  Settings,
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
      icon: Home, // Changed to Home icon
      isActive: true,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User, // Changed to User icon
      isActive: true,
    },
    {
      title: "Track Purchases",
      url: "/dashboard/purchase-history",
      icon: ShoppingCart, // Changed to ShoppingCart icon
      isActive: true,
    },
    {
      title: "Track Sales",
      url: "/dashboard/sales-history",
      icon: BarChart, // Changed to BarChart icon
      isActive: true,
    },
    {
      title: "Listing",
      url: "/dashboard/listing",
      icon: List, // Changed to List icon
      items: [
        {
          title: "Manage Listing",
          url: "/dashboard/listing",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: HelpCircle, // Changed to HelpCircle icon
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageCircle, // Changed to MessageCircle icon
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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">ReCycleMart</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}