"use client";

import { ChevronsUpDown, LogOut, Settings } from "lucide-react";

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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/contants";
import { logout } from "@/services/AuthService";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { user, setIsLoading } = useUser();

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    setIsLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

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
                <AvatarImage alt={user?.name} />
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
                  <AvatarImage alt={user?.name} />
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

            <DropdownMenuItem className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
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
