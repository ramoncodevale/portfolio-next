import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";

const Header = () => {
    return (  
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex items-center justify-between pt-5">
             <h1>Olá</h1>
             <Button>Ramon</Button>
                </div>
             </SheetTrigger>
        </Sheet>
    );
}
 
export default Header;