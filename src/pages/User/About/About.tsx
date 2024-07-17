const About = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-10">
        <div className="w-48 h-48 rounded-full border-4 border-gray-300 flex justify-center items-center overflow-hidden">
          <img
            src="./images/logo.jpg"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <hr className="w-full h-1 bg-gray-300 my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        <div className="flex flex-col gap-6 items-center">
          <h2 className="text-4xl font-bold text-center">
            Somos una empresa que le da un excelente servicio a sus clientes
          </h2>
          <p className="text-xl text-center">
            Garantizamos que tu compra sea satisfactoria
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Ubícanos
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./images/mobiles_show.png"
            alt="mobiles show"
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
      <div className="my-10 text-center">
        <h3 className="text-2xl font-bold mb-5">
          TE OFRECEMOS DISTINTOS MODELOS DE CELULARES A UN BUEN PRECIO
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <img
              src="./images/galaxy-s23.webp"
              alt="Modelo 1"
              className="mb-2"
            />
            <span>Samsung Galaxy S-23</span>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <img
              src="./images/modelo2.png"
              alt="Modelo 2"
              className="mb-2"
            />
            <span>Modelo 2</span>
          </div>
          <div className="border rounded-lg p-4 flex flex-col items-center">
            <img
              src="./images/modelo3.png"
              alt="Modelo 3"
              className="mb-2"
            />
            <span>Modelo 3</span>
          </div>
          {/* Agrega más modelos según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default About;
