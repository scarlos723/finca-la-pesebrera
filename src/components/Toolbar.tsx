import { BsShieldFillCheck } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { TbSunset2 } from "react-icons/tb";
export const Toolbar = () => {
  return (
    <div className="flex justify-between py-4 px-10 bg-white mx-20 rounded-xl shadow-lg">
      <div className="lg:flex lg:gap-4 items-center">
        <FaUsers className="size-8  text-[#8C734F]" />
        <div className="hidden lg:block">
          <p className="text-sm uppercase">Capacidad</p>
          <p className="text-lg font-bold">Hasta 34 personas</p>
        </div>
      </div>
      <div className="lg:flex lg:gap-4 items-center">
        <TbSunset2 className="size-8  text-[#8C734F]" />
        <div className="hidden lg:block">
          <p className="text-sm uppercase">Acceso</p>
          <p className="text-lg font-bold">Río Guaracú</p>
        </div>
      </div>
      <div className="lg:flex lg:gap-4 items-center">
        <BsShieldFillCheck className="size-8  text-[#8C734F]" />
        <div className="hidden lg:block">
          <p className="text-sm uppercase">Servicio</p>
          <p className="text-lg font-bold">Staff Privado</p>
        </div>
      </div>
    </div>
  );
};
