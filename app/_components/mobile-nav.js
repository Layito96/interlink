"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { cn } from "../_lib/utils";
import { Menu } from "lucide-react";
import { menuItems } from "./main-nav";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const onOpenChange = React.useCallback((open) => {
    setOpen(open);
  }, []);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:!hidden"
        >
          <Menu className="w-6 h-6 text-primary font-semibold" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[60svh] p-0">
        <div className="overflow-auto p-6">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-3 pr-2">
                <Link
                  className="font-medium text-primary hover:bg-accent-hover/80 p-2 rounded-md hover:text-white cursor-pointer"
                  href={item.href}
                >
                  {item.label}
                </Link>
                {item?.items?.length > 0 &&
                  item.items.map((item, index) => (
                    <React.Fragment key={index}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-primary/85 "
                          >
                            {item.title}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
