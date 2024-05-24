const Navbar = () => {
  return (
    <nav className="flex justify-between gap-[2rem] bg-primary-3 text-neutral-4 w-[100%]">
      <ul className="flex gap-[1rem] justify-evenly">
        <li className="p-0 m-0">
          <a className="active h5" href="/portfolio/skills">
            Skills
          </a>
        </li>
        <li>
          <a className="h5" href="/portfolio/projects">
            Projects
          </a>
        </li>
      </ul>
      <a href="/" className="h5">
        Tristan Anderson
      </a>
    </nav>
  );
};

export default Navbar;
