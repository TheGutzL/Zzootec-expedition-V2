
const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center my-10 ">
        <div className="w-[200px] h-[200px] rounded-full border-4 border-gray-300 flex justify-center items-center">
          <img
            src="./images/logo.jpg"
            className="w-[190px] h-[190px] rounded-full "
          ></img>
        </div>
      </div>
      <hr className="w-full h-1 bg-gray-300 mx-10"></hr>
      <div className="grid grid-cols-2 gap-2 mt-5 ">
        <div className="flex flex-col gap-3 hover:scale-105 transition-transform duration-300 hover:bg-gray-100">
          <span className="capitalize text-5xl font-bold text-center mt-10">
            Somos una empresa que le da un excelente servicio a sus cliente
          </span>
          <p className="text-2xl text-center mt-10">
            Garantizamos que tu compra sea satisfactoria{" "}
          </p>
          <button>Ubícanos</button>
        </div>
        <div className="my-1 mx-1 flex justify-center items-center w-[925px] h-96 border-l-2 border-4">
          <img
            src="./images/mobiles_show.png"
            alt="mobiles show"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      </div>
      <div className="flex-col items-center justify-center text-center ">
        <div className="my-10">
          <span className="text-2xl font-bold  ">
            TE OFRECEMOS DISTINTOS MODELOS DE CELULARES A UN BUEN PRECIO
          </span>
        </div>
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
          Agrega más modelos según sea necesario
        </div>
      </div>
    </div>
  );
};

export default About;
