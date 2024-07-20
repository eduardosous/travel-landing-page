import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Solicite um orçamento</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <input
            className="w-full p-3 border rounded"
            type="text"
            placeholder="Nome"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 border rounded"
            type="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 border rounded"
            type="text"
            placeholder="Destino desejado"
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 border rounded"
            type="text"
            placeholder="Datas de viagem"
            required
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
