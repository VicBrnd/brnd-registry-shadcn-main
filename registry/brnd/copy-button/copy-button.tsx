"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOptimistic, useTransition } from "react";

interface CopyButtonProps {
  text: string;
  textCopied: string;
  className?: string;
}

export function CopyButton({ text, textCopied, className }: CopyButtonProps) {
  const [state, setState] = useOptimistic<"idle" | "copied">("idle");
  const [, startTransition] = useTransition();

  return (
    <motion.span
      role="button"
      aria-label={state === "idle" ? `Copy "${text}"` : "Text Copied"}
      className={cn(
        "relative rounded text-gray-600 transition-colors bg-gray-600/10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold hover:text-gray-700 hover:bg-gray-700/10 inline-flex items-center justify-center cursor-default",
        className
      )}
      onClick={() => {
        startTransition(async () => {
          navigator.clipboard.writeText(textCopied);
          setState("copied");
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setState("idle");
        });
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="invisible whitespace-pre">{text}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={state}
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            state === "copied" && "text-green-600"
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.68, -0.6, 0.32, 1.6] }}
          role="status"
          aria-live="polite"
        >
          {state === "idle" ? text : "Copied!"}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
