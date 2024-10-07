import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { certificacoes } from "../constants/certificacoes";

const Certificates = () => {
    return (
      <section className="max-w-4xl mx-auto mt-14 p-4">
        <h2 className="text-4xl font-bold text-center mb-6">Certificados</h2>
        {certificacoes.map((certificado, index) => (
          <Card key={index}>
            <CardContent>
              <CardDescription className="mt-5">
                {certificado.nome}
              </CardDescription>
              <div className="flex flex-col items-center mt-4">
                {certificado.img && (
                  <Image
                    src={certificado.img} // Deve ser uma importação válida
                    alt={certificado.nome}
                    width={500} // Tamanho ajustável
                    height={300} // Tamanho ajustável
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    );
  };

export default Certificates;
