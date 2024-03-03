"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { XCircle } from "lucide-react";

type SheetProps = {
  triggerIcon: ReactElement;
  sheetContent: ReactElement;
  sheetHeader?: string;
  closeSheet: boolean;
  openSheet: (a: boolean) => void;
};

export const SheetComp: FC<SheetProps> = ({
  triggerIcon,
  sheetContent,
  sheetHeader,
  closeSheet,
  openSheet,
}) => {
  console.log(closeSheet);

  return (
    <Sheet open={closeSheet} onOpenChange={() => openSheet(true)}>
      <SheetTrigger asChild>
        <Button className="m-4">{triggerIcon}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{sheetHeader}</SheetTitle>
          <SheetDescription>{sheetContent}</SheetDescription>
        </SheetHeader>
        <Button
          className="mt-10 items-center flex justify-center w-full bg-customYellow"
          onClick={() => openSheet(false)}
        >
          <XCircle />
        </Button>
      </SheetContent>
    </Sheet>
  );
};
