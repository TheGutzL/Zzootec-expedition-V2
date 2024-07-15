const Home = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-2 py-8">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/undraw_modern_design.svg"
              alt="Phone"
              className="w-4/5 h-4/5"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-3xl font-bold">
              Productos de calidad para tu celular
            </span>
            <p className="text-2xl">
              La mejor opción en cuanto a tecnología en todo el mercado y al
              alcance de tu mano{" "}
            </p>
            <button>Ver más</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-4">
            <span className="text-7xl font-bold">
              Descubre y adquiere celulares de ultima generación
            </span>
            <span className="">
              Te ofrecemos un excelente servicio a la mejor calidad/precio
            </span>
            <button>Cuentame más</button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/undraw_mobile_app.svg"
              alt="mobile"
              className="w-4/5 h-4/5"
            />
          </div>
        </div>
        <div>
          <span className="font-bold uppercase text-xl">Asociado con</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/mobile_info.png"
              alt="mobile info"
              className="w-4/5 h-4/5"
            />
          </div>
          <div className="flex flex-col">
            <span className="uppercase text-xs">Ventas</span>
            <span className="capitalize font-bold text-4xl">
              Compra Lo ultimo en celulares
            </span>
            <p className="text-xl">
              Te ofrecemos un excelente servicio a la mejor calidad/precio
            </p>
            <button>Ir a la tienda</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-4">
            <span className="uppercase text-base">Nosotros</span>
            <span className="capitalize text-5xl font-bold">
              Somos una empresa que le da un excelente servicio a sus cliente
            </span>
            <p className="text-xl">
              Garantizamos que tu compra sea satisfactoria{" "}
            </p>
            <button>Ubicanos</button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <img
              src="./images/mobiles_show.png"
              alt="mobiles show"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4 justify-center items-center gap-4">
          <span className="text-base font-semibold">Testimonios</span>
          <span className="text-3xl font-bold">
            Lee lo que otros tienen para decir
          </span>
          <div className="flex gap-6"></div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center font-bold py-4">
          <span className="uppercase">¿Estas listo?</span>
          <p className="uppercase text-3xl text-center w-1/3">
            Se parte de nuestra gran familia y adquiere tu dispositivo movil
          </p>
          <button>Comienza Ahora</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
