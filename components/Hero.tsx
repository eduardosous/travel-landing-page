const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: "url(/hero-image.jpg)" }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Explore o mundo do seu jeito
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Pacotes de viagens sob medida para você
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Solicite um orçamento gratuito
        </a>
      </div>
    </section>
  );
};

export default Hero;
