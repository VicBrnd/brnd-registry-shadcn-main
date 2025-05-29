"use client";

import { DocsConfig } from "@/config/docs";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/brnd/ui/sidebar";

export function NavDocuments({ config }: { config: DocsConfig }) {
  const items = config.sidebarNav;

  return (
    <SidebarContent>
      {items.map((item) => (
        <SidebarGroup key={item.title}>
          <h4 className="rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="font-normal text-foreground">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
}
