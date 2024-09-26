import { SheetContent } from "./ui/sheet";
import Link from 'next/link';


const SidebarSheet = () => {
    return (
        <SheetContent className="w-[300px] h-auto p-4">
            <div className="flex flex-col items-center space-y-2">
                <div className="flex flex-col items-center gap-3 mt-10">
                    <Link className="text-lg border-b border-text-primary pb-1" href="/" passHref>
                        Início
                    </Link>
                    <Link className="text-lg border-b border-text-primary pb-1" href="/habilidades" passHref>
                        Habilidades
                    </Link>
                    <Link className="text-lg border-b border-text-primary pb-1" href="/projetos" passHref>
                        Projetos
                    </Link>
                    <Link className="text-lg border-b border-text-primary pb-1" href="/certificados" passHref>
                        Certificados
                    </Link>
                    <Link className="text-lg border-b border-text-primary pb-1" href="/certificados" passHref>
                        Contatos
                    </Link>
                    
                    <div className="border border-b" />
                </div>
            </div>
        </SheetContent>
    );
}

export default SidebarSheet;
