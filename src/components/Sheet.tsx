import React, { FC, ReactElement } from "react";
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

type SheetProps = {
  triggerIcon: ReactElement;
  sheetContent: ReactElement;
  sheetHeader?: string;
};

export const SheetComp: FC<SheetProps> = ({
  triggerIcon,
  sheetContent,
  sheetHeader,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="m-4">{triggerIcon}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{sheetHeader}</SheetTitle>
          <SheetDescription>{sheetContent}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
