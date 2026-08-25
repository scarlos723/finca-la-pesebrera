import { FaInstagram, FaWhatsapp, FaMapLocationDot } from "react-icons/fa6";

export const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:flex md:justify-between gap-8">
          {/* Información de la finca */}
          <div>
            <p className="font-bold text-lg text-gray-900 mb-2">La Pesebrera</p>
            <p className="text-gray-600 text-sm mb-1">San Jerónimo, Antioquia</p>
            <p className="text-gray-500 text-xs">A 40 minutos de Medellín</p>
            <a
              href="https://maps.app.goo.gl/zEvCcxyULbiDa6Ta8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition font-medium mt-3 text-sm"
            >
              <FaMapLocationDot className="size-4" />
              <span>Ver ubicación</span>
            </a>
          </div>

          {/* Contacto */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">Contacto</p>
            <div className="space-y-3">
              <a
                href="https://wa.me/573196367600"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition font-medium"
              >
                <FaWhatsapp className="size-5" />
                <span>+57 319 636 7600</span>
              </a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">Síguenos</p>
            <a
              href="https://www.instagram.com/fincalapesebrera?igsi=MTFkc2E1YnZpdnVkeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition font-medium"
            >
              <FaInstagram className="size-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-300 my-6" />

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>© {today} La Pesebrera. Tradición rural con alma moderna.</p>
        </div>
      </div>
    </footer>
  );
};
