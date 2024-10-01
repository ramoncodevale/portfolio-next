import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { projetos } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
    return (
        <section className="max-w-4xl mx-auto mt-14 p-4">
            <h2 className="text-4xl font-bold text-center mb-6">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6"> 
                {projetos.map((projeto, index) => {
                    return (
                        <Card key={index} className="w-full h-full min-h-[400px]">
                            <CardContent className="flex flex-col justify-between"> 
                                <div>
                                    <CardTitle className="text-2xl font-semibold mt-5 text-card-foreground">
                                        {projeto.nome}
                                    </CardTitle>
                                    <div className="mt-5">
                                        <CardDescription>{projeto.descricao}</CardDescription>
                                    </div>
                                </div>
                                {projeto.img && (
                                    <div className="mt-5">
                                        <Image
                                            src={projeto.img}
                                            alt={`Imagem do projeto ${projeto.nome}`}
                                            width={500}
                                            height={500}
                                            className="rounded-xl"
                                        />
                                    </div>
                                )}
                                <div className="mt-5 flex justify-center gap-3">
                                    {projeto.link1 && (
                                        <Link className="underline" href={projeto.link1} target="_blank">
                                             Ver Projeto
                                        </Link>
                                    )}
                                    {projeto.link2 && (
                                        <Link className="flex items-center underline" href={projeto.link2}  target="_blank">
                                            GitHub
                                            <ArrowUpRight />
                                        </Link>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
