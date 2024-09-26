import Link from "next/link";
import Header from "../components/header";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="max-w-xl mx-auto mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Olá 👋</h2>
        <p className="text-lg leading-relaxed">
          Sou Ramon Valentim, um desenvolvedor front-end de 24 anos, movido pela paixão por tecnologia e inovação.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Desde muito cedo, a curiosidade pelo universo digital me guiou a explorar o vasto campo do desenvolvimento de software, onde encontrei minha verdadeira vocação.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Com foco no aprendizado contínuo, estou sempre em busca de novas ferramentas, tendências e melhores práticas que me permitam aprimorar minhas habilidades e entregar soluções de qualidade.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Minha jornada é marcada pela busca incansável por desafios que estimulem o crescimento pessoal e profissional.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Acredito que a tecnologia é uma força transformadora e quero contribuir ativamente para a criação de produtos que tornem a vida das pessoas mais simples e conectada.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Cada novo projeto é uma oportunidade de superar limites, aprender algo novo e evoluir como profissional.
        </p>

        <div className="flex items-center gap-3">
          <Link href="/CV-RAMON-VALENTIM-DA-SILVA-FRONT-END.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-md font-bold text-sm mt-7 p-5">
              Visualizar CV
            </Button>
            </Link>
            <Link href="https://github.com/ramoncodevale" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full rounded-lg font-bold text-sm mt-7 p-5">
               <div className="flex justify-between items-center gap-2">
               GitHub
               <GitHubLogoIcon />
               </div>
              </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
