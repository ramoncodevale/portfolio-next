import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { categorias, habilidades,  } from "../constants";
import { icons } from "../constants/icons";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto mt-14 p-4">
      {Object.entries(habilidades).map(([categoriaKey, habilidades]) => (
        <div className="mt-5" key={categoriaKey}>
          <h3 className="text-2xl font-semibold mb-4">{categoriaKey}</h3>
          <div className="grid grid-cols-2 gap-6 text-lg">
            {habilidades.map((habilidade, index) => {
              const habilidadeCategoria = categorias.find(
                (item) => item.nome === habilidade
              );
              const nivel = habilidadeCategoria ? habilidadeCategoria.nivel : "Desconhecido"; 
              
              const Icon = icons[habilidade.toLowerCase()];
              return (
                <Card key={index} className="bg-card">
                  <CardContent className="flex flex-col items-center mt-5 rounded-lg shadow-xl">
                    {Icon && <Icon className="w-20 h-20 text-primary" />}
                    <CardDescription className="font-bold mt-5">{habilidade}</CardDescription>
                    <Badge className="text-sm  px-3 py-1 rounded-xl  font-semibold mt-2">{nivel}</Badge>
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
