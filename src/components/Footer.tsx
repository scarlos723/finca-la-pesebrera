export const Footer = () => {
  const today = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 h-30 ">
      <div className="flex h-full items-center container justify-between ">
        <div>
          <p className="font-regular text-lg">La Pesebrera</p>
        </div>
        {/* <div>
          <p className="text-gray-500 text-sm">Diseñado por Scarlos723</p>
        </div> */}

        <div>
          <p className="text-gray-500 text-sm">@{today} La Pesebrera</p>
        </div>
      </div>
    </footer>
  );
};
