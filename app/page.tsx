"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

import { TextScramble } from "@/components/animate-ui/text-scramble";
import { buttonVariants } from "@/registry/brnd/ui/button";

export default function Page() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Shadcn", "Components", "You"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">
                Registry <span className="font-mono">for</span>.
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Accelerate your development with a curated library of modern,
              accessible, and fully customizable UI elements—built for
              production.
            </p>
          </div>
          <div className="flex flex-row gap-3">
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
                Components
              </TextScramble>
              <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
