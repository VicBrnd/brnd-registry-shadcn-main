import { cn } from "@/lib/utils";
import { useSidebar } from "@/registry/brnd/ui/sidebar";

function Header({
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"header"> &
  React.ComponentProps<"div"> & {
    collapsible?: "offcanvas" | "icon" | "none";
  }) {
  const { state, variant } = useSidebar();

  return (
    <div
      className="group peer text-sidebar-foreground"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-slot="header"
      {...props}
    >
      {/* This is what handles the header spacing */}
      <div
        data-slot="header-gap"
        className="group-data-[variant=floating]:m-2 group-data-[variant=floating]:mb-0"
      >
        <div
          data-slot="header-container"
          className={cn(
            // Base styles
            "flex h-13 z-10 items-center justify-center",

            // Floating variant
            "group-data-[variant=floating]:max-w-7xl group-data-[variant=floating]:mx-auto group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:bg-sidebar group-data-[variant=floating]:shadow-sm",

            // Inset variant
            "group-data-[variant=inset]:border-b",

            // Sidebar variant
            "group-data-[variant=sidebar]:border-b group-data-[variant=sidebar]:border-dashed",

            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export { Header };
