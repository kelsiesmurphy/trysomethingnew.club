"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
} from "@workspace/ui/components/drawer";
import { Button } from "@workspace/ui/components/button";
import { useState } from "react";
import NavItems from "./navigation-items";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="size-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] pb-4 px-4 space-y-4">
        <DrawerHeader className="sr-only">
          <DrawerTitle>trysomethingnew.club Mobile Menu</DrawerTitle>
          <DrawerDescription>
            Select an option from the buttons below
          </DrawerDescription>
        </DrawerHeader>
        <NavItems />
      </DrawerContent>
    </Drawer>
  );
}
