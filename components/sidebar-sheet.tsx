import { SheetContent } from './ui/sheet';
import Link from 'next/link';
import { Toggle } from './ui/toggle';
import { MoonIcon } from '@radix-ui/react-icons';
import { Sun } from 'lucide-react';
import { Separator } from './ui/separator';

interface SidebarSheetProps {
    size: number
}

const SidebarSheet = ({ size }: SidebarSheetProps) => {
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
                    <Link href="/projects" className="text-lg border-b border-text-primary pb-1">
                        Projetos
                    </Link>
                    <Link href="/certificados" className="text-lg border-b border-text-primary pb-1">
                        Certificados
                    </Link>
                    <Link href="/contatos" className="text-lg border-b border-text-primary pb-1">
                        Contatos
                    </Link>

                    <div className="mt-5">
                        <Toggle className="bg-primary py-2 px-4 flex items-center justify-center rounded-xl" variant="outline" aria-label="Toggle theme">
                            <div className="flex items-center justify-around w-full">
                                <Sun size={20} />
                                <Separator className="mx-2 h-6 bg-secondary-foreground" orientation="vertical" />
                                <MoonIcon />
                            </div>
                        </Toggle>
                    </div>

                </div>
            </div>
        </SheetContent>
    );
}

export default SidebarSheet;
