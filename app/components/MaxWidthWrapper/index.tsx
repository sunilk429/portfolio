import { cn } from "@/app/utils";
import React from "react";
interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}
function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
  return <div className={cn(
    "h-full mx-auto w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-2 sm:px-4 md:px-8 lg:px-20",
    className
  )}>{children}</div>
}

export default MaxWidthWrapper;
