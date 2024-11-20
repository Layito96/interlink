"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

// import { useMetaColor } from "@/hooks/use-meta-color";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { cn } from "../_lib/utils";
import { Menu } from "lucide-react";
import { menuItems } from "./main-nav";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  // const { setMetaColor, metaColor } = useMetaColor();

  const onOpenChange = React.useCallback((open) => {
    setOpen(open);
    // setMetaColor(open ? "#09090b" : metaColor);
  }, []);

  const docsConfig = {
    mainNav: [
      { title: "Profile", href: "/profile" },
      { title: "Dashboard", href: "/dashboard" },
      { title: "Activity", href: "/activity" },
      { title: "Analytics", href: "/analytics" },
      { title: "System", href: "/system" },
      { title: "Deployments", href: "/deployments" },
      { title: "My Settings", href: "/my-settings" },
      { title: "Team Settings", href: "/team-settings" },
      { title: "Help & Feedback", href: "/help-feedback" },
      { title: "Log Out", href: "/logout" },
    ],
    sidebarNav: [
      { title: "Introduction", href: "/introduction" },
      { title: "Features", href: "/features" },
      { title: "Pricing", href: "/pricing" },
      { title: "FAQs", href: "/faqs" },
      { title: "Contact", href: "/contact" },
    ],
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="!size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span> */}
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
                            {/* {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )} */}
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
