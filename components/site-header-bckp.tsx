import { McpSetup } from "@/components/mcp-setup";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/registry/brnd/ui/separator";
import { SidebarTrigger } from "@/registry/brnd/ui/sidebar";

export function SiteHeader() {
  return (
    <header className="flex h-13 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) bg-sidebar p-2">
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
    </header>
  );
}
