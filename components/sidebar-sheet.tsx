import { SheetContent } from "./ui/sheet";
import Link from 'next/link';
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const SidebarSheet = () => {
    return (
        <SheetContent className="w-[300px] h-auto p-4">
            <div className="flex flex-col items-center space-y-2">
                <div className="flex flex-col items-center gap-3 mt-10">
                    <Link className="text-lg border-b border-text-primary pb-1" href="/" passHref>
                        Início
                    </Link>
                    <Link className="text-lg border-b border-text-primary pb-1" href="/sobre-mim" passHref>
                        Sobre Mim
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
                    <Link className="text-lg border-b border-text-primary pb-1" href="/contatos" passHref>
                        Contatos
                    </Link>
                </div>
            </div>

            <Link href="/CV-RAMON-VALENTIM-DA-SILVA-FRONT-END.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-lg font-bold text-sm mt-7 p-5">
                     Visualizar CV
                     
                </Button>
            </Link>

            <Link href="https://github.com/ramoncodevale" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full rounded-lg font-bold text-sm mt-7 p-5">
                <div className="flex items-center gap-2">
                GitHub
                <GitHubLogoIcon />
                </div>
                </Button>
            </Link>
        </SheetContent>
    );
}

export default SidebarSheet;
