import { TimerIcon } from "lucide-react";

function Location() {
  return (
    <div className="flex justify-center items-center p-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl bg-gray-50 shadow-md p-4 rounded-md">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Ubícanos</h2>
          <p className="mb-6">
            Encuentra nuestra ubicación en el mapa a continuación.
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <TimerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            <p className="font-semibold">Horario de Atención</p>
          </div>
          <div className="mb-2">Peru-Ica, Av Ayabaca 777, Zzootec.Ica</div>
          <div className="mb-6">
            L-S 7:00 am a 9:00 pm | Dom 8:00 am a 8:00 pm
          </div>
          <div
            className="relative w-full overflow-hidden pt-[56%]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.1835803061936!2d-75.72839269116074!3d-14.070292374676631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e3e947ae07b5%3A0xeb1efbf00881df9a!2sZzootec!5e0!3m2!1ses-419!2spe!4v1719795325266!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full shadow-lg rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center items-center my-4 sm:my-8 lg:my-12">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Zzootec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
              VISUALIZANOS EN GOOGLE MAPS
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Location;
