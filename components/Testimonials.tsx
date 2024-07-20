import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Depoimentos de Clientes</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="max-w-xs p-4">
          <p>
            A melhor experiência de viagem que já tive! Tudo foi perfeitamente
            organizado. - Maria Silva
          </p>
        </div>
        <div className="max-w-xs p-4">
          <p>
            Exploramos destinos incríveis que nem sabíamos que existiam.
            Recomendamos! - João Santos
          </p>
        </div>
        <div className="max-w-xs p-4">
          <p>
            O atendimento foi excepcional e todas as nossas necessidades foram
            atendidas. - Ana Costa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
