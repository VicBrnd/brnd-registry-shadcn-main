"use client";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/brnd/ui/sidebar";
import { MainNavItem } from "@/types/nav";

export function NavDocuments({ items }: { items: MainNavItem[] }) {
  return (
    <SidebarContent>
      <SidebarGroup>
        <h4 className="rounded-md px-2 py-1 text-sm font-medium">Components</h4>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a
                    href={`/registry/${item.name}`}
                    className="font-normal text-foreground"
                  >
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
