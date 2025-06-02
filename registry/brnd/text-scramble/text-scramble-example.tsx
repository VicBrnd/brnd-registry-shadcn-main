import { TextScramble } from "@/registry/brnd/text-scramble/text-scramble";
import { buttonVariants } from "@/registry/brnd/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function TextScrambleExample() {
  return (
    <Link
      href="/registry"
      className={buttonVariants({
        variant: "secondary",
        className: "h-8",
        size: "sm",
      })}
    >
      <TextScramble
        className="font-mono text-sm"
        duration={0.6}
        characterSet=". "
      >
        Text Scramble Example
      </TextScramble>
      <MoveRight className="w-4 h-4" />
    </Link>
  );
}
