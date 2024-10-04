import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTitle } from "./ui/sheet";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
    return (
        <Card className="w-full lg:hidden">
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Sheet>
                <SheetTitle className="text-base text-primary font-bold">Ramon Valentim</SheetTitle>
                    <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
