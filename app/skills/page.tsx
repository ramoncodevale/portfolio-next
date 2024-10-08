import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { icons } from "../constants/icons";
import { Progress } from "@/components/ui/progress";
import { habilidades } from "../constants/habilidades";
import { categorias } from "../constants/categorias";

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto mt-14 p-4">
      {Object.entries(habilidades).map(([categoriaKey, habilidades]) => (
        <div className="mt-5" key={categoriaKey}>
          <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
          <div className="grid grid-cols-2 gap-6 text-lg">
            {habilidades.map((habilidade, index) => {
              const habilidadeCategoria = categorias.find(
                (item) => item.nome === habilidade
              );
              const nivel = habilidadeCategoria ? habilidadeCategoria.nivel : "Desconhecido"; 

              const Icon = icons[habilidade.toLowerCase()];
              const progressValue = nivel === "Avançado" ? 80 : nivel === "Intermediário" ? 60 : 40;

              return (
                <Card key={index} className="bg-card">
                  <CardContent className="flex flex-col items-center mt-5 rounded-lg shadow-xl">
                    {Icon && <Icon className="w-20 h-20 text-primary" />}
                    <CardDescription className="font-bold mt-5">{habilidade}</CardDescription>
                    <Progress value={progressValue} className="w-full mt-3" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
