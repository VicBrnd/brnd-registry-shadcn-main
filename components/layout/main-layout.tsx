import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/registry/brnd/ui/sidebar";
import { cookies } from "next/headers";

export async function MainLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("__sidebar__state__")?.value === "true";
  return (
    <SidebarProvider
      variant="floating"
      defaultOpen={defaultOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex-1 min-h-0 overflow-auto">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
