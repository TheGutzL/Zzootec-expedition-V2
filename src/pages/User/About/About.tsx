const About = () => {
  return (
    <div className="flex flex-col items-center text-gray-800">
      <div className="my-12">
        <div className="w-48 h-48 rounded-full border-8 border-gray-200 flex justify-center items-center overflow-hidden shadow-lg">
          <img
            src="./images/logo.jpg"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <hr className="w-3/4 h-1 bg-gray-400 my-12 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-5">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-5xl font-bold text-center leading-tight">
            Somos una empresa que le da un excelente servicio a sus clientes
          </h2>
          <p className="text-2xl text-center">
            Garantizamos que tu compra sea satisfactoria
          </p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow">
            Ubícanos
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./images/mobiles_show.png"
            alt="mobiles show"
            className="object-contain max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="my-12 text-center">
        <h3 className="text-3xl font-bold mb-8">
          TE OFRECEMOS DISTINTOS MODELOS DE CELULARES A UN BUEN PRECIO
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-2 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="./images/galaxy-s23.webp"
              alt="Modelo 1"
              className="mb-4"
            />
            <span className="font-semibold">Samsung Galaxy S-23</span>
          </div>
          <div className="border-2 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="./images/galaxy-s23.webp"
              alt="Modelo 2"
              className="mb-4"
            />
            <span className="font-semibold">Modelo 2</span>
          </div>
          <div className="border-2 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
              src="./images/galaxy-s23.webp"
              alt="Modelo 3"
              className="mb-4"
            />
            <span className="font-semibold">Modelo 3</span>
          </div>
          {/* Agrega más modelos según sea necesario */}
        </div>
      </div>
    </div>
  );
};

export default About;
