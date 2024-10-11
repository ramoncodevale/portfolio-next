import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { certificacoes } from "../constants/certificacoes";

const Certificates = () => {
  return (
    <section className="max-w-4xl mx-auto mt-14 p-4" id="certificados-section">
      <h2 className="text-4xl font-bold text-center mb-6">Certificados</h2>
      {certificacoes.map((certificado) => (
        <Card key={certificado.id} id={certificado.id}>
          <CardContent>
            <CardDescription className="mt-5">
              {certificado.nome}
            </CardDescription>
            <div className="flex flex-col items-center mt-4">
              {certificado.img && (
                <Image
                  src={certificado.img} 
                  alt={certificado.nome}
                  width={500}
                  height={300}
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
