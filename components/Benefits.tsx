import React from "react";

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Por que viajar conosco?</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="max-w-xs p-4">
          <h3 className="text-xl font-semibold mb-2">Planos Personalizados</h3>
          <p>
            Viagens feitas sob medida para atender suas necessidades e
            preferências.
          </p>
        </div>
        <div className="max-w-xs p-4">
          <h3 className="text-xl font-semibold mb-2">Atendimento 24/7</h3>
          <p>Suporte a qualquer hora do dia, todos os dias da semana.</p>
        </div>
        <div className="max-w-xs p-4">
          <h3 className="text-xl font-semibold mb-2">Destinos Exóticos</h3>
          <p>Explore lugares incríveis e pouco conhecidos ao redor do mundo.</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
