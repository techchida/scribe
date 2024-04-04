import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import Logo from "./logo";

export default function Nav({hidden}) {
  return (
    <nav className={`border-b bg-background px-4 sticky top-0 md:px-6 z-10 ${hidden ? 'hidden' : ''}`}>
      <div className="container">
        <header className=" flex h-16 items-center gap-4 ">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              href="#"
            >
              <Logo />
              <span className="sr-only">Scribe</span>
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="#"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span>Posts</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All Posts</DropdownMenuItem>
                  <DropdownMenuItem>New Post</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Categories</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="#"
            >
              Appearance
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              href="#"
            >
              Settings
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="shrink-0 md:hidden"
                size="icon"
                variant="outline"
              >
                {/* <MenuIcon className="h-5 w-5" /> */}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  className="flex items-center gap-2 text-lg font-semibold"
                  href="#"
                >
                  {/* sublogo here  */}
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link className="hover:text-foreground" href="#">
                  Dashboard
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="#"
                >
                  Orders
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="#"
                >
                  Products
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="#"
                >
                  Customers
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="#"
                >
                  Analytics
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                {/* <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                <Input
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  placeholder="Search products..."
                  type="search"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="secondary"
                >
                  {/* <UserCircleIcon className="h-5 w-5" /> */}
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </nav>
  );
}
