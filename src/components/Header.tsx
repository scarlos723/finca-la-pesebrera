export const Header = () => {
  return (
    <header className="absolute grid w-full">
      <div className="container py-5 top-0 z-10 w-full mx-auto flex justify-between items-center">
        <div>
          <a className="text-2xl font-bold text-white" href="/">
            La Pesebrera
          </a>
        </div>
        {/* <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav> */}
        {/* <Button>Book now</Button> */}
      </div>
    </header>
  );
};
