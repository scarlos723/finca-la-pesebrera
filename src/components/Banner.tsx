import fotoBanner from "@/assets/foto-banner.jpg";
import { Toolbar } from "./Toolbar";
import { Button } from "./ui/button";
export const Banner = () => {
  const goToExperience = () => {
    const target = document.getElementById("experience-section");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative">
      <div
        className="relative h-dvh "
        style={{
          background: `url(${fotoBanner}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div className=" bg-linear-to-t from-white via-black/50 to-black/50 w-full h-full grid place-content-center">
          <div className="container text-center ">
            <h1 className="text-4xl lg:text-6xl font-bold text-white ">
              Finca la Pesebrera
              <br />
              Grandes espacios. <br />
              Mínimas preocupaciones.
            </h1>
            <p className="text-white text-lg lg:text-xl mt-5">
              Un refugio donde el río Guaracú se encuentra con la arquitectura
              moderna y el alma rural
            </p>
            <div className="flex gap-10 items-center justify-center pt-20">
              <Button variant="secondary" size={"xl"} onClick={goToExperience}>
                <span>Explora Experiencias</span>
              </Button>

              <Button size={"xl"}>
                <span>Ver Galería</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 z-2 grid w-full">
        <Toolbar />
      </div>
    </section>
  );
};
