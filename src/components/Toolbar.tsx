import { FaUsers } from "react-icons/fa6";
import { TbSunset2 } from "react-icons/tb";
import { GiThreeLeaves } from "react-icons/gi";

const BOX_CLASS = "lg:flex lg:gap-4 items-center lg:min-w-60 justify-center";
export const Toolbar = () => {
  return (
    <div className="flex justify-between py-4 px-10 bg-white mx-20 rounded-xl shadow-lg">
      <div className={BOX_CLASS}>
        <FaUsers className="size-8  text-[#8C734F]" />
        <div className="hidden lg:block">
          <p className="text-sm uppercase">Capacidad</p>
          <p className="text-lg font-bold">Hasta 34 personas</p>
        </div>
      </div>
      <div className={BOX_CLASS}>
        <TbSunset2 className="size-8  text-[#8C734F]" />
        <div className="hidden lg:block">
          <p className="text-sm uppercase">Acceso</p>
          <p className="text-lg font-bold">Río Guaracú</p>
        </div>
      </div>
      <div className={BOX_CLASS}>
        <GiThreeLeaves className="size-8  text-[#8C734F]" />
        <div className="hidden lg:block">
          <p className="text-sm uppercase">Luxe</p>
          <p className="text-lg font-bold">Rural</p>
        </div>
      </div>
    </div>
  );
};
