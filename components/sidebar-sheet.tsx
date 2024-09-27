import { SheetContent } from "./ui/sheet";
import Link from 'next/link';

const SidebarSheet = () => {
    return (
        <SheetContent className="w-[300px] h-auto p-4">
            <div className="flex flex-col items-center space-y-2">
                <div className="flex flex-col items-center gap-3 mt-10">
                    <Link href="/" className="text-lg border-b border-text-primary pb-1">
                        Início
                    </Link>
                    <Link href="/skills" className="text-lg border-b border-text-primary pb-1">
                        Habilidades
                    </Link>
                    <Link href="/projetos" className="text-lg border-b border-text-primary pb-1">
                        Projetos
                    </Link>
                    <Link href="/certificados" className="text-lg border-b border-text-primary pb-1">
                        Certificados
                    </Link>
                    <Link href="/contatos" className="text-lg border-b border-text-primary pb-1">
                        Contatos
                    </Link>

                    <div className="border border-b" />
                </div>
            </div>
        </SheetContent>
    );
}

export default SidebarSheet;
