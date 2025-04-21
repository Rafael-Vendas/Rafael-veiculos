import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Image from "next/image";

const vehicles = [
  {
    name: "Chevrolet Onix 1.0",
    year: "2021",
    price: "R$ 58.900",
    image: "/cars/onix.jpg"
  },
  {
    name: "Volkswagen Gol 1.6",
    year: "2020",
    price: "R$ 52.500",
    image: "/cars/gol.jpg"
  },
  {
    name: "Fiat Argo Drive",
    year: "2022",
    price: "R$ 63.800",
    image: "/cars/argo.jpg"
  }
];

export default function RafaelVeiculosLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6 flex items-center justify-between shadow-md">
        <h1 className="text-3xl font-bold">Rafael Veículos</h1>
        <Button
          className="bg-green-600 hover:bg-green-700"
          onClick={() => window.open("https://wa.me/5512996772991", "_blank")}
        >
          <Phone className="mr-2 h-5 w-5" /> Fale Conosco
        </Button>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-extrabold mb-4">Seu próximo carro novo ou seminovo está aqui!</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Veículos selecionados, com garantia, procedência e condições facilitadas. Aproveite as melhores oportunidades da região!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-12">
        {vehicles.map((car, index) => (
          <Card key={index} className="shadow-md">
            <Image
              src={car.image}
              alt={car.name}
              width={400}
              height={300}
              className="rounded-t-xl object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-1">{car.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Ano {car.year}</p>
              <p className="text-lg font-semibold text-blue-800">{car.price}</p>
              <Button
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.open("https://wa.me/5512996772991", "_blank")}
              >
                Consultar agora no WhatsApp
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        © 2025 Rafael Veículos. Todos os direitos reservados.
      </footer>
    </div>
  );
}
