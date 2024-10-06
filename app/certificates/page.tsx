import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { certificacoes } from "../constants";
import Image from "next/image";

const Certificates = () => {
    return (
        <section className="max-w-4xl mx-auto mt-14 p-4">
            <h2 className="text-4xl font-bold text-center mb-6">Certificados</h2>
            {certificacoes.map((certificado, index) => (
                <Card key={index}>
                    <CardContent>
                        <CardDescription>{certificado.nome}</CardDescription>
                        {certificado.img && (
                            <Image
                                src={certificado.img}
                                alt={`Certificado ${certificado.nome}`}
                                width={600} 
                                height={400}
                                objectFit="contain"
                            />
                        )}
                    </CardContent>
                </Card>
            ))}
        </section>
    );
};

export default Certificates;
