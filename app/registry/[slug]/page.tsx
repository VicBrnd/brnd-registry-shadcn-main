import { AddCommand } from "@/components/add-command";
import { blocks } from "@/components/blocks";
import { OpenInV0 } from "@/components/open-in-v0";

import { Separator } from "@/registry/brnd/ui/separator";
import { notFound } from "next/navigation";
import { RegistryItem } from "shadcn/registry";

type NextPageProps = {
  params: Promise<{ slug: string }>;
};

// Use the registry.json file to generate static paths.
export const generateStaticParams = async () => {
  const registryData = await import("@/registry.json");
  const registry = registryData.default;

  return registry.items.map((item) => ({
    slug: item.name,
  }));
};

export default async function RegistryPage({ params }: NextPageProps) {
  const { slug } = await params;

  // Cache the registry import
  const registryData = await import("@/registry.json");
  const registry = registryData.default;

  // Find the component from the registry.
  const component = registry.items.find(
    (item) => item.name === slug
  ) as RegistryItem | null;

  if (!component) {
    return notFound();
  }

  // Trouver le block correspondant
  const currentBlock = blocks.find((block) => block.name === slug);

  return (
    <main className="max-w-7xl mx-auto flex flex-col px-4 py-8 flex-1 gap-8 md:gap-12">
      <div key={component.name} className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-sm line-clamp-1 font-medium">
              {component.title}
            </div>
            <Separator orientation="vertical" className="!h-4 hidden lg:flex" />
            <div className="text-sm text-muted-foreground line-clamp-1 hidden lg:flex">
              {component.description}
            </div>
          </div>
          <div className="flex gap-2">
            <AddCommand registryItem={component} />
            <OpenInV0 name={component.name} className="w-fit" />
          </div>
        </div>
        <div className="flex items-center border rounded-lg justify-center min-h-[400px] p-4 md:p-10 relative bg-muted/30">
          {currentBlock ? (
            <currentBlock.component />
          ) : (
            <div className="text-muted-foreground">
              Composant non trouvé pour &quot;{slug}&quot;
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
