import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 pt-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div className="flex flex-col gap-4 mb-4">
          <img
            src="./images/logo.jpg"
            alt="logo"
            className="w-20 h-20 rounded-full"
          />
          <span>
            Making the world a better place through constructing elegant
            hierarchies.
          </span>
          <div className="flex items-center gap-8">
            <RiFacebookFill className="text-2xl hover:text-gray-300 transition-colors cursor-pointer" />
            <RiInstagramFill className="text-2xl hover:text-gray-300 transition-colors cursor-pointer" />
            <RiTwitterFill className="text-2xl hover:text-gray-300 transition-colors cursor-pointer" />
            <RiYoutubeFill className="text-2xl hover:text-gray-300 transition-colors cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-wrap justify-around gap-10">
          <div className="block">
            <span className="text-white font-semibold">Links</span>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="cursor-pointer hover:text-white transition-colors">
                Marketing
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Analiticas
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Commerce
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Insignias
              </li>
            </ul>
          </div>
          <div className="block">
            <span className="text-white font-semibold">Ayuda</span>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="cursor-pointer hover:text-white transition-colors">
                Precios
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Documentacion
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Guias
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                API Status
              </li>
            </ul>
          </div>
          <div className="block">
            <span className="text-white font-semibold">Compañia</span>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="cursor-pointer hover:text-white transition-colors">
                Acerca
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Blog
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Trabajos
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Partners
              </li>
            </ul>
          </div>
          <div className="block">
            <span className="text-white font-semibold">Legal</span>
            <ul className="flex flex-col gap-2 mt-2">
              <li className="cursor-pointer hover:text-white transition-colors">
                Claim
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Privacidad
              </li>
              <li className="cursor-pointer hover:text-white transition-colors">
                Terminos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        © {new Date().getFullYear()} Tu Compañía. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
