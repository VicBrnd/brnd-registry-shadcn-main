import { Logo } from "@/registry/brnd/branding/logo";
import { CopyButtonExample } from "@/registry/brnd/copy-button/copy-button-example";
import { Editor } from "@/registry/brnd/editor/editor";
import { SiteHeader } from "@/registry/brnd/header/header-example";
import { LinkPreviewExample } from "@/registry/brnd/link-preview/link-preview-example";
import { TextScrambleExample } from "@/registry/brnd/text-scramble/text-scramble-example";
import { MainNavItem } from "@/types/nav";

export const blocks: MainNavItem[] = [
  {
    title: "Text Scramble",
    name: "text-scramble",
    component: TextScrambleExample,
  },
  {
    title: "Logo",
    name: "logo",
    component: Logo,
  },

  {
    title: "Header",
    name: "header",
    component: SiteHeader,
  },
  {
    title: "Editor",
    name: "editor",
    component: Editor,
  },
  {
    title: "Link Preview",
    name: "link-preview",
    component: LinkPreviewExample,
  },
  {
    title: "Copy Button",
    name: "copy-button",
    component: CopyButtonExample,
  },
];
