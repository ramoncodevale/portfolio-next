import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Importe o componente Button

const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto mt-14 p-4">
      <Card className="max-w-6xl mx-auto p-6">
        <CardContent>
          <h2 className="text-4xl font-bold text-center mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 gap-6 text-lg">
            <Button className="p-4 bg-primary rounded-lg shadow-sm hover:bg-secondary transition-colors">
              HTML, CSS, JavaScript
            </Button>
            <Button className="p-4 bg-primary rounded-lg shadow-sm hover:bg-secondary transition-colors">
              TypeScript, Tailwind CSS, React
            </Button>
            <Button className="p-4 bg-primary rounded-lg shadow-sm hover:bg-secondary transition-colors">
              Next.js
            </Button>
            <Button className="p-4 bg-primary rounded-lg shadow-sm hover:bg-secondary transition-colors">
              Git, GitHub, Axios
            </Button>
            <Button className="p-4 bg-primary rounded-lg shadow-sm hover:bg-secondary transition-colors">
              ESLint, Prettier
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
