import bbq from "@/assets/bbq.webp";
import bed from "@/assets/bed.webp";
import river2 from "@/assets/river-2.webp";
import swimingpool from "@/assets/swimingpool.webp";
import turkishbath from "@/assets/turkishbath.webp";
import { FaUsers } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { IoBeer } from "react-icons/io5";
import { MdOutlineOutdoorGrill } from "react-icons/md";
export const Experience = () => {
  const baseClass =
    "border border-gray-100 w-full rounded-xl shadow-md overflow-hidden";
  return (
    <section id="experience-section">
      <div className="container py-10">
        <h2 className="text-2xl lg:text-4xl font-bold mb-10 ">Experiencia</h2>

        <div className="grid h-700 lg:h-200 lg:grid-cols-4 lg:grid-rows-3 gap-6">
          <div className={`${baseClass} lg:col-span-2 lg:row-span-2`}>
            <div
              style={{
                backgroundImage: `url(${river2})`,
              }}
              className="w-full h-full bg-cover bg-center"
            >
              <div className="w-full h-full bg-linear-to-t from-black/80 via-transparent to-transparent p-8 lg:p-4 xl:p-8 flex items-end">
                <div>
                  <p className="uppercase font-bold text-[#A9D293]">
                    Disfruta de la naturaleza
                  </p>
                  <p className="font-bold text-white text-4xl">
                    Acceso directo al río
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${baseClass} lg:col-span-1 lg:row-span-1`}>
            <div className="bg-[#2D4F1E] w-full h-full p-8 lg:p-4 xl:p-8 text-[#A9D293] flex flex-col">
              <div className="flex justify-between items-center">
                <FaUsers className="size-5 lg:size-10" />
                <p className="text-sm uppercase">Capacidad</p>
              </div>
              <div className="mt-auto lg:mt-10">
                <p className="font-bold text-6xl">34</p>
              </div>
              <p className="text-sm">
                Nuestro espacio tiene capacidad para grandes grupos.
              </p>
            </div>
          </div>
          <div className={`${baseClass} lg:col-span-1 lg:row-span-1`}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${bbq})`,
              }}
            >
              <div className="flex flex-col justify-between text-white bg-linear-to-t from-black/80 via-transparent to-transparent w-full h-full p-8 lg:p-4 xl:p-8">
                <div className="p-2 bg-gray-300/10 backdrop-blur-md rounded-md  ml-auto">
                  <MdOutlineOutdoorGrill className="size-5 lg:size-10" />
                </div>
                <div>
                  <p className="font-bold text-2xl">BBQ Ahumador</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${baseClass} lg:col-span-1 lg:row-span-1`}>
            <div className="grid text-[#2D4F1E] p-8 lg:p-4 xl:p-8 h-full w-full ">
              <div className="grid items-center">
                <div className=" bg-gray-100 p-3 mr-auto  rounded-md">
                  <IoBeer className="size-5 lg:size-10" />
                </div>
              </div>
              <div className="">
                <p className="font-bold text-2xl">Billares Privados</p>
                <p className="text-sm mt-2">
                  Disfruta de una clásica recreación con amigos en nuestras
                  mesas de billar.
                </p>
              </div>
            </div>
          </div>
          <div className={`${baseClass} lg:col-span-1 lg:row-span-2`}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${swimingpool})`,
              }}
            >
              <div className="flex flex-col  justify-center items-center w-full h-full bg-linear-to-t from-black/80 via-transparent to-transparent">
                <div className="bg-gray-200/20 backdrop-blur-md rounded-md">
                  <GrSwim className="size-5 lg:size-10 text-white m-3" />
                </div>
                <div className="absolute bottom-10 text-center px-4">
                  <p className=" text-white text-xl font-bold uppercase">
                    Piscinas Privadas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${baseClass} lg:col-span-2 lg:row-span-1 bg-gray-200`}
          >
            <div className="grid h-full lg:flex lg:justify-between p-8 lg:p-4 xl:p-8">
              <div className="grid">
                <div className="flex gap-3 items-centesize-r text-[#8C734F]">
                  <GiThreeLeaves className="size-5 lg:7" />
                  <p className="font-semibold uppercase text-xl">Bienestar</p>
                </div>
                <div className="text-[#2D4F1E] mt-auto">
                  <p className="text-4xl font-bold mb-2">Baño Turco</p>
                  <p>
                    Un refugio de vapor para relajarte profundamente y renovar
                    tu energía. Purifica cuerpo y mente en un ambiente diseñado
                    para tu bienestar.
                  </p>
                </div>
              </div>
              <div className="grid place-content-center">
                <div className="border-5 border-white rounded-md size-40 overflow-hidden rotate-6 translate-y-2">
                  <img
                    className="w-full h-full object-cover"
                    src={turkishbath}
                    alt="Baño Turco"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${baseClass} lg:col-span-1 lg:row-span-1`}>
            <div
              className="w-full h-full bg-cover bg-center "
              style={{
                backgroundImage: `url(${bed})`,
              }}
            >
              <div className="grid p-8 lg:p-4 xl:p-8 h-full w-full bg-linear-to-t from-black/80 via-transparent to-transparent">
                <p className="text-xl font-bold text-white mt-auto">
                  Cómodas Habitaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
