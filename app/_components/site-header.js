import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import newlogoInterlink from "/public/4.svg";

export function SiteHeader() {
  return (
    <header className=" bg-accent sticky top-0 z-50 w-full border-b border-primary/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center px-4" aria-label="Global">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:hidden lg:hidden xl:hidden 2xl:hidden">
            {/* <CommandMenu /> */}
            <Image
              src={newlogoInterlink}
              alt="Logo Interlink"
              priority
              // placeholder="blur"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
