import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { certificacoes } from "../constants/certificacoes";

const CardsCertificados = () => {
  return (
    <div>
      {certificacoes.map((certificado) => (
        <Card key={certificado.id}>
          <CardContent>
            <CardDescription className="mt-5">
              {certificado.nome}
            </CardDescription>
            <div className="flex flex-col items-center mt-4">
              <Image
                alt={`imagem do certificado ${certificado.nome}`}
                src={certificado.img}
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardsCertificados;
