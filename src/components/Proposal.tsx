import piscina from "../assets/piscina.webp";
import river from "../assets/river.webp";
import sala from "../assets/sala.webp";
export const Proposal = () => {
  return (
    <section>
      <div className="container mt-20">
        <h2 className="text-4xl font-semibold ">El arte de lo orgánico</h2>
        <p className="mt-10 lg:max-w-2xl text-lgsm text-gray-700">
          Nuestra propuesta es una oda al Ruralismo Editorial. Espacios que
          respiran, materiales que cuentan historias y un entorno que invita a
          compartir momentos auténticos. En cada rincón, la esencia de lo
          orgánico se entrelaza con la arquitectura moderna, creando un refugio
          donde el tiempo se detiene y las preocupaciones se disuelven. La
          Pesebrera no es solo un lugar, es una experiencia que celebra la
          belleza de lo natural en su forma más pura.
        </p>
      </div>
      <div className="container grid gap-20 lg:grid-cols-3 mt-10">
        <Article
          img={piscina}
          title="La Piscina"
          description="Agua cristalina sobre piedra natural"
        />
        <Article
          img={sala}
          title="Áreas Sociales"
          description="Confort diseñado para grandes grupos"
          className="lg:translate-y-10"
        />
        <Article
          img={river}
          title="Río Guaracú"
          description="Acceso privado a la pureza del agua"
        />
      </div>
    </section>
  );
};

const Article = ({
  img,
  title,
  description,
  className,
}: {
  img: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <article
      className={`overflow-hidden min-h-120 rounded-lg shadow-lg ${className || ""}`}
      style={{
        background: "url(" + img + ") no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <div className="grid w-full h-full bg-linear-to-t from-black/90 via-transparent to-transparent">
        <div className="mt-auto text-white p-5">
          <div className="font-bold text-2xl">{title}</div>

          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};
