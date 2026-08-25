import { useReducedMotion } from "motion/react";
import bbq from "@/assets/recent/bbq.webp";
import bed from "@/assets/recent/habitacion.webp";
import river2 from "@/assets/recent/accesorio.webp";
import swimingpool from "@/assets/recent/piscina2.webp";
import turkishbath from "@/assets/recent/turco.webp";
import { FaUsers } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { IoBeer } from "react-icons/io5";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { BlurFade } from "./BlurFade";
import { CountUp } from "./CountUp";

const baseClass =
  "border border-gray-100 w-full h-full rounded-xl shadow-md overflow-hidden transition-shadow duration-500 hover:shadow-xl";

export const Experience = () => {
  const reduce = useReducedMotion();
  const hoverImg = reduce
    ? ""
    : "transition-[background-size] duration-700 ease-out hover:[background-size:110%]";
  return (
    <section id="experience-section">
      <div className="container py-10">
        <BlurFade amount={14} duration={0.7}>
          <h2 className="text-2xl lg:text-4xl font-bold mb-10 ">Experiencia</h2>
        </BlurFade>

        <div className="grid h-700 lg:h-200 lg:grid-cols-4 lg:grid-rows-3 gap-6">
          <BlurFade delay={0} className="lg:col-span-2 lg:row-span-2">
            <div className={baseClass}>
              <div
                style={{
                  backgroundImage: `url(${river2})`,
                }}
                className={`w-full h-full bg-cover bg-center ${hoverImg}`}
              >
                <div className="w-full h-full bg-linear-to-t from-black/80 via-transparent to-transparent p-8 lg:p-4 xl:p-8 flex items-end">
                  <div>
                    <p className="uppercase font-bold text-[#A9D293]">
                      Disfruta de la naturaleza
                    </p>
                    <h3 className="font-bold text-white text-4xl">
                      Acceso directo al río
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.1} className="lg:col-span-1 lg:row-span-1">
            <div className={baseClass}>
              <div className="bg-[#2D4F1E] w-full h-full p-8 lg:p-4 xl:p-8 text-[#A9D293] flex flex-col">
                <div className="flex justify-between items-center">
                  <FaUsers className="size-5 lg:size-10" />
                  <p className="text-sm uppercase">Capacidad</p>
                </div>
                <div className="mt-auto lg:mt-10">
                  <CountUp
                    to={34}
                    className="font-bold text-6xl block"
                  />
                </div>
                <p className="text-sm">
                  Nuestro espacio tiene capacidad para grandes grupos.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} className="lg:col-span-1 lg:row-span-1">
            <div className={baseClass}>
              <div
                className={`w-full h-full bg-cover bg-center ${hoverImg}`}
                style={{
                  backgroundImage: `url(${bbq})`,
                }}
              >
                <div className="flex flex-col justify-between text-white bg-linear-to-t from-black/80 via-transparent to-transparent w-full h-full p-8 lg:p-4 xl:p-8">
                  <div className="p-2 bg-gray-300/10 backdrop-blur-md rounded-md  ml-auto">
                    <MdOutlineOutdoorGrill className="size-5 lg:size-10" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">BBQ Ahumador</h3>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.3} className="lg:col-span-1 lg:row-span-1">
            <div className={baseClass}>
              <div className="grid text-[#2D4F1E] p-8 lg:p-4 xl:p-8 h-full w-full ">
                <div className="grid items-center">
                  <div className=" bg-gray-100 p-3 mr-auto  rounded-md">
                    <IoBeer className="size-5 lg:size-10" />
                  </div>
                </div>
                <div className="">
                  <h3 className="font-bold text-2xl">Billares Privados</h3>
                  <p className="text-sm mt-2">
                    Disfruta de una clásica recreación con amigos en nuestras
                    mesas de billar.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.4} className="lg:col-span-1 lg:row-span-2">
            <div className={baseClass}>
              <div
                className={`w-full h-full bg-cover bg-center relative ${hoverImg}`}
                style={{
                  backgroundImage: `url(${swimingpool})`,
                }}
              >
                <div className="flex flex-col  justify-center items-center w-full h-full bg-linear-to-t from-black/80 via-transparent to-transparent">
                  <div className="bg-gray-200/20 backdrop-blur-md rounded-md">
                    <GrSwim className="size-5 lg:size-10 text-white m-3" />
                  </div>
                  <div className="absolute bottom-10 text-center px-4">
                    <h3 className=" text-white text-xl font-bold uppercase">
                      Piscinas Privadas
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.5} className="lg:col-span-2 lg:row-span-1">
            <div className={`${baseClass} bg-gray-200`}>
              <div className="grid h-full lg:flex lg:justify-between p-8 lg:p-4 xl:p-8">
                <div className="grid">
                  <div className="flex gap-3 items-centesize-r text-[#8C734F]">
                    <GiThreeLeaves className="size-5 lg:7" />
                    <p className="font-semibold uppercase text-xl">Bienestar</p>
                  </div>
                  <div className="text-[#2D4F1E] mt-auto">
                    <h3 className="text-4xl font-bold mb-2">Baño Turco</h3>
                    <p>
                      Un refugio de vapor para relajarte profundamente y renovar
                      tu energía. Purifica cuerpo y mente en un ambiente diseñado
                      para tu bienestar.
                    </p>
                  </div>
                </div>
                <div className="grid place-content-center">
                  <div className="border-5 border-white rounded-md size-60 lg:size-40 overflow-hidden rotate-6 translate-y-2">
                    <img
                      className="w-full h-full object-cover"
                      src={turkishbath}
                      alt="Baño Turco"
                    />
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.6} className="lg:col-span-1 lg:row-span-1">
            <div className={baseClass}>
              <div
                className={`w-full h-full bg-cover bg-center ${hoverImg}`}
                style={{
                  backgroundImage: `url(${bed})`,
                }}
              >
                <div className="grid p-8 lg:p-4 xl:p-8 h-full w-full bg-linear-to-t from-black/80 via-transparent to-transparent">
                  <h3 className="text-xl font-bold text-white mt-auto">
                    Cómodas Habitaciones
                  </h3>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
