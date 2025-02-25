import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export function AnimatedGradientText({
  children,
  className,
  ...props
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl  px-4 py-1.5 text-2xl font-medium    duration-500 ease-out [--bg-size:300%] dark:bg-black/40",
        className,
      )}
      {...props}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-clip-text text-transparent`}
      />

      {children}
    </div>
  );
}
