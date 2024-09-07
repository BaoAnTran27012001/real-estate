import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import navigations from "./navigation";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { naviItemCn } from "@/lib/classname";
import { Button } from "../ui/button";
import { Login } from "../logins";

const Header = () => {
  return (
    <div className="h-24 p-4 shadow flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          to={"/"}
          className="text-5xl font-bold tracking-widest text-blue-600"
        >
          Real Estate
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navigations.map((el) => (
              <Fragment key={el.id}>
                {el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {el.name}
                      <NavigationMenuContent className="p-4 grid grid-cols-2 gap-4 min-w-96">
                        {el.subs.map((sub) => (
                          <NavigationMenuLink
                            className={cn(naviItemCn)}
                            key={sub.pathname}
                          >
                            {sub.name}
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                )}
                {!el.hasSub && (
                  <NavigationMenuItem>
                    <NavigationMenuLink className={cn(naviItemCn)}>
                      {el.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-transparent text-stone-900 hover:underline">
              Đăng nhập / Đăng ký
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-[700px] p-0">
            <DialogTitle></DialogTitle>
            <Login />
          </DialogContent>
        </Dialog>
        <Button variant="outline" size="lg">
          Đăng tin
        </Button>
      </div>
    </div>
  );
};

export default Header;
