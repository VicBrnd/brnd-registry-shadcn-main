"use client";
import { McpSetup } from "@/components/mcp-setup";
import { ModeToggle } from "@/components/mode-toggle";
import { Header } from "@/registry/brnd/header/header";
import { Separator } from "@/registry/brnd/ui/separator";
import { SidebarTrigger } from "@/registry/brnd/ui/sidebar";

export function SiteHeader() {
  return (
    <Header>
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <p className="text-muted-foreground hidden md:block line-clamp-1 text-sm">
          An brnd registry for distributing code using shadcn.
        </p>
        <div className="ml-auto flex items-center gap-2">
          <McpSetup />
          <ModeToggle />
        </div>
      </div>
    </Header>
  );
}
