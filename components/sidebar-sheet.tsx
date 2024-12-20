import React, { memo } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const SidebarSheet = memo(() => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Abrir menu">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[250px] lg:w-[300px] p-4 transition-transform duration-200 ease-in-out"
            >
                <div className="flex flex-col items-center mt-7 space-y-5">
                    <Link href="/" className="text-lg border-b border-text-primary pb-1">
                        Início
                    </Link>
                    <Link href="/skills" className="text-lg border-b border-text-primary pb-1">
                        Habilidades
                    </Link>
                    <Link href="/projects" className="text-lg border-b border-text-primary pb-1">
                        Projetos
                    </Link>
                    <Link href="/contatos" className="text-lg border-b border-text-primary pb-1">
                        Contatos
                    </Link>
                    <div className="mt-7">
                        <ModeToggle />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
});

export default SidebarSheet;
