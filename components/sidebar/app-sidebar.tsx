"use client";

import * as React from "react";

import { NavDocuments } from "@/components/sidebar/nav-documents";
import { docsConfig } from "@/config/docs";
import { Logo } from "@/registry/brnd/branding/logo";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/brnd/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="border-b border-dashed h-13 items-center flex justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Logo className="!size-5" />
                <span className="text-base font-medium">Brnd Registry</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <NavDocuments config={docsConfig} />
    </Sidebar>
  );
}
