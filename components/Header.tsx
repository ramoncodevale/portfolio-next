import { Card, CardContent } from "./ui/card";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
    return (
        <Card className="w-full">
            <CardContent className="flex flex-row items-center justify-between p-5">
                <h1 className="text-base text-primary font-bold">Ramon Valentim</h1>
                <SidebarSheet />
            </CardContent>
        </Card>
    );
};

export default Header;
