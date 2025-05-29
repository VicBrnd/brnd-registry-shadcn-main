"use client";

import * as React from "react";

import { blocks } from "@/components/blocks";
import { NavDocuments } from "@/components/sidebar/nav-documents";
import { Logo } from "@/registry/brnd/branding/logo";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/brnd/ui/sidebar";
import Link from "next/link";

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
              <Link href="/registry">
                <Logo className="!size-5" />
                <span className="text-base font-medium">Brnd Registry</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <NavDocuments items={blocks} />
    </Sidebar>
  );
}
