// components/Skills.js
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { habilidades } from "../constants";
import { icons } from "../constants/icons"; // Importe os ícones

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto mt-14 p-4">
          <h2 className="text-4xl font-bold text-center mb-6">Habilidades</h2>
      <Card className="flex justify-center flex-1 max-w-6xl mx-auto p-6">
        <CardContent className="flex items-center">
          <div className="grid grid-cols-2 gap-6 text-lg">
            {habilidades.map((habilidade, index) => {
              const Icon = icons[habilidade.toLowerCase().replace(/\s+/g, '')];
              
              return (
                <Card key={index} className="bg-card rounded-lg shadow-xl">
                  <CardContent>
                    <Button 
                      className="p-4 bg-primary w-full rounded-xl shadow-md mt-6 hover:bg-secondary transition-colors flex items-center gap-3 justify-center"
                    >
                      {Icon && <Icon className="w-6 h-6" />} 
                      {habilidade}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
