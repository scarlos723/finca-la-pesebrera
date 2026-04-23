import { FaMapLocationDot } from "react-icons/fa6";
import map from "../assets/map.webp";
export const Location = () => {
  return (
    <section className="container my-20">
      <div className="grid lg:grid-cols-2 rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#2D4F1E] p-14 lg:p-26">
          <p className="font-bold text-[#A9D293] uppercase">
            Ubicación Privilegiada
          </p>
          <h2 className="text-white text-4xl font-semibold mt-3">
            Ubicada en el corazón de la naturaleza antioqueña
          </h2>
          <p className="mt-10 lg:max-w-2xl text-lgsm text-[#A9D293] text-pretty">
            A solo 90 minutos de Medellín, un microclima perfecto nos rodea los
            365 días del año. La Pesebrera es el punto de encuentro donde la
            tradición se funde con el descanso
          </p>
          <div className="flex items-center gap-6 mt-10">
            <div className="p-2 rounded-lg bg-white/20 ">
              <FaMapLocationDot className="size-8 lg:size-10 text-[#A9D293]" />
            </div>
            <p className="text-white">San Jerónimo, Antioquia - Colombia</p>
          </div>
        </div>
        <div className="bg-[#446733] p-8 min-h-100 lg:p-20">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={map}
            alt="Mapa de la ubicación"
            style={{
              maskImage: `radial-gradient(black 10%, transparent)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};
