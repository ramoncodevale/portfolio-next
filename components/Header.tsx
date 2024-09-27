import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTitle, SheetTrigger } from "./ui/sheet";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
    return (
        <Card className="w-full lg:hidden">
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Sheet>
                <SheetTitle className="text-xl text-primary font-bold">Ramon Valentim</SheetTitle>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
