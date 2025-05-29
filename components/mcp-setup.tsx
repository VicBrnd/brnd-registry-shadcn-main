"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";
import { McpLogo } from "@/registry/brnd/branding/mcp";
import { Button } from "@/registry/brnd/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/brnd/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/brnd/ui/tabs";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

export function McpSetup({ className }: React.ComponentProps<typeof Button>) {
  const { isCopied: isCopiedStep1, copyToClipboard: copyToClipboardStep1 } =
    useCopyToClipboard();
  const { isCopied: isCopiedStep2, copyToClipboard: copyToClipboardStep2 } =
    useCopyToClipboard();

  const [tabStep1, setTabStep1] = React.useState("bun");
  const [tabStep2, setTabStep2] = React.useState("cursor");

  const filePath = React.useMemo(() => {
    if (tabStep2 === "cursor") {
      return ".cursor/mcp.json";
    }

    if (tabStep2 === "windsurf") {
      return ".codeium/windsurf/mcp_config.json";
    }

    return ".v0/mcp.json";
  }, [tabStep2]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className={cn(className, "gap-2")}>
          <McpLogo />
          MCP
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Setup MCP</DialogTitle>
          <DialogDescription>
            Use the code below to configure the registry MCP in your IDE.
          </DialogDescription>
        </DialogHeader>
        <div className="font-medium">1. Create a new Next.js app</div>
        <Tabs
          defaultValue={tabStep1}
          onValueChange={setTabStep1}
          className="min-w-0"
        >
          <TabsList>
            <TabsTrigger value="bun">Bun</TabsTrigger>
            <TabsTrigger value="npm">Npm</TabsTrigger>
            <TabsTrigger value="pnpm">Pnpm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 z-10 top-4 size-8 rounded-md"
              onClick={() => copyToClipboardStep1(npmNewNextApp)}
            >
              {isCopiedStep1 ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <div className="overflow-x-auto bg-muted p-6 rounded-md">
              <pre className="text-sm font-mono">{npmNewNextApp}</pre>
            </div>
          </TabsContent>
          <TabsContent value="yarn" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 z-10 top-4 size-8 rounded-md"
              onClick={() => copyToClipboardStep1(yarnNewNextApp)}
            >
              {isCopiedStep1 ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <div className="overflow-x-auto bg-muted p-6 rounded-md">
              <pre className="text-sm font-mono">{yarnNewNextApp}</pre>
            </div>
          </TabsContent>
          <TabsContent value="bun" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 z-10 top-4 size-8 rounded-md"
              onClick={() => copyToClipboardStep1(bunNewNextApp)}
            >
              {isCopiedStep1 ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <div className="overflow-x-auto bg-muted p-6 rounded-md">
              <pre className="text-sm font-mono">{bunNewNextApp}</pre>
            </div>
          </TabsContent>
          <TabsContent value="pnpm" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute bg-background right-4 z-10 top-4 size-8 rounded-md"
              onClick={() => copyToClipboardStep1(pnpmNewNextApp)}
            >
              {isCopiedStep1 ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <div className="overflow-x-auto bg-muted p-6 rounded-md">
              <pre className="text-sm font-mono">
                <code>{pnpmNewNextApp}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>

        <div className="font-medium">
          2. Copy and paste the code into{" "}
          <code className="font-mono text-foreground">{filePath}</code>
        </div>
        <Tabs
          defaultValue={tabStep2}
          onValueChange={setTabStep2}
          className="min-w-0"
        >
          <TabsList>
            <TabsTrigger value="cursor">Cursor</TabsTrigger>
            <TabsTrigger value="windsurf">Windsurf</TabsTrigger>
          </TabsList>
          <TabsContent value="cursor" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 z-10 top-4 size-8 rounded-md"
              onClick={() => copyToClipboardStep2(mcpSetup)}
            >
              {isCopiedStep2 ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <div className="overflow-x-auto bg-muted p-8 rounded-md min-h-[300px]">
              <pre className="text-sm font-mono">
                <code>{mcpSetup}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="windsurf" className="relative">
            <Button
              variant="outline"
              size="icon"
              className="absolute bg-background right-4 z-10 top-4 size-8 rounded-md"
              onClick={() => copyToClipboardStep2(mcpSetup)}
            >
              {isCopiedStep2 ? <CheckIcon /> : <CopyIcon />}
            </Button>
            <div className="overflow-x-auto bg-muted p-8 rounded-md min-h-[300px]">
              <pre className="text-sm font-mono">
                <code>{mcpSetup}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

const npmNewNextApp = `npx create next-app@latest`;

const bunNewNextApp = `bunx create-next-app@latest`;

const pnpmNewNextApp = `pnpm create next-app@latest`;

const yarnNewNextApp = `yarn create next-app@latest`;

const mcpSetup = `{
  "mcpServers": {
    "shadcn": {
      "command": "bunx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "${process.env.NEXT_PUBLIC_BASE_URL}/r/registry.json"
      }
    }
  }
}
`;
